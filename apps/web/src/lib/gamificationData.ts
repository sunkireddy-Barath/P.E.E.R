// Gamification data and utilities

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
    rarity: 'common' | 'rare' | 'epic' | 'legendary';
    category: 'learning' | 'streak' | 'social' | 'achievement' | 'special';
    requirement: string;
    xpReward: number;
    earnedDate?: Date | null;
    progress?: number;
    maxProgress?: number;
}

export interface Challenge {
    id: string;
    title: string;
    description: string;
    type: 'daily' | 'weekly' | 'special';
    xpReward: number;
    coinReward: number;
    progress: number;
    target: number;
    expiresAt: Date;
    completed: boolean;
    icon: string;
}

export interface LeaderboardEntry {
    rank: number;
    id: string;
    name: string;
    avatar: string;
    xp: number;
    level: number;
    streak: number;
    badges: number;
    school?: string;
    change: 'up' | 'down' | 'same';
}

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
    subject: string;
    topic: string;
    xpReward: number;
}

export interface PlayerStats {
    level: number;
    xp: number;
    xpToNextLevel: number;
    totalXp: number;
    coins: number;
    streak: number;
    longestStreak: number;
    lessonsCompleted: number;
    quizzesCompleted: number;
    perfectScores: number;
    totalTimeSpent: number; // in minutes
    rank: number;
    badges: Badge[];
}

// XP calculation utilities
export const calculateLevel = (totalXp: number): { level: number; xpInCurrentLevel: number; xpToNextLevel: number } => {
    // XP formula: level n requires n * 100 XP
    let level = 1;
    let xpRequired = 100;
    let remainingXp = totalXp;

    while (remainingXp >= xpRequired) {
        remainingXp -= xpRequired;
        level++;
        xpRequired = level * 100;
    }

    return {
        level,
        xpInCurrentLevel: remainingXp,
        xpToNextLevel: xpRequired
    };
};

export const BADGES: Badge[] = [
    // Learning badges
    {
        id: 'first_lesson',
        name: 'First Steps',
        description: 'Complete your first lesson',
        icon: '🎯',
        rarity: 'common',
        category: 'learning',
        requirement: 'Complete 1 lesson',
        xpReward: 50,
        earnedDate: new Date(Date.now() - 604800000),
        progress: 1,
        maxProgress: 1
    },
    {
        id: 'lesson_master',
        name: 'Lesson Master',
        description: 'Complete 50 lessons',
        icon: '📚',
        rarity: 'rare',
        category: 'learning',
        requirement: 'Complete 50 lessons',
        xpReward: 200,
        progress: 32,
        maxProgress: 50
    },
    {
        id: 'knowledge_seeker',
        name: 'Knowledge Seeker',
        description: 'Complete 100 lessons',
        icon: '🧠',
        rarity: 'epic',
        category: 'learning',
        requirement: 'Complete 100 lessons',
        xpReward: 500,
        progress: 32,
        maxProgress: 100
    },
    {
        id: 'math_wizard',
        name: 'Math Wizard',
        description: 'Score 100% on 10 math quizzes',
        icon: '🧮',
        rarity: 'epic',
        category: 'learning',
        requirement: 'Perfect score on 10 math quizzes',
        xpReward: 300,
        earnedDate: new Date(Date.now() - 1209600000),
        progress: 10,
        maxProgress: 10
    },
    {
        id: 'science_explorer',
        name: 'Science Explorer',
        description: 'Complete all science chapters',
        icon: '🔬',
        rarity: 'rare',
        category: 'learning',
        requirement: 'Complete all science chapters',
        xpReward: 250,
        progress: 7,
        maxProgress: 12
    },
    // Streak badges
    {
        id: 'streak_starter',
        name: 'Streak Starter',
        description: 'Maintain a 7-day learning streak',
        icon: '🔥',
        rarity: 'common',
        category: 'streak',
        requirement: '7-day streak',
        xpReward: 100,
        earnedDate: new Date(Date.now() - 432000000),
        progress: 7,
        maxProgress: 7
    },
    {
        id: 'streak_warrior',
        name: 'Streak Warrior',
        description: 'Maintain a 30-day learning streak',
        icon: '⚡',
        rarity: 'rare',
        category: 'streak',
        requirement: '30-day streak',
        xpReward: 300,
        progress: 12,
        maxProgress: 30
    },
    {
        id: 'streak_legend',
        name: 'Streak Legend',
        description: 'Maintain a 100-day learning streak',
        icon: '🌟',
        rarity: 'legendary',
        category: 'streak',
        requirement: '100-day streak',
        xpReward: 1000,
        progress: 12,
        maxProgress: 100
    },
    // Achievement badges
    {
        id: 'perfect_week',
        name: 'Perfect Week',
        description: 'Complete all daily challenges in a week',
        icon: '🏆',
        rarity: 'rare',
        category: 'achievement',
        requirement: 'Complete 7 daily challenges',
        xpReward: 200,
        progress: 5,
        maxProgress: 7
    },
    {
        id: 'quiz_champion',
        name: 'Quiz Champion',
        description: 'Win 20 quiz battles',
        icon: '👑',
        rarity: 'epic',
        category: 'achievement',
        requirement: 'Win 20 quiz battles',
        xpReward: 400,
        progress: 8,
        maxProgress: 20
    },
    {
        id: 'speed_demon',
        name: 'Speed Demon',
        description: 'Complete a quiz in under 60 seconds with 100% accuracy',
        icon: '⚡',
        rarity: 'epic',
        category: 'achievement',
        requirement: 'Quick perfect quiz',
        xpReward: 350,
        earnedDate: new Date(Date.now() - 86400000)
    },
    // Social badges
    {
        id: 'helpful_peer',
        name: 'Helpful Peer',
        description: 'Help 10 classmates with their questions',
        icon: '🤝',
        rarity: 'rare',
        category: 'social',
        requirement: 'Help 10 peers',
        xpReward: 200,
        progress: 6,
        maxProgress: 10
    },
    {
        id: 'team_player',
        name: 'Team Player',
        description: 'Complete 5 group study sessions',
        icon: '👥',
        rarity: 'common',
        category: 'social',
        requirement: 'Join 5 group sessions',
        xpReward: 100,
        progress: 3,
        maxProgress: 5
    },
    // Special badges
    {
        id: 'early_bird',
        name: 'Early Bird',
        description: 'Complete a lesson before 7 AM',
        icon: '🌅',
        rarity: 'common',
        category: 'special',
        requirement: 'Study before 7 AM',
        xpReward: 75,
        earnedDate: new Date(Date.now() - 172800000)
    },
    {
        id: 'night_owl',
        name: 'Night Owl',
        description: 'Complete a lesson after 10 PM',
        icon: '🦉',
        rarity: 'common',
        category: 'special',
        requirement: 'Study after 10 PM',
        xpReward: 75
    }
];

