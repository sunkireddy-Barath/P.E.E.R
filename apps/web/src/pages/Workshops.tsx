import { useState } from 'react';
import { 
    GraduationCap, Calendar, Clock, Users, MapPin, Video, 
    ChevronRight, Star, Bell, Filter, Search, Play, BookOpen,
    Award, CheckCircle, ArrowRight, ExternalLink
} from 'lucide-react';

interface Workshop {
    id: string;
    title: string;
    description: string;
    instructor: string;
    instructorAvatar: string;
    date: string;
    time: string;
    duration: string;
    category: 'science' | 'math' | 'coding' | 'art' | 'language';
    type: 'live' | 'recorded' | 'upcoming';
    enrolled: number;
    maxCapacity: number;
    rating: number;
    image: string;
    tags: string[];
    xpReward: number;
}

const WORKSHOPS: Workshop[] = [
    {
        id: '1',
        title: 'Fun with Fractions',
        description: 'Learn fractions through interactive games and real-life examples',
        instructor: 'Mrs. Priya Sharma',
        instructorAvatar: '👩‍🏫',
        date: 'Today',
        time: '4:00 PM',
        duration: '45 min',
        category: 'math',
        type: 'live',
        enrolled: 24,
        maxCapacity: 30,
        rating: 4.8,
        image: '🔢',
        tags: ['Beginner', 'Interactive'],
        xpReward: 150
    },
    {
        id: '2',
        title: 'Solar System Explorer',
        description: 'Virtual tour of our solar system with 3D models',
        instructor: 'Dr. Rajan Kumar',
        instructorAvatar: '👨‍🔬',
        date: 'Tomorrow',
        time: '5:00 PM',
        duration: '1 hour',
        category: 'science',
        type: 'upcoming',
        enrolled: 45,
        maxCapacity: 50,
        rating: 4.9,
        image: '🌌',
        tags: ['Visual', 'VR Ready'],
        xpReward: 200
    },
    {
        id: '3',
        title: 'Coding Your First Game',
        description: 'Create a simple snake game using Scratch programming',
        instructor: 'Mr. Arjun Nair',
        instructorAvatar: '👨‍💻',
        date: 'Jan 20',
        time: '3:00 PM',
        duration: '1.5 hours',
        category: 'coding',
        type: 'upcoming',
        enrolled: 18,
        maxCapacity: 25,
        rating: 4.7,
        image: '🎮',
        tags: ['Hands-on', 'Project'],
        xpReward: 250
    },
    {
        id: '4',
        title: 'Hindi Poetry & Storytelling',
        description: 'Express yourself through Hindi poetry and creative writing',
        instructor: 'Mrs. Sunita Devi',
        instructorAvatar: '👩‍🎨',
        date: 'Jan 21',
        time: '4:30 PM',
        duration: '1 hour',
        category: 'language',
        type: 'upcoming',
        enrolled: 32,
        maxCapacity: 40,
        rating: 4.6,
        image: '📝',
        tags: ['Creative', 'Cultural'],
        xpReward: 175
    },
    {
        id: '5',
        title: 'Algebra Made Easy',
        description: 'Master algebraic expressions with step-by-step guidance',
        instructor: 'Mr. Vikram Singh',
        instructorAvatar: '👨‍🏫',
        date: 'Recorded',
        time: 'Anytime',
        duration: '2 hours',
        category: 'math',
        type: 'recorded',
        enrolled: 156,
        maxCapacity: 999,
        rating: 4.9,
        image: '➕',
        tags: ['Self-paced', 'Practice'],
        xpReward: 300
    },
    {
        id: '6',
        title: 'Digital Art Basics',
        description: 'Learn to create beautiful digital art on your tablet or phone',
        instructor: 'Ms. Kavya Menon',
        instructorAvatar: '👩‍🎨',
        date: 'Recorded',
        time: 'Anytime',
        duration: '1.5 hours',
        category: 'art',
        type: 'recorded',
        enrolled: 89,
        maxCapacity: 999,
        rating: 4.8,
        image: '🎨',
        tags: ['Creative', 'Project'],
        xpReward: 200
    }
];

