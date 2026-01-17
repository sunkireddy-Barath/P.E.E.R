import { useState } from 'react';
import { 
    Users, UserPlus, Search, MessageCircle, 
    Flame, Star, Clock, Check, X, MoreHorizontal,
    Heart, Send, Bell
} from 'lucide-react';

interface Friend {
    id: string;
    name: string;
    avatar: string;
    level: number;
    streak: number;
    status: 'online' | 'offline' | 'studying';
    lastActive?: string;
    xpToday: number;
}

interface FriendRequest {
    id: string;
    name: string;
    avatar: string;
    level: number;
    mutualFriends: number;
}

interface Activity {
    id: string;
    userName: string;
    userAvatar: string;
    type: 'badge' | 'streak' | 'level' | 'challenge' | 'lesson';
    content: string;
    timestamp: string;
    likes: number;
    liked: boolean;
}

const FRIENDS: Friend[] = [
    { id: '1', name: 'Priya Sharma', avatar: '👩‍🎓', level: 15, streak: 28, status: 'studying', xpToday: 450 },
    { id: '2', name: 'Rahul Verma', avatar: '👨‍💻', level: 12, streak: 14, status: 'online', xpToday: 320 },
    { id: '3', name: 'Ananya Patel', avatar: '🧑‍🔬', level: 18, streak: 45, status: 'online', xpToday: 680 },
    { id: '4', name: 'Vikram Singh', avatar: '🎯', level: 10, streak: 7, status: 'offline', lastActive: '2h ago', xpToday: 150 },
    { id: '5', name: 'Meera Reddy', avatar: '📚', level: 14, streak: 21, status: 'offline', lastActive: '5h ago', xpToday: 0 },
    { id: '6', name: 'Arjun Nair', avatar: '🚀', level: 16, streak: 33, status: 'studying', xpToday: 520 }
];

const FRIEND_REQUESTS: FriendRequest[] = [
    { id: '1', name: 'Kavya Menon', avatar: '🌟', level: 11, mutualFriends: 3 },
    { id: '2', name: 'Dev Kumar', avatar: '💡', level: 9, mutualFriends: 1 }
];

const ACTIVITIES: Activity[] = [
    { id: '1', userName: 'Priya Sharma', userAvatar: '👩‍🎓', type: 'badge', content: 'earned the "Math Master" badge!', timestamp: '5 min ago', likes: 12, liked: false },
    { id: '2', userName: 'Ananya Patel', userAvatar: '🧑‍🔬', type: 'streak', content: 'reached a 45-day streak! 🔥', timestamp: '15 min ago', likes: 24, liked: true },
    { id: '3', userName: 'Rahul Verma', userAvatar: '👨‍💻', type: 'challenge', content: 'completed Weekly Math Challenge!', timestamp: '1 hour ago', likes: 8, liked: false },
    { id: '4', userName: 'Arjun Nair', userAvatar: '🚀', type: 'level', content: 'reached Level 16! 🎉', timestamp: '2 hours ago', likes: 15, liked: true },
];

const SUGGESTED = [
    { id: '10', name: 'Shreya Iyer', avatar: '🎨', level: 13, school: 'Same school' },
    { id: '11', name: 'Aditya Joshi', avatar: '⚡', level: 15, school: 'Top learner' },
    { id: '12', name: 'Neha Gupta', avatar: '🌈', level: 11, school: '5 mutual friends' }
];

