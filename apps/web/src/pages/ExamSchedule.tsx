import { useState } from 'react';
import { 
    Calendar, Clock, BookOpen, AlertCircle, ChevronLeft, ChevronRight,
    Bell, Target, CheckCircle, Star, Flame, Timer, Award, FileText
} from 'lucide-react';

interface Exam {
    id: string;
    subject: string;
    title: string;
    date: string;
    time: string;
    duration: string;
    type: 'quiz' | 'test' | 'exam' | 'assignment';
    status: 'upcoming' | 'today' | 'completed' | 'missed';
    score?: number;
    totalMarks: number;
    topics: string[];
    difficulty: 'easy' | 'medium' | 'hard';
    icon: string;
}

const EXAMS: Exam[] = [
    {
        id: '1',
        subject: 'Mathematics',
        title: 'Chapter 5 - Fractions Quiz',
        date: 'Today',
        time: '2:00 PM',
        duration: '30 min',
        type: 'quiz',
        status: 'today',
        totalMarks: 20,
        topics: ['Fractions', 'Decimals', 'Word Problems'],
        difficulty: 'medium',
        icon: '🔢'
    },
    {
        id: '2',
        subject: 'Science',
        title: 'Unit Test - Light & Sound',
        date: 'Jan 20',
        time: '10:00 AM',
        duration: '1 hour',
        type: 'test',
        status: 'upcoming',
        totalMarks: 50,
        topics: ['Reflection', 'Refraction', 'Sound Waves'],
        difficulty: 'medium',
        icon: '🔬'
    },
    {
        id: '3',
        subject: 'English',
        title: 'Essay Writing Assignment',
        date: 'Jan 22',
        time: '11:59 PM',
        duration: '2 days',
        type: 'assignment',
        status: 'upcoming',
        totalMarks: 25,
        topics: ['Essay Structure', 'Grammar', 'Vocabulary'],
        difficulty: 'easy',
        icon: '📝'
    },
    {
        id: '4',
        subject: 'Hindi',
        title: 'Quarterly Exam',
        date: 'Jan 25',
        time: '9:00 AM',
        duration: '2 hours',
        type: 'exam',
        status: 'upcoming',
        totalMarks: 100,
        topics: ['Grammar', 'Poetry', 'Prose', 'Writing'],
        difficulty: 'hard',
        icon: '📖'
    },
    {
        id: '5',
        subject: 'Mathematics',
        title: 'Algebra Practice Quiz',
        date: 'Jan 15',
        time: '3:00 PM',
        duration: '20 min',
        type: 'quiz',
        status: 'completed',
        score: 18,
        totalMarks: 20,
        topics: ['Variables', 'Equations'],
        difficulty: 'easy',
        icon: '🔢'
    },
    {
        id: '6',
        subject: 'Science',
        title: 'Chapter 3 Quiz',
        date: 'Jan 12',
        time: '2:00 PM',
        duration: '30 min',
        type: 'quiz',
        status: 'completed',
        score: 15,
        totalMarks: 20,
        topics: ['Atoms', 'Molecules'],
        difficulty: 'medium',
        icon: '🔬'
    }
];

const STUDY_TIPS = [
    { icon: '📚', tip: 'Review fractions notes before today\'s quiz' },
    { icon: '⏰', tip: 'Start preparing for Science Unit Test' },
    { icon: '✍️', tip: 'Draft your essay outline today' },
    { icon: '📖', tip: 'Hindi exam in 8 days - start revision' }
];

