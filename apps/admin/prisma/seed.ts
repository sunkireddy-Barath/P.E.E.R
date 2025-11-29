import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Seeded random number generator for consistent results
class SeededRandom {
    private seed: number;

    constructor(seed: number = 12345) {
        this.seed = seed;
    }

    next(): number {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }

    nextInt(min: number, max: number): number {
        return Math.floor(this.next() * (max - min + 1)) + min;
    }

    choice<T>(array: T[]): T {
        return array[this.nextInt(0, array.length - 1)];
    }
}

const rng = new SeededRandom();

// Indian names
const MALE_FIRST_NAMES = [
    'Aarav', 'Arjun', 'Aditya', 'Vihaan', 'Reyansh', 'Sai', 'Vivaan',
    'Ayaan', 'Krishna', 'Ishaan', 'Shaurya', 'Atharv', 'Pranav',
    'Arnav', 'Kabir', 'Rudra', 'Dhruv', 'Ansh', 'Yuvraj',
    'Karthik', 'Rohan', 'Aakash', 'Siddharth', 'Ravi', 'Vikram'
];

const FEMALE_FIRST_NAMES = [
    'Aadhya', 'Saanvi', 'Sara', 'Aaradhya', 'Pari', 'Ananya', 'Diya',
    'Isha', 'Navya', 'Riya', 'Kiara', 'Myra', 'Prisha', 'Aditi', 'Anika',
    'Kavya', 'Shanaya', 'Avni', 'Priya', 'Neha', 'Divya', 'Sneha',
    'Pooja', 'Anjali', 'Meera', 'Lakshmi', 'Radha'
];

const LAST_NAMES = [
    'Sharma', 'Verma', 'Patel', 'Kumar', 'Singh', 'Das', 'Jain', 'Gupta',
    'Reddy', 'Nair', 'Rao', 'Krishna', 'Iyer', 'Menon', 'Pillai', 'Agarwal',
    'Desai', 'Shah', 'Mehta', 'Kapoor', 'Malhotra', 'Chopra', 'Bansal',
    'Joshi', 'Mishra', 'Pandey', 'Sinha', 'Khan', 'Ahmed'
];

const SUBJECTS = ['Mathematics', 'Science', 'Social Science', 'English', 'Hindi'];
const CLASSES = ['6', '7', '8', '9', '10'];
const SECTIONS = ['A', 'B', 'C'];

function generateIndianName() {
    const gender = rng.next() > 0.5 ? 'male' : 'female';
    const firstName = gender === 'male' ? rng.choice(MALE_FIRST_NAMES) : rng.choice(FEMALE_FIRST_NAMES);
    const lastName = rng.choice(LAST_NAMES);
    return `${firstName} ${lastName}`;
}

function generateRollNumber(classNum: string, section: string, studentNum: number): string {
    const year = new Date().getFullYear();
    const paddedNum = studentNum.toString().padStart(3, '0');
    return `${year}-${classNum}-${section}-${paddedNum}`;
}

function generateRealisticScore(maxScore: number): number {
    // Normal distribution: mean 65, std dev 15
    const u1 = rng.next();
    const u2 = rng.next();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    const score = 65 + z0 * 15;
    return Math.max(0, Math.min(maxScore, Math.round(score)));
}

function generateAttendance(): number {
    return rng.nextInt(70, 98);
}

function getRandomDate(daysAgo: number): Date {
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);
    // Ensure weekday
    while (date.getDay() === 0 || date.getDay() === 6) {
        date.setDate(date.getDate() - 1);
    }
    return date;
}

