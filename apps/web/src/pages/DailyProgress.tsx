import { useState } from 'react';
import { 
    Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check, 
    Flame, Star, Trophy, Gift, Target, Clock
} from 'lucide-react';
import { PLAYER_STATS } from '../lib/gamificationData';

interface DayData {
    date: number;
    completed: boolean;
    xpEarned: number;
    lessonsCompleted: number;
}

export default function DailyProgress() {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDay, setSelectedDay] = useState<number | null>(new Date().getDate());

    const daysInMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        1
    ).getDay();

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Generate mock calendar data
    const today = new Date();
    const generateDayData = (day: number): DayData => {
        const isToday = day === today.getDate() && 
            currentMonth.getMonth() === today.getMonth() &&
            currentMonth.getFullYear() === today.getFullYear();
        const isPast = day < today.getDate() || 
            currentMonth.getMonth() < today.getMonth();
        
        // Mock data - some days completed, some not
        const completed = isPast && Math.random() > 0.15;
        return {
            date: day,
            completed,
            xpEarned: completed ? Math.floor(Math.random() * 500) + 100 : (isToday ? 350 : 0),
            lessonsCompleted: completed ? Math.floor(Math.random() * 5) + 1 : (isToday ? 2 : 0)
        };
    };

    const calendarDays: (DayData | null)[] = [
        ...Array(firstDayOfMonth).fill(null),
        ...Array.from({ length: daysInMonth }, (_, i) => generateDayData(i + 1))
    ];

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
        setSelectedDay(null);
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
        setSelectedDay(null);
    };

    const selectedDayData = selectedDay 
        ? calendarDays.find(d => d?.date === selectedDay)
        : null;

    const completedDays = calendarDays.filter(d => d?.completed).length;
    const currentStreak = PLAYER_STATS.streak;

    // Daily Goals
    const dailyGoals = [
        { id: 1, title: 'Complete 3 lessons', progress: 2, target: 3, xp: 100 },
        { id: 2, title: 'Earn 500 XP', progress: 350, target: 500, xp: 50 },
        { id: 3, title: 'Practice for 30 min', progress: 22, target: 30, xp: 75 },
        { id: 4, title: 'Play a quiz game', progress: 1, target: 1, xp: 50, completed: true }
    ];

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-6 text-white">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
                            <CalendarIcon className="w-7 h-7" />
                            Daily Progress
                        </h1>
                        <p className="text-white/80">Track your learning journey day by day!</p>
                    </div>
                    <div className="flex gap-6">
                        <div className="text-center">
                            <div className="flex items-center gap-2">
                                <Flame className="w-6 h-6 text-orange-300" />
                                <span className="text-3xl font-bold">{currentStreak}</span>
                            </div>
                            <p className="text-white/80 text-sm">Day Streak</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center gap-2">
                                <Check className="w-6 h-6 text-green-300" />
                                <span className="text-3xl font-bold">{completedDays}</span>
                            </div>
                            <p className="text-white/80 text-sm">Days This Month</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Calendar */}
                <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
                    {/* Month Navigation */}
                    <div className="flex items-center justify-between mb-6">
                        <button 
                            onClick={goToPreviousMonth}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <h2 className="text-xl font-bold">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </h2>
                        <button 
                            onClick={goToNextMonth}
                            className="p-2 hover:bg-muted rounded-lg transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Days of Week */}
                    <div className="grid grid-cols-7 gap-2 mb-2">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                            <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                                {day}
                            </div>
                        ))}
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2">
                        {calendarDays.map((day, index) => {
                            if (!day) {
                                return <div key={`empty-${index}`} className="aspect-square" />;
                            }

                            const isToday = day.date === today.getDate() && 
                                currentMonth.getMonth() === today.getMonth() &&
                                currentMonth.getFullYear() === today.getFullYear();
                            const isSelected = day.date === selectedDay;
                            const isFuture = day.date > today.getDate() && 
                                currentMonth.getMonth() >= today.getMonth() &&
                                currentMonth.getFullYear() >= today.getFullYear();

                            return (
                                <button
                                    key={day.date}
                                    onClick={() => setSelectedDay(day.date)}
                                    disabled={isFuture}
                                    className={`aspect-square rounded-xl flex flex-col items-center justify-center transition-all relative ${
                                        isSelected
                                            ? 'bg-primary text-white shadow-lg scale-105'
                                            : isToday
                                                ? 'bg-primary/10 border-2 border-primary'
                                                : day.completed
                                                    ? 'bg-green-100 dark:bg-green-900/30'
                                                    : isFuture
                                                        ? 'bg-muted opacity-50'
                                                        : 'hover:bg-muted'
                                    }`}
                                >
                                    <span className={`text-lg font-medium ${
                                        isSelected ? 'text-white' : isToday ? 'text-primary' : ''
                                    }`}>
                                        {day.date}
                                    </span>
                                    {day.completed && !isSelected && (
                                        <Check className="w-3 h-3 text-green-600 dark:text-green-400 absolute bottom-1" />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded border border-green-300" />
                            <span className="text-muted-foreground">Completed</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="w-4 h-4 bg-primary/10 rounded border-2 border-primary" />
                            <span className="text-muted-foreground">Today</span>
                        </div>
                    </div>
                </div>

                {/* Day Details & Daily Goals */}
                <div className="space-y-6">
                    {/* Selected Day Details */}
                    {selectedDayData && (
                        <div className="bg-card border border-border rounded-xl p-5">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <CalendarIcon className="w-4 h-4 text-primary" />
                                {selectedDay === today.getDate() ? 'Today' : `Day ${selectedDay}`}
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500" />
                                        <span className="text-sm">XP Earned</span>
                                    </div>
                                    <span className="font-bold">{selectedDayData.xpEarned}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <Trophy className="w-5 h-5 text-purple-500" />
                                        <span className="text-sm">Lessons</span>
                                    </div>
                                    <span className="font-bold">{selectedDayData.lessonsCompleted}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                                    <div className="flex items-center gap-2">
                                        {selectedDayData.completed ? (
                                            <Check className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <Target className="w-5 h-5 text-orange-500" />
                                        )}
                                        <span className="text-sm">Status</span>
                                    </div>
                                    <span className={`font-bold ${
                                        selectedDayData.completed ? 'text-green-600' : 'text-orange-600'
                                    }`}>
                                        {selectedDayData.completed ? 'Complete' : 'In Progress'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Daily Goals */}
                    <div className="bg-card border border-border rounded-xl p-5">
                        <h3 className="font-bold mb-4 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            Today's Goals
                        </h3>
                        <div className="space-y-3">
                            {dailyGoals.map(goal => {
                                const percentage = Math.min((goal.progress / goal.target) * 100, 100);
                                return (
                                    <div key={goal.id} className={`p-3 rounded-lg border ${
                                        goal.completed 
                                            ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                                            : 'bg-muted border-transparent'
                                    }`}>
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium">{goal.title}</span>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3.5 h-3.5 text-yellow-500" />
                                                <span className="text-xs font-medium">+{goal.xp}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="flex-1 h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                                                <div 
                                                    className={`h-full rounded-full transition-all ${
                                                        goal.completed ? 'bg-green-500' : 'bg-primary'
                                                    }`}
                                                    style={{ width: `${percentage}%` }}
                                                />
                                            </div>
                                            <span className="text-xs text-muted-foreground whitespace-nowrap">
                                                {goal.progress}/{goal.target}
                                            </span>
                                            {goal.completed && <Check className="w-4 h-4 text-green-500" />}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Streak Bonus */}
                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-5 border border-orange-200 dark:border-orange-800">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-orange-500 rounded-lg">
                                <Flame className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold">Streak Bonus!</h3>
                                <p className="text-sm text-muted-foreground">{currentStreak} days and counting</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-black/20 rounded-lg">
                            <span className="text-sm">Tomorrow's bonus:</span>
                            <span className="flex items-center gap-1 font-bold text-orange-600">
                                <Gift className="w-4 h-4" />
                                +{Math.min(currentStreak * 10, 500)} XP
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Weekly Summary */}
            <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    This Week's Summary
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-muted rounded-xl text-center">
                        <div className="text-3xl font-bold text-primary">2,450</div>
                        <div className="text-sm text-muted-foreground">Total XP</div>
                    </div>
                    <div className="p-4 bg-muted rounded-xl text-center">
                        <div className="text-3xl font-bold text-green-600">12</div>
                        <div className="text-sm text-muted-foreground">Lessons Done</div>
                    </div>
                    <div className="p-4 bg-muted rounded-xl text-center">
                        <div className="text-3xl font-bold text-purple-600">4h 35m</div>
                        <div className="text-sm text-muted-foreground">Time Spent</div>
                    </div>
                    <div className="p-4 bg-muted rounded-xl text-center">
                        <div className="text-3xl font-bold text-orange-600">6/7</div>
                        <div className="text-sm text-muted-foreground">Active Days</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