export default function ExamSchedule() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedView, setSelectedView] = useState<'list' | 'calendar'>('list');
    const [filterType, setFilterType] = useState<string>('all');

    const upcomingExams = EXAMS.filter(e => e.status === 'upcoming' || e.status === 'today');
    const completedExams = EXAMS.filter(e => e.status === 'completed');
    const todayExams = EXAMS.filter(e => e.status === 'today');

    const getStatusColor = (status: Exam['status']) => {
        switch (status) {
            case 'today': return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 border-red-200';
            case 'upcoming': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200';
            case 'completed': return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 border-green-200';
            case 'missed': return 'bg-gray-100 text-gray-600 dark:bg-gray-900/30 dark:text-gray-400 border-gray-200';
        }
    };

    const getTypeIcon = (type: Exam['type']) => {
        switch (type) {
            case 'quiz': return <Timer className="w-4 h-4" />;
            case 'test': return <FileText className="w-4 h-4" />;
            case 'exam': return <Award className="w-4 h-4" />;
            case 'assignment': return <BookOpen className="w-4 h-4" />;
        }
    };

    const getDifficultyColor = (difficulty: Exam['difficulty']) => {
        switch (difficulty) {
            case 'easy': return 'text-green-600';
            case 'medium': return 'text-yellow-600';
            case 'hard': return 'text-red-600';
        }
    };

    const filteredExams = filterType === 'all' 
        ? [...upcomingExams, ...completedExams]
        : [...upcomingExams, ...completedExams].filter(e => e.type === filterType);

    return (
        <div className="space-y-4 md:space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                            <Calendar className="w-6 h-6 md:w-7 md:h-7" />
                            Exam Schedule
                        </h1>
                        <p className="text-white/80 text-sm md:text-base">Stay prepared and ace your exams!</p>
                    </div>
                    <div className="flex gap-3 md:gap-6">
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold">{todayExams.length}</div>
                            <div className="text-white/80 text-xs md:text-sm">Today</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold">{upcomingExams.length}</div>
                            <div className="text-white/80 text-xs md:text-sm">Upcoming</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Today's Exam Alert */}
            {todayExams.length > 0 && (
                <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800 rounded-xl md:rounded-2xl p-4 md:p-5">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-red-500 rounded-lg text-white">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-red-700 dark:text-red-400 text-sm md:text-base">
                                    Exam Today!
                                </h3>
                                <p className="text-xs md:text-sm text-red-600/70 dark:text-red-400/70">
                                    {todayExams[0].title} at {todayExams[0].time}
                                </p>
                            </div>
                        </div>
                        <button className="w-full sm:w-auto ml-auto px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600">
                            Start Exam
                        </button>
                    </div>
                </div>
            )}

            {/* View Toggle & Filters */}
            <div className="flex flex-col sm:flex-row gap-3 justify-between">
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    {['all', 'quiz', 'test', 'exam', 'assignment'].map(type => (
                        <button
                            key={type}
                            onClick={() => setFilterType(type)}
                            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all capitalize ${
                                filterType === type
                                    ? 'bg-primary text-white'
                                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                            }`}
                        >
                            {type === 'all' ? 'All' : type}
                        </button>
                    ))}
                </div>
                <div className="flex gap-1 p-1 bg-muted rounded-lg self-start">
                    <button
                        onClick={() => setSelectedView('list')}
                        className={`px-3 py-1.5 rounded text-xs md:text-sm font-medium ${
                            selectedView === 'list' ? 'bg-background shadow-sm' : 'text-muted-foreground'
                        }`}
                    >
                        List
                    </button>
                    <button
                        onClick={() => setSelectedView('calendar')}
                        className={`px-3 py-1.5 rounded text-xs md:text-sm font-medium ${
                            selectedView === 'calendar' ? 'bg-background shadow-sm' : 'text-muted-foreground'
                        }`}
                    >
                        Calendar
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Exams List */}
                <div className="lg:col-span-2 space-y-3 md:space-y-4">
                    <h2 className="text-base md:text-lg font-bold flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        {filterType === 'all' ? 'All Exams' : `${filterType.charAt(0).toUpperCase() + filterType.slice(1)}s`}
                    </h2>

                    {filteredExams.map(exam => (
                        <div 
                            key={exam.id}
                            className={`bg-card border rounded-xl md:rounded-2xl p-4 md:p-5 transition-all hover:shadow-lg ${
                                exam.status === 'today' ? 'border-red-300 dark:border-red-700' : 'border-border'
                            }`}
                        >
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Icon */}
                                <div className="flex sm:flex-col items-center gap-3 sm:gap-1">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl ${
                                        exam.status === 'completed' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-muted'
                                    }`}>
                                        {exam.icon}
                                    </div>
                                    {exam.status === 'completed' && exam.score !== undefined && (
                                        <div className="text-center">
                                            <div className="text-lg md:text-xl font-bold text-green-600">
                                                {Math.round((exam.score / exam.totalMarks) * 100)}%
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                                            {exam.status === 'today' ? '🔴 Today' : 
                                             exam.status === 'upcoming' ? '📅 Upcoming' : 
                                             exam.status === 'completed' ? '✅ Done' : '❌ Missed'}
                                        </span>
                                        <span className="flex items-center gap-1 px-2 py-0.5 bg-muted rounded text-xs">
                                            {getTypeIcon(exam.type)}
                                            {exam.type}
                                        </span>
                                        <span className={`text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}>
                                            {exam.difficulty}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-sm md:text-base mb-1">{exam.title}</h3>
                                    <p className="text-xs md:text-sm text-muted-foreground mb-2">{exam.subject}</p>

                                    {/* Topics */}
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {exam.topics.slice(0, 3).map(topic => (
                                            <span key={topic} className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                                                {topic}
                                            </span>
                                        ))}
                                        {exam.topics.length > 3 && (
                                            <span className="px-2 py-0.5 text-muted-foreground text-xs">
                                                +{exam.topics.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Time Info */}
                                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {exam.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3.5 h-3.5" />
                                            {exam.time}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Timer className="w-3.5 h-3.5" />
                                            {exam.duration}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star className="w-3.5 h-3.5" />
                                            {exam.totalMarks} marks
                                        </span>
                                    </div>
                                </div>

                                {/* Action */}
                                <div className="flex sm:flex-col items-center gap-2 sm:justify-center">
                                    {exam.status === 'today' && (
                                        <button className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600">
                                            Start
                                        </button>
                                    )}
                                    {exam.status === 'upcoming' && (
                                        <>
                                            <button className="flex-1 sm:flex-none px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
                                                Prepare
                                            </button>
                                            <button className="p-2 bg-muted rounded-lg hover:bg-muted/80">
                                                <Bell className="w-4 h-4" />
                                            </button>
                                        </>
                                    )}
                                    {exam.status === 'completed' && (
                                        <button className="w-full sm:w-auto px-4 py-2 bg-muted text-foreground rounded-lg text-sm font-medium hover:bg-muted/80">
                                            Review
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sidebar */}
                <div className="space-y-4 md:space-y-6">
                    {/* Study Tips */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-200 dark:border-yellow-800">
                        <h3 className="font-bold text-base mb-3 flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500" />
                            Study Tips
                        </h3>
                        <div className="space-y-2">
                            {STUDY_TIPS.map((item, index) => (
                                <div key={index} className="flex items-start gap-2 p-2 bg-white/50 dark:bg-black/20 rounded-lg">
                                    <span className="text-lg">{item.icon}</span>
                                    <span className="text-xs md:text-sm">{item.tip}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Summary */}
                    <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5">
                        <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary" />
                            Recent Scores
                        </h3>
                        <div className="space-y-3">
                            {completedExams.map(exam => (
                                <div key={exam.id} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-lg">
                                        {exam.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs md:text-sm font-medium truncate">{exam.title}</p>
                                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                                            <div 
                                                className={`h-full rounded-full ${
                                                    (exam.score! / exam.totalMarks) >= 0.8 ? 'bg-green-500' :
                                                    (exam.score! / exam.totalMarks) >= 0.6 ? 'bg-yellow-500' : 'bg-red-500'
                                                }`}
                                                style={{ width: `${(exam.score! / exam.totalMarks) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold">
                                        {exam.score}/{exam.totalMarks}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-2">
                        <button className="p-3 md:p-4 bg-primary/10 hover:bg-primary/20 rounded-xl text-center transition-colors">
                            <BookOpen className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 text-primary" />
                            <span className="text-xs md:text-sm font-medium">Study Mode</span>
                        </button>
                        <button className="p-3 md:p-4 bg-green-100 hover:bg-green-200 dark:bg-green-900/30 rounded-xl text-center transition-colors">
                            <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 text-green-600" />
                            <span className="text-xs md:text-sm font-medium">Practice</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
