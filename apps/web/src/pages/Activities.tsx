import { useState } from 'react';
import { 
    Activity, Bike, TreePine, Palette, Music, Book, Users,
    Trophy, Star, Clock, Calendar, ChevronRight, Play,
    Camera, Heart, Sparkles, Target, Award, Flame
} from 'lucide-react';

interface ActivityItem {
    id: string;
    title: string;
    description: string;
    category: 'sports' | 'creative' | 'nature' | 'social' | 'mindfulness';
    icon: string;
    duration: string;
    xpReward: number;
    healthBenefit: string;
    participants?: number;
    isRecommended?: boolean;
    completedToday?: boolean;
}

const ACTIVITIES: ActivityItem[] = [
    {
        id: '1',
        title: 'Morning Yoga',
        description: 'Start your day with gentle stretches and breathing exercises',
        category: 'mindfulness',
        icon: '🧘',
        duration: '15 min',
        xpReward: 75,
        healthBenefit: 'Improves focus & flexibility',
        isRecommended: true
    },
    {
        id: '2',
        title: 'Outdoor Run',
        description: 'Get active with a jog around your neighborhood',
        category: 'sports',
        icon: '🏃',
        duration: '20-30 min',
        xpReward: 150,
        healthBenefit: 'Builds stamina & energy'
    },
    {
        id: '3',
        title: 'Nature Walk',
        description: 'Explore local parks and observe plants and animals',
        category: 'nature',
        icon: '🌳',
        duration: '30 min',
        xpReward: 100,
        healthBenefit: 'Reduces stress',
        isRecommended: true
    },
    {
        id: '4',
        title: 'Drawing Challenge',
        description: 'Express yourself through art - draw anything you like!',
        category: 'creative',
        icon: '🎨',
        duration: '20 min',
        xpReward: 80,
        healthBenefit: 'Boosts creativity'
    },
    {
        id: '5',
        title: 'Music Practice',
        description: 'Learn a song or practice an instrument',
        category: 'creative',
        icon: '🎵',
        duration: '25 min',
        xpReward: 100,
        healthBenefit: 'Enhances brain function'
    },
    {
        id: '6',
        title: 'Book Club Discussion',
        description: 'Share your favorite book with friends',
        category: 'social',
        icon: '📚',
        duration: '30 min',
        xpReward: 120,
        healthBenefit: 'Improves communication',
        participants: 8
    },
    {
        id: '7',
        title: 'Cycling Adventure',
        description: 'Explore your area on two wheels',
        category: 'sports',
        icon: '🚴',
        duration: '30-45 min',
        xpReward: 175,
        healthBenefit: 'Strengthens legs & heart'
    },
    {
        id: '8',
        title: 'Meditation Session',
        description: 'Calm your mind with guided meditation',
        category: 'mindfulness',
        icon: '🧠',
        duration: '10 min',
        xpReward: 50,
        healthBenefit: 'Improves focus & calm',
        isRecommended: true,
        completedToday: true
    },
    {
        id: '9',
        title: 'Team Sports',
        description: 'Play cricket, football, or any team sport with friends',
        category: 'sports',
        icon: '⚽',
        duration: '45-60 min',
        xpReward: 200,
        healthBenefit: 'Teamwork & fitness',
        participants: 12
    },
    {
        id: '10',
        title: 'Gardening',
        description: 'Plant seeds, water plants, or start a small garden',
        category: 'nature',
        icon: '🌱',
        duration: '20 min',
        xpReward: 90,
        healthBenefit: 'Connect with nature'
    },
    {
        id: '11',
        title: 'Dance Break',
        description: 'Dance to your favorite songs and have fun!',
        category: 'creative',
        icon: '💃',
        duration: '15 min',
        xpReward: 85,
        healthBenefit: 'Mood booster'
    },
    {
        id: '12',
        title: 'Volunteer Work',
        description: 'Help in your community - clean up, teach, or assist',
        category: 'social',
        icon: '🤝',
        duration: '1 hour',
        xpReward: 250,
        healthBenefit: 'Builds empathy & kindness'
    }
];

const DAILY_CHALLENGES = [
    { id: 1, title: 'Complete 1 outdoor activity', progress: 0, target: 1, xp: 50 },
    { id: 2, title: 'Try something creative', progress: 1, target: 1, xp: 50, completed: true },
    { id: 3, title: 'Exercise for 30 minutes total', progress: 15, target: 30, xp: 75 }
];