export const DAILY_CHALLENGES: Challenge[] = [
    {
        id: 'daily_1',
        title: 'Quick Learner',
        description: 'Complete 3 lessons today',
        type: 'daily',
        xpReward: 100,
        coinReward: 25,
        progress: 2,
        target: 3,
        expiresAt: new Date(new Date().setHours(23, 59, 59, 999)),
        completed: false,
        icon: '📖'
    },
    {
        id: 'daily_2',
        title: 'Quiz Master',
        description: 'Score 80% or above on 2 quizzes',
        type: 'daily',
        xpReward: 150,
        coinReward: 35,
        progress: 1,
        target: 2,
        expiresAt: new Date(new Date().setHours(23, 59, 59, 999)),
        completed: false,
        icon: '🎯'
    },
    {
        id: 'daily_3',
        title: 'Helping Hand',
        description: 'Answer a question in the community',
        type: 'daily',
        xpReward: 75,
        coinReward: 20,
        progress: 0,
        target: 1,
        expiresAt: new Date(new Date().setHours(23, 59, 59, 999)),
        completed: false,
        icon: '🙋'
    }
];

export const WEEKLY_CHALLENGES: Challenge[] = [
    {
        id: 'weekly_1',
        title: 'Dedicated Student',
        description: 'Study for 5 hours this week',
        type: 'weekly',
        xpReward: 500,
        coinReward: 100,
        progress: 180,
        target: 300,
        expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        completed: false,
        icon: '⏰'
    },
    {
        id: 'weekly_2',
        title: 'Subject Explorer',
        description: 'Complete lessons in 4 different subjects',
        type: 'weekly',
        xpReward: 400,
        coinReward: 80,
        progress: 2,
        target: 4,
        expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        completed: false,
        icon: '🌍'
    },
    {
        id: 'weekly_3',
        title: 'Perfect Streak',
        description: 'Maintain a 7-day streak',
        type: 'weekly',
        xpReward: 300,
        coinReward: 75,
        progress: 5,
        target: 7,
        expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
        completed: false,
        icon: '🔥'
    }
];