async function main() {
    console.log('🌱 Starting database seed...');

    // Clean existing data
    console.log('🧹 Cleaning existing data...');
    await prisma.submission.deleteMany({});
    await prisma.assignment.deleteMany({});
    await prisma.performance.deleteMany({});
    await prisma.student.deleteMany({});
    await prisma.user.deleteMany({});

    // Create admin user
    console.log('👤 Creating admin user...');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.user.create({
        data: {
            email: 'admin@vidyut.org',
            name: 'Admin User',
            password: hashedPassword,
            role: 'ADMIN',
        },
    });

    // Create teacher users
    console.log('👨‍🏫 Creating teacher users...');
    const teachers = [];
    for (let i = 0; i < 5; i++) {
        const teacher = await prisma.user.create({
            data: {
                email: `teacher${i + 1}@vidyut.org`,
                name: generateIndianName(),
                password: hashedPassword,
                role: 'TEACHER',
            },
        });
        teachers.push(teacher);
    }

    // Create students
    console.log('👨‍🎓 Creating 60 students...');
    const students = [];
    for (let i = 0; i < 60; i++) {
        const classNum = rng.choice(CLASSES);
        const section = rng.choice(SECTIONS);
        const name = generateIndianName();
        // Use i+1 to ensure unique roll numbers
        const rollNumber = generateRollNumber(classNum, section, i + 1);

        const student = await prisma.student.create({
            data: {
                name,
                email: `${name.toLowerCase().replace(/ /g, '.')}@student.vidyut.org`,
                rollNumber,
                class: classNum,
                section,
                phone: `+91 ${rng.nextInt(9000000000, 9999999999)}`,
                parentPhone: `+91 ${rng.nextInt(9000000000, 9999999999)}`,
                dateOfBirth: new Date(2008 + parseInt(classNum), rng.nextInt(0, 11), rng.nextInt(1, 28)),
                address: `${rng.nextInt(1, 999)}, ${rng.choice(['MG Road', 'Gandhi Nagar', 'Rajpath', 'Station Road'])}, ${rng.choice(['Delhi', 'Mumbai', 'Bangalore', 'Chennai'])}`,
            },
        });
        students.push(student);
    }

    // Create performance records
    console.log('📊 Creating performance records...');
    for (const student of students) {
        // 5-10 performance records per student
        const numRecords = rng.nextInt(5, 10);
        for (let i = 0; i < numRecords; i++) {
            const subject = rng.choice(SUBJECTS);
            const testType = rng.choice(['quiz', 'exam', 'assignment']);
            const maxScore = testType === 'quiz' ? 20 : testType === 'exam' ? 100 : 50;

            await prisma.performance.create({
                data: {
                    studentId: student.id,
                    subject,
                    score: generateRealisticScore(maxScore),
                    maxScore,
                    testType,
                    testDate: getRandomDate(rng.nextInt(1, 90)),
                    attendance: generateAttendance(),
                    remarks: rng.next() < 0.3 ? rng.choice([
                        'Good progress',
                        'Needs improvement',
                        'Excellent work',
                        'Keep it up',
                        'Can do better',
                    ]) : null,
                },
            });
        }
    }

    // Create assignments
    console.log('📝 Creating assignments...');
    const assignments = [];
    for (let i = 0; i < 30; i++) {
        const subject = rng.choice(SUBJECTS);
        const classNum = rng.choice(CLASSES);
        const section = rng.next() < 0.5 ? rng.choice(SECTIONS) : null;
        const teacher = rng.choice(teachers);

        // Some assignments are past due, some are upcoming
        const daysOffset = rng.nextInt(-7, 21); // 7 days ago to 21 days ahead
        const dueDate = getRandomDate(-daysOffset);

        const assignment = await prisma.assignment.create({
            data: {
                title: `${subject} Assignment ${i + 1}`,
                description: `Complete exercises from Chapter ${rng.nextInt(1, 10)}. ${rng.choice([
                    'Show all working.',
                    'Answer in complete sentences.',
                    'Include diagrams where necessary.',
                    'Refer to your textbook for examples.',
                ])}`,
                subject,
                class: classNum,
                section,
                dueDate,
                maxScore: rng.choice([20, 25, 50, 100]),
                createdById: teacher.id,
            },
        });
        assignments.push(assignment);
    }

    // Create submissions
    console.log('✍️ Creating assignment submissions...');
    for (const assignment of assignments) {
        // Get students from the same class (and section if specified)
        const eligibleStudents = students.filter(s =>
            s.class === assignment.class &&
            (!assignment.section || s.section === assignment.section)
        );

        // 60-80% submission rate
        const submissionCount = Math.floor(eligibleStudents.length * (rng.nextInt(60, 80) / 100));
        const submittingStudents = eligibleStudents.slice(0, submissionCount);

        for (const student of submittingStudents) {
            const isGraded = rng.next() < 0.7; // 70% are graded

            await prisma.submission.create({
                data: {
                    assignmentId: assignment.id,
                    studentId: student.id,
                    content: rng.next() < 0.8 ? `Assignment submission for ${assignment.title}` : null,
                    submittedAt: new Date(assignment.dueDate.getTime() - rng.nextInt(0, 7) * 24 * 60 * 60 * 1000),
                    score: isGraded ? generateRealisticScore(assignment.maxScore) : null,
                    feedback: isGraded && rng.next() < 0.5 ? rng.choice([
                        'Good work! Keep it up.',
                        'Well done. Some minor improvements needed.',
                        'Excellent submission.',
                        'Please review the feedback and resubmit.',
                        'Great effort shown.',
                    ]) : null,
                    gradedAt: isGraded ? new Date() : null,
                },
            });
        }
    }

    console.log('✅ Seed completed successfully!');
    console.log(`   Created:`);
    console.log(`   - 1 admin user`);
    console.log(`   - ${teachers.length} teacher users`);
    console.log(`   - ${students.length} students`);
    console.log(`   - ${await prisma.performance.count()} performance records`);
    console.log(`   - ${assignments.length} assignments`);
    console.log(`   - ${await prisma.submission.count()} submissions`);
    console.log('');
    console.log('📝 Login credentials:');
    console.log('   Admin: admin@vidyut.org / admin123');
    console.log('   Teachers: teacher1@vidyut.org / admin123 (up to teacher5)');
}

main()
    .catch((e) => {
        console.error('Error seeding database:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