export default function Activities() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [completedActivities, setCompletedActivities] = useState<string[]>(['8']);

    const categories = [
        { id: 'all', label: 'All', icon: '📋', color: 'bg-gray-500' },
        { id: 'sports', label: 'Sports', icon: '⚽', color: 'bg-green-500' },
        { id: 'creative', label: 'Creative', icon: '🎨', color: 'bg-purple-500' },
        { id: 'nature', label: 'Nature', icon: '🌳', color: 'bg-emerald-500' },
        { id: 'social', label: 'Social', icon: '👥', color: 'bg-blue-500' },
        { id: 'mindfulness', label: 'Mindful', icon: '🧘', color: 'bg-pink-500' }
    ];

    const filteredActivities = selectedCategory === 'all' 
        ? ACTIVITIES 
        : ACTIVITIES.filter(a => a.category === selectedCategory);

    const recommendedActivities = ACTIVITIES.filter(a => a.isRecommended);

    const getCategoryColor = (category: ActivityItem['category']) => {
        switch (category) {
            case 'sports': return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
            case 'creative': return 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400';
            case 'nature': return 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400';
            case 'social': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
            case 'mindfulness': return 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400';
        }
    };

    const handleComplete = (id: string) => {
        if (!completedActivities.includes(id)) {
            setCompletedActivities([...completedActivities, id]);
        }
    };

    return (
        <div className="space-y-4 md:space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                            <Activity className="w-6 h-6 md:w-7 md:h-7" />
                            Activities
                        </h1>
                        <p className="text-white/80 text-sm md:text-base">Stay active, healthy & happy!</p>
                    </div>
                    <div className="flex gap-4 md:gap-6">
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold">{completedActivities.length}</div>
                            <div className="text-white/80 text-xs md:text-sm">Today</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold">
                                {completedActivities.reduce((sum, id) => {
                                    const activity = ACTIVITIES.find(a => a.id === id);
                                    return sum + (activity?.xpReward || 0);
                                }, 0)}
                            </div>
                            <div className="text-white/80 text-xs md:text-sm">XP Earned</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Daily Challenges */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-200 dark:border-yellow-800">
                <h2 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    Daily Activity Goals
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {DAILY_CHALLENGES.map(challenge => (
                        <div key={challenge.id} className={`p-3 rounded-xl border ${
                            challenge.completed 
                                ? 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800'
                                : 'bg-white dark:bg-gray-800 border-transparent'
                        }`}>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs md:text-sm font-medium">{challenge.title}</span>
                                {challenge.completed && <Sparkles className="w-4 h-4 text-green-500" />}
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${challenge.completed ? 'bg-green-500' : 'bg-orange-500'}`}
                                        style={{ width: `${Math.min((challenge.progress / challenge.target) * 100, 100)}%` }}
                                    />
                                </div>
                                <span className="text-xs text-muted-foreground">
                                    +{challenge.xp} XP
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommended */}
            <div>
                <h2 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Recommended for You
                </h2>
                <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {recommendedActivities.map(activity => (
                        <div 
                            key={activity.id}
                            className={`flex-shrink-0 w-64 md:w-72 bg-card border rounded-xl md:rounded-2xl p-4 transition-all hover:shadow-lg ${
                                completedActivities.includes(activity.id) ? 'border-green-300 dark:border-green-700' : 'border-border'
                            }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
                                    {activity.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-bold text-sm truncate">{activity.title}</h3>
                                        {completedActivities.includes(activity.id) && (
                                            <span className="text-green-500">✓</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">{activity.description}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    {activity.duration}
                                </div>
                                <button 
                                    onClick={() => handleComplete(activity.id)}
                                    disabled={completedActivities.includes(activity.id)}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                                        completedActivities.includes(activity.id)
                                            ? 'bg-green-100 text-green-600'
                                            : 'bg-primary text-white'
                                    }`}
                                >
                                    {completedActivities.includes(activity.id) ? 'Done!' : `+${activity.xpReward} XP`}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
                            selectedCategory === cat.id
                                ? 'bg-primary text-white'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <span>{cat.icon}</span>
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Activities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {filteredActivities.map(activity => (
                    <div 
                        key={activity.id}
                        className={`bg-card border rounded-xl md:rounded-2xl p-4 transition-all hover:shadow-lg ${
                            completedActivities.includes(activity.id) ? 'border-green-300 dark:border-green-700' : 'border-border'
                        }`}
                    >
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted flex items-center justify-center text-2xl md:text-3xl">
                                {activity.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getCategoryColor(activity.category)}`}>
                                        {activity.category}
                                    </span>
                                    {completedActivities.includes(activity.id) && (
                                        <span className="px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs">
                                            ✓ Done
                                        </span>
                                    )}
                                </div>
                                <h3 className="font-bold text-sm md:text-base">{activity.title}</h3>
                            </div>
                        </div>

                        <p className="text-xs md:text-sm text-muted-foreground mb-3">{activity.description}</p>

                        <div className="flex items-center gap-2 mb-3 text-xs">
                            <span className="flex items-center gap-1 px-2 py-1 bg-muted rounded">
                                <Clock className="w-3 h-3" />
                                {activity.duration}
                            </span>
                            <span className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded">
                                <Heart className="w-3 h-3" />
                                {activity.healthBenefit}
                            </span>
                        </div>

                        {activity.participants && (
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                                <Users className="w-3 h-3" />
                                {activity.participants} others doing this
                            </div>
                        )}

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                                <Star className="w-4 h-4" />
                                <span className="text-sm font-bold">+{activity.xpReward} XP</span>
                            </div>
                            <button 
                                onClick={() => handleComplete(activity.id)}
                                disabled={completedActivities.includes(activity.id)}
                                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                                    completedActivities.includes(activity.id)
                                        ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400 cursor-default'
                                        : 'bg-primary text-white hover:bg-primary/90'
                                }`}
                            >
                                {completedActivities.includes(activity.id) ? (
                                    <>Completed!</>
                                ) : (
                                    <>
                                        <Play className="w-3.5 h-3.5" />
                                        Start
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Weekly Stats */}
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                <h2 className="font-bold text-base md:text-lg mb-4 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    This Week's Activity
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 bg-muted rounded-xl text-center">
                        <div className="text-2xl md:text-3xl font-bold text-primary">12</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Activities</div>
                    </div>
                    <div className="p-3 md:p-4 bg-muted rounded-xl text-center">
                        <div className="text-2xl md:text-3xl font-bold text-green-600">3h 45m</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Active Time</div>
                    </div>
                    <div className="p-3 md:p-4 bg-muted rounded-xl text-center">
                        <div className="text-2xl md:text-3xl font-bold text-yellow-600">1,250</div>
                        <div className="text-xs md:text-sm text-muted-foreground">XP Earned</div>
                    </div>
                    <div className="p-3 md:p-4 bg-muted rounded-xl text-center">
                        <div className="text-2xl md:text-3xl font-bold text-purple-600">5</div>
                        <div className="text-xs md:text-sm text-muted-foreground">Day Streak</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
