import { useState } from 'react';
import { 
    Trophy, Medal, TrendingUp, TrendingDown, Minus, 
    Flame, Award, Crown, Search, Filter
} from 'lucide-react';
import { LEADERBOARD, PLAYER_STATS, type LeaderboardEntry } from '../lib/gamificationData';

export default function Leaderboard() {
    const [timeFilter, setTimeFilter] = useState<'daily' | 'weekly' | 'monthly' | 'allTime'>('weekly');
    const [searchQuery, setSearchQuery] = useState('');

    const currentUserId = '1'; // Current user's ID
    const userEntry = LEADERBOARD.find(e => e.id === currentUserId);

    const filteredLeaderboard = LEADERBOARD.filter(entry =>
        entry.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
            case 2: return <Medal className="w-6 h-6 text-gray-400" />;
            case 3: return <Medal className="w-6 h-6 text-amber-600" />;
            default: return <span className="w-6 h-6 flex items-center justify-center font-bold text-muted-foreground">#{rank}</span>;
        }
    };

    const getChangeIcon = (change: 'up' | 'down' | 'same') => {
        switch (change) {
            case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
            case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
            default: return <Minus className="w-4 h-4 text-gray-400" />;
        }
    };

    const getRankBg = (rank: number, isCurrentUser: boolean) => {
        if (isCurrentUser) return 'bg-primary/10 border-primary';
        switch (rank) {
            case 1: return 'bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-yellow-300 dark:border-yellow-700';
            case 2: return 'bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 border-gray-300 dark:border-gray-600';
            case 3: return 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-300 dark:border-amber-700';
            default: return 'bg-card border-border';
        }
    };

    const renderLeaderboardEntry = (entry: LeaderboardEntry, index: number) => {
        const isCurrentUser = entry.id === currentUserId;
        
        return (
            <div
                key={entry.id}
                className={`p-4 rounded-xl border transition-all duration-300 hover:shadow-md ${getRankBg(entry.rank, isCurrentUser)} ${
                    isCurrentUser ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
            >
                <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className="flex items-center gap-2 w-16">
                        {getRankIcon(entry.rank)}
                        {getChangeIcon(entry.change)}
                    </div>

                    {/* Avatar & Name */}
                    <div className="flex items-center gap-3 flex-1">
                        <div className="relative">
                            <img 
                                src={entry.avatar} 
                                alt={entry.name}
                                className="w-12 h-12 rounded-full border-2 border-background shadow"
                            />
                            <div className="absolute -bottom-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                                {entry.level}
                            </div>
                        </div>
                        <div>
                            <p className={`font-bold ${isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                                {entry.name}
                            </p>
                            {entry.school && (
                                <p className="text-xs text-muted-foreground">{entry.school}</p>
                            )}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground">Streak</p>
                            <p className="font-bold flex items-center gap-1">
                                <Flame className="w-4 h-4 text-orange-500" />
                                {entry.streak}
                            </p>
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-muted-foreground">Badges</p>
                            <p className="font-bold flex items-center gap-1">
                                <Award className="w-4 h-4 text-purple-500" />
                                {entry.badges}
                            </p>
                        </div>
                    </div>

                    {/* XP */}
                    <div className="text-right">
                        <p className="text-xl font-bold text-primary">{entry.xp.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">XP</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
                            <Trophy className="w-7 h-7" />
                            Leaderboard
                        </h1>
                        <p className="text-white/80">Compete with students across India</p>
                    </div>
                </div>

                {/* User's Current Position */}
                {userEntry && (
                    <div className="bg-white/10 rounded-xl p-4">
                        <p className="text-sm text-white/80 mb-2">Your Position</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold">
                                    #{userEntry.rank}
                                </div>
                                <div>
                                    <p className="font-bold text-lg">{userEntry.name}</p>
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="flex items-center gap-1">
                                            <Flame className="w-4 h-4 text-orange-300" />
                                            {userEntry.streak} day streak
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Award className="w-4 h-4 text-yellow-300" />
                                            {userEntry.badges} badges
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-3xl font-bold">{userEntry.xp.toLocaleString()}</p>
                                <p className="text-sm text-white/80">Total XP</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
                {/* Time Filter */}
                <div className="flex gap-2 p-1 bg-muted rounded-xl">
                    {[
                        { id: 'daily', label: 'Today' },
                        { id: 'weekly', label: 'This Week' },
                        { id: 'monthly', label: 'This Month' },
                        { id: 'allTime', label: 'All Time' }
                    ].map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setTimeFilter(filter.id as any)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                timeFilter === filter.id
                                    ? 'bg-background shadow-sm text-foreground'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search students..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>
            </div>

            {/* Top 3 Podium */}
            <div className="grid grid-cols-3 gap-4">
                {filteredLeaderboard.slice(0, 3).map((entry, index) => {
                    const podiumOrder = [1, 0, 2]; // Silver, Gold, Bronze order for display
                    const displayIndex = podiumOrder[index];
                    const displayEntry = filteredLeaderboard[displayIndex];
                    
                    if (!displayEntry) return null;

                    const heights = ['h-24', 'h-32', 'h-20'];
                    const bgColors = [
                        'from-gray-300 to-gray-400',
                        'from-yellow-400 to-amber-500',
                        'from-amber-500 to-orange-600'
                    ];

                    return (
                        <div 
                            key={displayEntry.id}
                            className="flex flex-col items-center"
                        >
                            <img 
                                src={displayEntry.avatar}
                                alt={displayEntry.name}
                                className={`w-16 h-16 rounded-full border-4 shadow-lg mb-2 ${
                                    displayIndex === 0 ? 'border-yellow-400' : 
                                    displayIndex === 1 ? 'border-gray-400' : 'border-amber-600'
                                }`}
                            />
                            <p className="font-bold text-sm text-center truncate max-w-full">
                                {displayEntry.name.split(' ')[0]}
                            </p>
                            <p className="text-xs text-muted-foreground mb-2">
                                {displayEntry.xp.toLocaleString()} XP
                            </p>
                            <div className={`w-full ${heights[displayIndex]} bg-gradient-to-t ${bgColors[displayIndex]} rounded-t-lg flex items-center justify-center`}>
                                <span className="text-2xl font-bold text-white">
                                    {displayIndex === 0 ? '🥇' : displayIndex === 1 ? '🥈' : '🥉'}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Full Leaderboard */}
            <div className="space-y-3">
                <h2 className="text-lg font-bold">Rankings</h2>
                {filteredLeaderboard.map((entry, index) => renderLeaderboardEntry(entry, index))}
            </div>

            {/* Stats Footer */}
            <div className="bg-muted rounded-xl p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold text-primary">10,000+</p>
                        <p className="text-sm text-muted-foreground">Active Students</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-primary">500+</p>
                        <p className="text-sm text-muted-foreground">Schools</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-primary">15</p>
                        <p className="text-sm text-muted-foreground">States</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-primary">1M+</p>
                        <p className="text-sm text-muted-foreground">Lessons Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
