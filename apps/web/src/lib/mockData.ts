// Mock data for development (replacing @vidyut/shared package)

export const MOCK_TUTORS = [
    {
        id: '1',
        name: 'Math Tutor',
        specialty: 'Mathematics',
        isOnline: true,
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=math'
    },
    {
        id: '2',
        name: 'Science Tutor',
        specialty: 'Science',
        isOnline: true,
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=science'
    },
    {
        id: '3',
        name: 'English Tutor',
        specialty: 'English',
        isOnline: false,
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=english'
    },
    {
        id: '4',
        name: 'Hindi Tutor',
        specialty: 'Hindi',
        isOnline: true,
        avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=hindi'
    }
];

export const MOCK_CHAT_HISTORY = [
    {
        id: '1',
        text: 'Hello! How can I help you with your studies today?',
        isAi: true,
        timestamp: Date.now() - 3600000
    },
    {
        id: '2',
        text: 'Can you explain quadratic equations?',
        isAi: false,
        timestamp: Date.now() - 3500000
    },
    {
        id: '3',
        text: 'Of course! A quadratic equation is a polynomial equation of degree 2. The general form is ax² + bx + c = 0, where a ≠ 0. The solutions can be found using the quadratic formula: x = (-b ± √(b²-4ac)) / 2a',
        isAi: true,
        timestamp: Date.now() - 3400000
    }
];

export const MOCK_CLASS_ANALYTICS = {
    grade: '8',
    section: 'A',
    totalStudents: 45,
    activeStudents: 38,
    avgMastery: 72,
    topPerformers: [
        { name: 'Priya Sharma', points: 2450, mastery: 95 },
        { name: 'Rahul Kumar', points: 2320, mastery: 92 },
        { name: 'Anita Devi', points: 2180, mastery: 88 }
    ],
    needsAttention: [
        { name: 'Vikash Singh', points: 450, mastery: 35 },
        { name: 'Sunita Rani', points: 520, mastery: 42 }
    ]
};

export const defaultMockData = {
    currentStudent: {
        id: '1',
        name: 'Aarav',
        email: 'aarav@example.com',
        grade: '8',
        section: 'A'
    },
    currentStudentCourses: [
        {
            id: '1',
            subject: 'Mathematics',
            title: 'Algebra Fundamentals',
            progress: 75,
            totalModules: 12,
            estimatedHours: 8,
            lastAccessed: new Date(Date.now() - 86400000)
        },
        {
            id: '2',
            subject: 'Science',
            title: 'Physics: Motion and Force',
            progress: 45,
            totalModules: 10,
            estimatedHours: 6,
            lastAccessed: new Date(Date.now() - 172800000)
        },
        {
            id: '3',
            subject: 'English',
            title: 'Grammar and Composition',
            progress: 20,
            totalModules: 8,
            estimatedHours: 5,
            lastAccessed: new Date(Date.now() - 259200000)
        },
        {
            id: '4',
            subject: 'Hindi',
            title: 'कविता और कहानियाँ',
            progress: 60,
            totalModules: 6,
            estimatedHours: 4,
            lastAccessed: new Date(Date.now() - 43200000)
        }
    ],
    currentStudentProgress: [
        { courseId: '1', quizzesCompleted: 8, quizzesTotal: 12, averageScore: 85, timeSpent: 180 },
        { courseId: '2', quizzesCompleted: 4, quizzesTotal: 10, averageScore: 78, timeSpent: 120 },
        { courseId: '3', quizzesCompleted: 2, quizzesTotal: 8, averageScore: 72, timeSpent: 60 },
        { courseId: '4', quizzesCompleted: 5, quizzesTotal: 6, averageScore: 88, timeSpent: 90 }
    ],
    currentStudentBadges: [
        { id: '1', name: 'Quick Learner', earnedDate: new Date(Date.now() - 604800000) },
        { id: '2', name: 'Math Wizard', earnedDate: new Date(Date.now() - 1209600000) },
        { id: '3', name: 'Science Explorer', earnedDate: null },
        { id: '4', name: 'Perfect Score', earnedDate: new Date(Date.now() - 432000000) }
    ]
};

// Mock AI inference engine
export const getInferenceEngine = async () => {
    return {
        chat: async (message: string): Promise<string> => {
            // Simulate AI response delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            const responses: Record<string, string> = {
                algebra: 'Algebra is a branch of mathematics that uses letters and symbols to represent numbers and quantities in formulas and equations. The basic operations include addition, subtraction, multiplication, and division.',
                geometry: 'Geometry is the branch of mathematics concerned with shapes, sizes, positions, and properties of space. It includes the study of points, lines, angles, surfaces, and solids.',
                physics: 'Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.',
                chemistry: 'Chemistry is the scientific study of the properties and behavior of matter. It includes the study of atoms, molecules, and their interactions.',
                biology: 'Biology is the scientific study of life. It is a natural science with a broad scope but has several unifying themes that tie it together as a single, coherent field.',
            };
            
            const lowerMessage = message.toLowerCase();
            for (const [key, response] of Object.entries(responses)) {
                if (lowerMessage.includes(key)) {
                    return response;
                }
            }
            
            return `That's a great question about "${message}"! Let me explain: This topic involves understanding fundamental concepts and applying them to solve problems. Would you like me to break it down further or give you some practice examples?`;
        }
    };
};

// Mock database function
export const getDatabase = async () => {
    console.log('Mock database initialized');
    return {
        // Mock database operations
        get: async (key: string) => null,
        set: async (key: string, value: unknown) => true,
        delete: async (key: string) => true
    };
};