export const LEADERBOARD: LeaderboardEntry[] = [
    { rank: 1, id: '101', name: 'Priya Sharma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya', xp: 15420, level: 24, streak: 45, badges: 18, school: 'Delhi Public School', change: 'same' },
    { rank: 2, id: '102', name: 'Rahul Kumar', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rahul', xp: 14850, level: 23, streak: 32, badges: 15, school: 'Kendriya Vidyalaya', change: 'up' },
    { rank: 3, id: '103', name: 'Anita Devi', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=anita', xp: 13920, level: 22, streak: 28, badges: 14, school: 'Government School', change: 'down' },
    { rank: 4, id: '104', name: 'Vikram Singh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=vikram', xp: 12680, level: 21, streak: 21, badges: 12, school: 'St. Mary\'s School', change: 'up' },
    { rank: 5, id: '105', name: 'Meera Patel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=meera', xp: 11950, level: 20, streak: 18, badges: 11, school: 'DAV Public School', change: 'same' },
    { rank: 6, id: '106', name: 'Arjun Reddy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun', xp: 11200, level: 19, streak: 15, badges: 10, school: 'Navodaya Vidyalaya', change: 'up' },
    { rank: 7, id: '1', name: 'Aarav (You)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aarav', xp: 10580, level: 18, streak: 12, badges: 9, school: 'Government School', change: 'up' },
    { rank: 8, id: '107', name: 'Kavya Nair', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kavya', xp: 9840, level: 17, streak: 10, badges: 8, school: 'Vidya Niketan', change: 'down' },
    { rank: 9, id: '108', name: 'Rohan Gupta', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=rohan', xp: 9120, level: 16, streak: 8, badges: 7, school: 'Modern School', change: 'same' },
    { rank: 10, id: '109', name: 'Simran Kaur', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=simran', xp: 8560, level: 15, streak: 6, badges: 6, school: 'Army Public School', change: 'up' }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
    {
        id: 'q1',
        question: 'What is the value of x if 2x + 5 = 15?',
        options: ['3', '5', '7', '10'],
        correctAnswer: 1,
        explanation: '2x + 5 = 15 → 2x = 10 → x = 5',
        difficulty: 'easy',
        subject: 'Mathematics',
        topic: 'Algebra',
        xpReward: 10
    },
    {
        id: 'q2',
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 1,
        explanation: 'Mars is called the Red Planet due to iron oxide (rust) on its surface.',
        difficulty: 'easy',
        subject: 'Science',
        topic: 'Solar System',
        xpReward: 10
    },
    {
        id: 'q3',
        question: 'What is the formula for the area of a circle?',
        options: ['πr', '2πr', 'πr²', '2πr²'],
        correctAnswer: 2,
        explanation: 'The area of a circle is π times the radius squared (πr²).',
        difficulty: 'medium',
        subject: 'Mathematics',
        topic: 'Geometry',
        xpReward: 20
    },
    {
        id: 'q4',
        question: 'What is the chemical symbol for water?',
        options: ['H₂O', 'CO₂', 'NaCl', 'O₂'],
        correctAnswer: 0,
        explanation: 'Water consists of 2 hydrogen atoms and 1 oxygen atom: H₂O.',
        difficulty: 'easy',
        subject: 'Science',
        topic: 'Chemistry',
        xpReward: 10
    },
    {
        id: 'q5',
        question: 'Solve: (3 + 4) × 2 - 5 = ?',
        options: ['6', '9', '11', '14'],
        correctAnswer: 1,
        explanation: '(3 + 4) × 2 - 5 = 7 × 2 - 5 = 14 - 5 = 9',
        difficulty: 'medium',
        subject: 'Mathematics',
        topic: 'Arithmetic',
        xpReward: 20
    },
    {
        id: 'q6',
        question: 'Who wrote the Indian National Anthem?',
        options: ['Bankim Chandra Chatterjee', 'Rabindranath Tagore', 'Sarojini Naidu', 'Mahatma Gandhi'],
        correctAnswer: 1,
        explanation: 'Rabindranath Tagore wrote "Jana Gana Mana", our National Anthem.',
        difficulty: 'easy',
        subject: 'Social Studies',
        topic: 'Indian History',
        xpReward: 10
    },
    {
        id: 'q7',
        question: 'What is the square root of 144?',
        options: ['10', '11', '12', '14'],
        correctAnswer: 2,
        explanation: '12 × 12 = 144, so √144 = 12',
        difficulty: 'easy',
        subject: 'Mathematics',
        topic: 'Numbers',
        xpReward: 10
    },
    {
        id: 'q8',
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 2,
        explanation: 'Plants absorb CO₂ during photosynthesis to make food.',
        difficulty: 'easy',
        subject: 'Science',
        topic: 'Biology',
        xpReward: 10
    },
    {
        id: 'q9',
        question: 'If a triangle has angles 60°, 60°, and 60°, what type is it?',
        options: ['Scalene', 'Isosceles', 'Equilateral', 'Right-angled'],
        correctAnswer: 2,
        explanation: 'A triangle with all equal angles (60° each) is equilateral.',
        difficulty: 'medium',
        subject: 'Mathematics',
        topic: 'Geometry',
        xpReward: 20
    },
    {
        id: 'q10',
        question: 'What is the SI unit of force?',
        options: ['Joule', 'Watt', 'Newton', 'Pascal'],
        correctAnswer: 2,
        explanation: 'The SI unit of force is Newton (N), named after Isaac Newton.',
        difficulty: 'medium',
        subject: 'Science',
        topic: 'Physics',
        xpReward: 20
    }
];

export const PLAYER_STATS: PlayerStats = {
    level: 18,
    xp: 580,
    xpToNextLevel: 1900,
    totalXp: 10580,
    coins: 1250,
    streak: 12,
    longestStreak: 24,
    lessonsCompleted: 156,
    quizzesCompleted: 89,
    perfectScores: 23,
    totalTimeSpent: 2340,
    rank: 7,
    badges: BADGES.filter(b => b.earnedDate)
};

// Mini-game data
export interface MiniGame {
    id: string;
    name: string;
    description: string;
    icon: string;
    type: 'word' | 'math' | 'memory' | 'puzzle';
    difficulty: 'easy' | 'medium' | 'hard';
    xpReward: number;
    coinReward: number;
    highScore: number;
    timesPlayed: number;
}

export const MINI_GAMES: MiniGame[] = [
    {
        id: 'math_sprint',
        name: 'Math Sprint',
        description: 'Solve as many math problems as you can in 60 seconds!',
        icon: '🔢',
        type: 'math',
        difficulty: 'medium',
        xpReward: 50,
        coinReward: 15,
        highScore: 24,
        timesPlayed: 45
    },
    {
        id: 'word_scramble',
        name: 'Word Scramble',
        description: 'Unscramble the letters to form English words',
        icon: '🔤',
        type: 'word',
        difficulty: 'easy',
        xpReward: 30,
        coinReward: 10,
        highScore: 18,
        timesPlayed: 32
    },
    {
        id: 'memory_match',
        name: 'Memory Match',
        description: 'Match pairs of science concepts and formulas',
        icon: '🧩',
        type: 'memory',
        difficulty: 'medium',
        xpReward: 40,
        coinReward: 12,
        highScore: 12,
        timesPlayed: 28
    },
    {
        id: 'equation_puzzle',
        name: 'Equation Puzzle',
        description: 'Arrange numbers to complete the equation',
        icon: '🧮',
        type: 'puzzle',
        difficulty: 'hard',
        xpReward: 75,
        coinReward: 25,
        highScore: 8,
        timesPlayed: 15
    }
];

// Power-ups and rewards
export interface PowerUp {
    id: string;
    name: string;
    description: string;
    icon: string;
    cost: number;
    effect: string;
    duration?: number;
    owned: number;
}

export const POWER_UPS: PowerUp[] = [
    {
        id: 'xp_boost',
        name: 'XP Boost',
        description: 'Double XP for 30 minutes',
        icon: '⚡',
        cost: 100,
        effect: '2x XP',
        duration: 30,
        owned: 2
    },
    {
        id: 'streak_shield',
        name: 'Streak Shield',
        description: 'Protect your streak for one day',
        icon: '🛡️',
        cost: 150,
        effect: 'Streak protection',
        owned: 1
    },
    {
        id: 'hint_pack',
        name: 'Hint Pack',
        description: '5 hints for quiz questions',
        icon: '💡',
        cost: 75,
        effect: '5 hints',
        owned: 3
    },
    {
        id: 'time_freeze',
        name: 'Time Freeze',
        description: 'Pause timer for 15 seconds in timed quizzes',
        icon: '⏸️',
        cost: 50,
        effect: '+15 seconds',
        owned: 0
    }
];