export default function Workshops() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedType, setSelectedType] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { id: 'all', label: 'All', icon: '📚' },
        { id: 'math', label: 'Math', icon: '🔢' },
        { id: 'science', label: 'Science', icon: '🔬' },
        { id: 'coding', label: 'Coding', icon: '💻' },
        { id: 'art', label: 'Art', icon: '🎨' },
        { id: 'language', label: 'Language', icon: '📝' }
    ];

    const types = [
        { id: 'all', label: 'All' },
        { id: 'live', label: '🔴 Live' },
        { id: 'upcoming', label: '📅 Upcoming' },
        { id: 'recorded', label: '📹 Recorded' }
    ];

    const filteredWorkshops = WORKSHOPS.filter(w => {
        const matchesCategory = selectedCategory === 'all' || w.category === selectedCategory;
        const matchesType = selectedType === 'all' || w.type === selectedType;
        const matchesSearch = w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            w.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesType && matchesSearch;
    });

    const getTypeColor = (type: Workshop['type']) => {
        switch (type) {
            case 'live': return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
            case 'upcoming': return 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400';
            case 'recorded': return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
        }
    };

    const getTypeLabel = (type: Workshop['type']) => {
        switch (type) {
            case 'live': return '🔴 Live Now';
            case 'upcoming': return '📅 Upcoming';
            case 'recorded': return '📹 Recorded';
        }
    };

    return (
        <div className="space-y-4 md:space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 md:w-7 md:h-7" />
                            Workshops
                        </h1>
                        <p className="text-white/80 text-sm md:text-base">Interactive learning sessions with expert teachers</p>
                    </div>
                    <div className="flex gap-3 md:gap-4">
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold">{WORKSHOPS.filter(w => w.type === 'live').length}</div>
                            <div className="text-white/80 text-xs md:text-sm">Live</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl md:text-2xl font-bold">{WORKSHOPS.filter(w => w.type === 'upcoming').length}</div>
                            <div className="text-white/80 text-xs md:text-sm">Upcoming</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search & Filters */}
            <div className="space-y-3 md:space-y-4">
                <div className="relative">
                    <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search workshops..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-card border border-border rounded-lg md:rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                </div>

                {/* Categories - Horizontal Scroll on Mobile */}
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

                {/* Type Filter */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    {types.map(type => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
                                selectedType === type.id
                                    ? 'bg-foreground text-background'
                                    : 'bg-card border border-border text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {type.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Live Workshop Banner */}
            {filteredWorkshops.some(w => w.type === 'live') && (
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl md:rounded-2xl p-4 md:p-5 text-white">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                            </span>
                            <span className="font-bold text-sm md:text-base">LIVE NOW</span>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-sm md:text-lg">{filteredWorkshops.find(w => w.type === 'live')?.title}</h3>
                            <p className="text-white/80 text-xs md:text-sm">{filteredWorkshops.find(w => w.type === 'live')?.instructor}</p>
                        </div>
                        <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-2 md:py-2.5 bg-white text-red-600 rounded-lg md:rounded-xl font-bold text-sm hover:bg-white/90">
                            <Play className="w-4 h-4" fill="currentColor" />
                            Join Now
                        </button>
                    </div>
                </div>
            )}

            {/* Workshops Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {filteredWorkshops.map(workshop => (
                    <div 
                        key={workshop.id}
                        className="bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden hover:shadow-lg transition-all group"
                    >
                        {/* Image/Emoji Header */}
                        <div className={`h-24 md:h-32 flex items-center justify-center text-5xl md:text-6xl ${
                            workshop.category === 'math' ? 'bg-blue-100 dark:bg-blue-900/30' :
                            workshop.category === 'science' ? 'bg-purple-100 dark:bg-purple-900/30' :
                            workshop.category === 'coding' ? 'bg-green-100 dark:bg-green-900/30' :
                            workshop.category === 'art' ? 'bg-pink-100 dark:bg-pink-900/30' :
                            'bg-orange-100 dark:bg-orange-900/30'
                        }`}>
                            {workshop.image}
                        </div>

                        <div className="p-3 md:p-4">
                            {/* Type Badge */}
                            <div className="flex items-center justify-between mb-2">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeColor(workshop.type)}`}>
                                    {getTypeLabel(workshop.type)}
                                </span>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                    {workshop.rating}
                                </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-bold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                                {workshop.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground mb-3 line-clamp-2">
                                {workshop.description}
                            </p>

                            {/* Instructor */}
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-lg">{workshop.instructorAvatar}</span>
                                <span className="text-xs md:text-sm text-muted-foreground">{workshop.instructor}</span>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1 mb-3">
                                {workshop.tags.map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-muted rounded text-xs">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Time & Enrollment */}
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-3 pb-3 border-b border-border">
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {workshop.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {workshop.duration}
                                    </span>
                                </div>
                                <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {workshop.enrolled}/{workshop.maxCapacity}
                                </span>
                            </div>

                            {/* XP & Action */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                                    <Star className="w-4 h-4" />
                                    <span className="text-sm font-bold">+{workshop.xpReward} XP</span>
                                </div>
                                <button className={`flex items-center gap-1 px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-colors ${
                                    workshop.type === 'live'
                                        ? 'bg-red-500 text-white hover:bg-red-600'
                                        : workshop.type === 'upcoming'
                                            ? 'bg-primary text-white hover:bg-primary/90'
                                            : 'bg-green-500 text-white hover:bg-green-600'
                                }`}>
                                    {workshop.type === 'live' ? (
                                        <>Join <Play className="w-3 h-3" /></>
                                    ) : workshop.type === 'upcoming' ? (
                                        <>Enroll <Bell className="w-3 h-3" /></>
                                    ) : (
                                        <>Watch <Play className="w-3 h-3" /></>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredWorkshops.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-4xl md:text-6xl mb-4">🔍</div>
                    <h3 className="text-lg font-bold mb-2">No workshops found</h3>
                    <p className="text-muted-foreground text-sm">Try adjusting your filters</p>
                </div>
            )}

            {/* My Enrolled Workshops */}
            <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                <h2 className="text-base md:text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    My Enrolled Workshops
                </h2>
                <div className="space-y-3">
                    {WORKSHOPS.slice(0, 2).map(workshop => (
                        <div key={workshop.id} className="flex items-center gap-3 md:gap-4 p-3 bg-muted rounded-xl">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-2xl bg-background">
                                {workshop.image}
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="font-bold text-sm truncate">{workshop.title}</h4>
                                <p className="text-xs text-muted-foreground">{workshop.date} • {workshop.time}</p>
                            </div>
                            <button className="p-2 bg-primary text-white rounded-lg">
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
