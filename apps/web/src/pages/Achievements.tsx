import { useState, useEffect } from 'react';
import { 
    Trophy, Flame, Target, Gift, Zap, Star, Crown, Medal,
    Clock, TrendingUp, ChevronRight, Lock, Sparkles, Award
} from 'lucide-react';
import { 
    BADGES, DAILY_CHALLENGES, WEEKLY_CHALLENGES, PLAYER_STATS,
    calculateLevel, type Badge, type Challenge
} from '../lib/gamificationData';

export default function Achievements() {
    const [activeTab, setActiveTab] = useState<'badges' | 'challenges' | 'rewards'>('badges');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [animateXp, setAnimateXp] = useState(false);

    useEffect(() => {
        setAnimateXp(true);
        const timer = setTimeout(() => setAnimateXp(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const stats = PLAYER_STATS;
    const levelInfo = calculateLevel(stats.totalXp);

    const categories = ['all', 'learning', 'streak', 'achievement', 'social', 'special'];

    const filteredBadges = selectedCategory === 'all' 
        ? BADGES 
        : BADGES.filter(b => b.category === selectedCategory);

    const earnedBadges = filteredBadges.filter(b => b.earnedDate);
    const lockedBadges = filteredBadges.filter(b => !b.earnedDate);

    const rarityColors = {
        common: 'from-gray-400 to-gray-500',
        rare: 'from-blue-400 to-blue-600',
        epic: 'from-purple-400 to-purple-600',
        legendary: 'from-yellow-400 to-orange-500'
    };

    const rarityBg = {
        common: 'bg-gray-100 dark:bg-gray-800',
        rare: 'bg-blue-50 dark:bg-blue-900/30',
        epic: 'bg-purple-50 dark:bg-purple-900/30',
        legendary: 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    };

    const renderBadgeCard = (badge: Badge, isLocked: boolean = false) => (
        <div 
            key={badge.id}
            className={`relative p-4 rounded-xl border transition-all duration-300 hover:scale-105 cursor-pointer ${
                isLocked ? 'opacity-60' : ''
            } ${rarityBg[badge.rarity]}`}
        >
            {badge.rarity === 'legendary' && !isLocked && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-400/20 to-orange-400/20 animate-pulse" />
            )}
            
            <div className="relative">
                <div className="flex items-start justify-between mb-3">
                    <div className={`text-4xl ${isLocked ? 'grayscale' : ''}`}>
                        {isLocked ? <Lock className="w-10 h-10 text-gray-400" /> : badge.icon}
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${rarityColors[badge.rarity]} text-white`}>
                        {badge.rarity}
                    </span>
                </div>

                <h3 className="font-bold text-foreground mb-1">{badge.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>

                {badge.progress !== undefined && badge.maxProgress && (
                    <div className="mb-2">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{badge.progress}/{badge.maxProgress}</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                                className={`h-full bg-gradient-to-r ${rarityColors[badge.rarity]} transition-all duration-500`}
                                style={{ width: `${(badge.progress / badge.maxProgress) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                    <div className="flex items-center gap-1 text-sm">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        <span className="font-medium">+{badge.xpReward} XP</span>
                    </div>
                    {badge.earnedDate && (
                        <span className="text-xs text-muted-foreground">
                            {new Date(badge.earnedDate).toLocaleDateString()}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );

    const renderChallengeCard = (challenge: Challenge) => {
        const progress = (challenge.progress / challenge.target) * 100;
        const timeLeft = Math.max(0, challenge.expiresAt.getTime() - Date.now());
        const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        return (
            <div 
                key={challenge.id}
                className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    challenge.completed 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                        : 'bg-card border-border'
                }`}
            >
                <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl ${
                        challenge.completed 
                            ? 'bg-green-100 dark:bg-green-900/40' 
                            : 'bg-primary/10'
                    }`}>
                        {challenge.completed ? '✅' : challenge.icon}
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                            <h3 className="font-bold text-foreground">{challenge.title}</h3>
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                challenge.type === 'daily' 
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                                    : challenge.type === 'weekly'
                                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300'
                                    : 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300'
                            }`}>
                                {challenge.type}
                            </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>

                        <div className="mb-3">
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-muted-foreground">
                                    {challenge.progress}/{challenge.target} completed
                                </span>
                                <span className="font-medium">{Math.round(progress)}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full transition-all duration-500 ${
                                        challenge.completed 
                                            ? 'bg-green-500' 
                                            : 'bg-gradient-to-r from-primary to-secondary'
                                    }`}
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 text-sm">
                                    <Zap className="w-4 h-4 text-yellow-500" />
                                    <span className="font-medium">+{challenge.xpReward}</span>
                                </div>
                                <div className="flex items-center gap-1 text-sm">
                                    <span className="text-yellow-500">🪙</span>
                                    <span className="font-medium">+{challenge.coinReward}</span>
                                </div>
                            </div>
                            {!challenge.completed && (
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    <span>{hoursLeft}h {minutesLeft}m left</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header Stats */}
            <div className="bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-1">Achievements</h1>
                        <p className="text-white/80">Track your progress and earn rewards</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                        <Flame className="w-5 h-5 text-orange-300" />
                        <span className="font-bold">{stats.streak} day streak</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5 text-yellow-300" />
                            <span className="text-white/80 text-sm">Level</span>
                        </div>
                        <p className="text-2xl font-bold">{stats.level}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Zap className="w-5 h-5 text-yellow-300" />
                            <span className="text-white/80 text-sm">Total XP</span>
                        </div>
                        <p className="text-2xl font-bold">{stats.totalXp.toLocaleString()}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Medal className="w-5 h-5 text-yellow-300" />
                            <span className="text-white/80 text-sm">Badges</span>
                        </div>
                        <p className="text-2xl font-bold">{earnedBadges.length}/{BADGES.length}</p>
                    </div>
                    <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl">🪙</span>
                            <span className="text-white/80 text-sm">Coins</span>
                        </div>
                        <p className="text-2xl font-bold">{stats.coins.toLocaleString()}</p>
                    </div>
                </div>

                {/* XP Progress */}
                <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                        <span>Level {stats.level}</span>
                        <span>{stats.xp} / {stats.xpToNextLevel} XP</span>
                        <span>Level {stats.level + 1}</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                        <div 
                            className={`h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000 ${
                                animateXp ? 'animate-pulse' : ''
                            }`}
                            style={{ width: `${(stats.xp / stats.xpToNextLevel) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-muted rounded-xl">
                {[
                    { id: 'badges', label: 'Badges', icon: <Award className="w-4 h-4" /> },
                    { id: 'challenges', label: 'Challenges', icon: <Target className="w-4 h-4" /> },
                    { id: 'rewards', label: 'Rewards', icon: <Gift className="w-4 h-4" /> }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            activeTab === tab.id
                                ? 'bg-background shadow-sm text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {tab.icon}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Badges Tab */}
            {activeTab === 'badges' && (
                <div className="space-y-6">
                    {/* Category Filter */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                                    selectedCategory === cat
                                        ? 'bg-primary text-white'
                                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                }`}
                            >
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Earned Badges */}
                    {earnedBadges.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                Earned ({earnedBadges.length})
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {earnedBadges.map(badge => renderBadgeCard(badge))}
                            </div>
                        </div>
                    )}

                    {/* Locked Badges */}
                    {lockedBadges.length > 0 && (
                        <div>
                            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-gray-400" />
                                Locked ({lockedBadges.length})
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {lockedBadges.map(badge => renderBadgeCard(badge, true))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Challenges Tab */}
            {activeTab === 'challenges' && (
                <div className="space-y-6">
                    {/* Daily Challenges */}
                    <div>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Target className="w-5 h-5 text-blue-500" />
                            Daily Challenges
                        </h2>
                        <div className="space-y-3">
                            {DAILY_CHALLENGES.map(renderChallengeCard)}
                        </div>
                    </div>

                    {/* Weekly Challenges */}
                    <div>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-purple-500" />
                            Weekly Challenges
                        </h2>
                        <div className="space-y-3">
                            {WEEKLY_CHALLENGES.map(renderChallengeCard)}
                        </div>
                    </div>
                </div>
            )}

            {/* Rewards Tab */}
            {activeTab === 'rewards' && (
                <div className="space-y-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Gift className="w-5 h-5 text-orange-500" />
                            Daily Reward
                        </h2>
                        <p className="text-muted-foreground mb-4">Come back every day to claim your rewards!</p>
                        
                        <div className="grid grid-cols-7 gap-2">
                            {[1, 2, 3, 4, 5, 6, 7].map(day => {
                                const claimed = day <= 5;
                                const today = day === 6;
                                return (
                                    <div 
                                        key={day}
                                        className={`p-3 rounded-lg text-center transition-all ${
                                            claimed 
                                                ? 'bg-green-100 dark:bg-green-900/40 border-green-300' 
                                                : today 
                                                ? 'bg-primary text-white animate-pulse cursor-pointer hover:scale-105' 
                                                : 'bg-gray-100 dark:bg-gray-800'
                                        } border`}
                                    >
                                        <p className="text-xs font-medium mb-1">Day {day}</p>
                                        <p className="text-lg">{claimed ? '✅' : today ? '🎁' : '🔒'}</p>
                                        <p className="text-xs mt-1">+{day * 10} 🪙</p>
                                    </div>
                                );
                            })}
                        </div>
                        
                        <button className="w-full mt-4 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                            Claim Today's Reward
                        </button>
                    </div>

                    <div className="bg-card rounded-xl p-6 border">
                        <h2 className="text-lg font-bold mb-4">Milestone Rewards</h2>
                        <div className="space-y-3">
                            {[
                                { level: 10, reward: '500 coins + XP Boost', claimed: true },
                                { level: 15, reward: '1000 coins + Streak Shield', claimed: true },
                                { level: 20, reward: '2000 coins + Special Badge', claimed: false },
                                { level: 25, reward: '5000 coins + Mystery Box', claimed: false }
                            ].map(milestone => (
                                <div 
                                    key={milestone.level}
                                    className={`flex items-center justify-between p-4 rounded-xl ${
                                        milestone.claimed 
                                            ? 'bg-green-50 dark:bg-green-900/20' 
                                            : stats.level >= milestone.level
                                            ? 'bg-yellow-50 dark:bg-yellow-900/20'
                                            : 'bg-muted'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                                            milestone.claimed 
                                                ? 'bg-green-500 text-white' 
                                                : stats.level >= milestone.level
                                                ? 'bg-yellow-500 text-white'
                                                : 'bg-gray-300 dark:bg-gray-600 text-gray-500'
                                        }`}>
                                            {milestone.level}
                                        </div>
                                        <div>
                                            <p className="font-medium">Level {milestone.level}</p>
                                            <p className="text-sm text-muted-foreground">{milestone.reward}</p>
                                        </div>
                                    </div>
                                    {milestone.claimed ? (
                                        <span className="text-green-600 font-medium">Claimed ✓</span>
                                    ) : stats.level >= milestone.level ? (
                                        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg font-medium hover:bg-yellow-600 transition-colors">
                                            Claim
                                        </button>
                                    ) : (
                                        <span className="text-muted-foreground text-sm">
                                            {milestone.level - stats.level} levels to go
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
