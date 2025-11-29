import { z } from 'zod';
// Student validation schema
export const studentSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    rollNumber: z.string().min(1, 'Roll number is required'),
    class: z.string().min(1, 'Class is required'),
    section: z.string().optional(),
    dateOfBirth: z.string().optional(),
    phone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits').optional().or(z.literal('')),
    parentPhone: z.string().regex(/^\d{10}$/, 'Phone must be 10 digits').optional().or(z.literal('')),
    address: z.string().optional(),
});
// Performance validation schema
export const performanceSchema = z.object({
    studentId: z.string().min(1, 'Student is required'),
    subject: z.string().min(1, 'Subject is required'),
    score: z.number().min(0, 'Score must be positive'),
    maxScore: z.number().min(1, 'Max score must be at least 1'),
    testType: z.enum(['quiz', 'exam', 'assignment']),
    testDate: z.string().min(1, 'Test date is required'),
    attendance: z.number().min(0).max(100).optional(),
    remarks: z.string().optional(),
});
// Assignment validation schema
export const assignmentSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    subject: z.string().min(1, 'Subject is required'),
    class: z.string().min(1, 'Class is required'),
    section: z.string().optional(),
    dueDate: z.string().min(1, 'Due date is required'),
    maxScore: z.number().min(1, 'Max score must be at least 1').default(100),
});
// Submission validation schema
export const submissionSchema = z.object({
    assignmentId: z.string().min(1, 'Assignment is required'),
    studentId: z.string().min(1, 'Student is required'),
    content: z.string().optional(),
    fileUrl: z.string().url('Invalid URL').optional().or(z.literal('')),
    score: z.number().min(0).optional(),
    feedback: z.string().optional(),
});