export default function Social() {
    const [activeTab, setActiveTab] = useState<'friends' | 'activity' | 'find'>('friends');
    const [searchQuery, setSearchQuery] = useState('');
    const [activities, setActivities] = useState(ACTIVITIES);

    const onlineFriends = FRIENDS.filter(f => f.status !== 'offline');
    const offlineFriends = FRIENDS.filter(f => f.status === 'offline');

    const getStatusColor = (status: Friend['status']) => {
        switch (status) {
            case 'online': return 'bg-green-500';
            case 'studying': return 'bg-yellow-500';
            case 'offline': return 'bg-gray-400';
        }
    };

    const handleLike = (activityId: string) => {
        setActivities(prev => prev.map(a => 
            a.id === activityId ? { ...a, liked: !a.liked, likes: a.liked ? a.likes - 1 : a.likes + 1 } : a
        ));
    };

    return (
        <div className="space-y-4 md:space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                            <Users className="w-6 h-6 md:w-7 md:h-7" />
                            Social
                        </h1>
                        <p className="text-white/80 text-sm md:text-base">Connect with friends!</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold">{FRIENDS.length}</div>
                            <div className="text-white/80 text-xs md:text-sm">Friends</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 md:gap-2 p-1 bg-muted rounded-lg md:rounded-xl overflow-x-auto">
                {[
                    { id: 'friends', label: 'Friends', icon: <Users className="w-4 h-4" /> },
                    { id: 'activity', label: 'Activity', icon: <Bell className="w-4 h-4" /> },
                    { id: 'find', label: 'Find', icon: <UserPlus className="w-4 h-4" /> }
                ].map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as any)}
                        className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2 md:py-2.5 rounded-md md:rounded-lg text-xs md:text-sm font-medium transition-all ${
                            activeTab === tab.id
                                ? 'bg-background shadow-sm text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {tab.icon}
                        <span className="hidden xs:inline">{tab.label}</span>
                    </button>
                ))}
            </div>

            {/* Friends Tab */}
            {activeTab === 'friends' && (
                <div className="space-y-4 md:space-y-6">
                    <div className="relative">
                        <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search friends..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-card border border-border rounded-lg md:rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    {onlineFriends.length > 0 && (
                        <div>
                            <h2 className="text-xs md:text-sm font-medium text-muted-foreground mb-2 md:mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Online ({onlineFriends.length})
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3">
                                {onlineFriends.map(friend => (
                                    <div key={friend.id} className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-lg transition-all">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-full flex items-center justify-center text-xl md:text-2xl">
                                                    {friend.avatar}
                                                </div>
                                                <span className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(friend.status)} rounded-full border-2 border-card`} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-sm md:text-base truncate">{friend.name}</h3>
                                                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1">
                                                        <Flame className="w-3 h-3 text-orange-500" />
                                                        {friend.streak}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 text-yellow-500" />
                                                        {friend.xpToday} XP
                                                    </span>
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                                <MessageCircle className="w-4 h-4 text-muted-foreground" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {offlineFriends.length > 0 && (
                        <div>
                            <h2 className="text-xs md:text-sm font-medium text-muted-foreground mb-2 md:mb-3">
                                Offline ({offlineFriends.length})
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-3">
                                {offlineFriends.map(friend => (
                                    <div key={friend.id} className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 opacity-70 hover:opacity-100 transition-all">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-full flex items-center justify-center text-xl md:text-2xl">
                                                    {friend.avatar}
                                                </div>
                                                <span className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full border-2 border-card" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-sm md:text-base truncate">{friend.name}</h3>
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <Clock className="w-3 h-3" />
                                                    {friend.lastActive}
                                                </div>
                                            </div>
                                            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                                                <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Activity Tab */}
            {activeTab === 'activity' && (
                <div className="space-y-3 md:space-y-4">
                    {activities.map(activity => (
                        <div key={activity.id} className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4">
                            <div className="flex gap-3 md:gap-4">
                                <div className="w-9 h-9 md:w-10 md:h-10 bg-muted rounded-full flex items-center justify-center text-lg md:text-xl flex-shrink-0">
                                    {activity.userAvatar}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm md:text-base">
                                        <span className="font-bold">{activity.userName}</span> {activity.content}
                                    </p>
                                    <div className="flex items-center gap-3 md:gap-4 mt-2">
                                        <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                                        <button 
                                            onClick={() => handleLike(activity.id)}
                                            className={`flex items-center gap-1 text-xs md:text-sm transition-colors ${
                                                activity.liked ? 'text-pink-500' : 'text-muted-foreground hover:text-pink-500'
                                            }`}
                                        >
                                            <Heart className={`w-3.5 h-3.5 ${activity.liked ? 'fill-current' : ''}`} />
                                            {activity.likes}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Find Friends Tab */}
            {activeTab === 'find' && (
                <div className="space-y-4 md:space-y-6">
                    {FRIEND_REQUESTS.length > 0 && (
                        <div>
                            <h2 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                                <UserPlus className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                Requests ({FRIEND_REQUESTS.length})
                            </h2>
                            <div className="space-y-2 md:space-y-3">
                                {FRIEND_REQUESTS.map(request => (
                                    <div key={request.id} className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4">
                                        <div className="flex items-center gap-3 md:gap-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-full flex items-center justify-center text-xl md:text-2xl flex-shrink-0">
                                                {request.avatar}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-bold text-sm md:text-base">{request.name}</h3>
                                                <p className="text-xs md:text-sm text-muted-foreground">
                                                    Lvl {request.level} • {request.mutualFriends} mutual
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                                                    <Check className="w-4 h-4 md:w-5 md:h-5" />
                                                </button>
                                                <button className="p-2 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80">
                                                    <X className="w-4 h-4 md:w-5 md:h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div>
                        <h2 className="text-base md:text-lg font-bold mb-3 md:mb-4 flex items-center gap-2">
                            <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
                            Suggested
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                            {SUGGESTED.map(friend => (
                                <div key={friend.id} className="bg-card border border-border rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-muted rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-2 md:mb-3">
                                        {friend.avatar}
                                    </div>
                                    <h3 className="font-bold text-sm md:text-base">{friend.name}</h3>
                                    <p className="text-xs text-muted-foreground mb-1">Level {friend.level}</p>
                                    <p className="text-xs text-primary mb-2 md:mb-3">{friend.school}</p>
                                    <button className="w-full flex items-center justify-center gap-1 py-2 bg-primary text-white rounded-lg text-xs md:text-sm font-medium hover:bg-primary/90">
                                        <UserPlus className="w-3.5 h-3.5" />
                                        Add
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg md:rounded-xl p-4 md:p-6 border border-blue-200 dark:border-blue-800">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="p-2.5 md:p-3 bg-blue-500 rounded-lg md:rounded-xl text-white">
                                <Send className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="font-bold text-sm md:text-lg">Invite Classmates!</h3>
                                <p className="text-xs md:text-sm text-muted-foreground">Earn 100 XP for each friend</p>
                            </div>
                            <button className="w-full sm:w-auto px-4 md:px-6 py-2 md:py-2.5 bg-blue-500 text-white rounded-lg md:rounded-xl text-sm font-medium hover:bg-blue-600">
                                Share Invite
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
