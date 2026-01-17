import { useState } from 'react';
import { 
    Glasses, Play, Star, Clock, Users, Gamepad2, 
    ChevronRight, Lock, Sparkles, Zap, Target, Award,
    Volume2, VolumeX, Maximize, RotateCcw, Info
} from 'lucide-react';

interface VRGame {
    id: string;
    title: string;
    description: string;
    subject: string;
    thumbnail: string;
    duration: string;
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    rating: number;
    players: number;
    xpReward: number;
    isNew: boolean;
    isLocked: boolean;
    requiredLevel: number;
    features: string[];
}

const VR_GAMES: VRGame[] = [
    {
        id: '1',
        title: 'Solar System Explorer',
        description: 'Travel through space and explore planets, moons, and asteroids in stunning 3D!',
        subject: 'Science',
        thumbnail: '🌌',
        duration: '15-30 min',
        difficulty: 'beginner',
        rating: 4.9,
        players: 2450,
        xpReward: 200,
        isNew: true,
        isLocked: false,
        requiredLevel: 1,
        features: ['360° View', 'Voice Guide', 'Quiz Mode']
    },
    {
        id: '2',
        title: 'Ancient India Time Machine',
        description: 'Walk through the streets of Harappa and witness the Indus Valley Civilization!',
        subject: 'History',
        thumbnail: '🏛️',
        duration: '20-40 min',
        difficulty: 'intermediate',
        rating: 4.8,
        players: 1890,
        xpReward: 250,
        isNew: true,
        isLocked: false,
        requiredLevel: 5,
        features: ['Time Travel', 'Interactive NPCs', 'Collect Artifacts']
    },
    {
        id: '3',
        title: 'Human Body Adventure',
        description: 'Shrink down and travel inside the human body to learn about organs and systems!',
        subject: 'Biology',
        thumbnail: '🫀',
        duration: '25-45 min',
        difficulty: 'intermediate',
        rating: 4.9,
        players: 3120,
        xpReward: 300,
        isNew: false,
        isLocked: false,
        requiredLevel: 3,
        features: ['Organ Systems', 'Blood Flow Ride', 'Cell Explorer']
    },
    {
        id: '4',
        title: 'Math Kingdom Quest',
        description: 'Solve puzzles and defeat monsters using math skills in this fantasy adventure!',
        subject: 'Mathematics',
        thumbnail: '🏰',
        duration: '30-60 min',
        difficulty: 'beginner',
        rating: 4.7,
        players: 4560,
        xpReward: 350,
        isNew: false,
        isLocked: false,
        requiredLevel: 1,
        features: ['Boss Battles', 'Power-ups', 'Multiplayer']
    },
    {
        id: '5',
        title: 'Ocean Deep Dive',
        description: 'Explore the mysterious depths of the ocean and discover marine life!',
        subject: 'Marine Biology',
        thumbnail: '🌊',
        duration: '20-35 min',
        difficulty: 'beginner',
        rating: 4.8,
        players: 2100,
        xpReward: 225,
        isNew: false,
        isLocked: false,
        requiredLevel: 2,
        features: ['Underwater Camera', 'Species Database', 'Treasure Hunt']
    },
    {
        id: '6',
        title: 'Chemistry Lab Simulator',
        description: 'Conduct exciting experiments safely in a virtual chemistry laboratory!',
        subject: 'Chemistry',
        thumbnail: '🧪',
        duration: '15-25 min',
        difficulty: 'advanced',
        rating: 4.6,
        players: 1560,
        xpReward: 400,
        isNew: false,
        isLocked: true,
        requiredLevel: 10,
        features: ['Safe Experiments', 'Element Explorer', 'Reaction Simulator']
    },
    {
        id: '7',
        title: 'Dinosaur World',
        description: 'Travel back 65 million years and walk among the dinosaurs!',
        subject: 'Paleontology',
        thumbnail: '🦕',
        duration: '25-40 min',
        difficulty: 'beginner',
        rating: 4.9,
        players: 5230,
        xpReward: 275,
        isNew: false,
        isLocked: false,
        requiredLevel: 1,
        features: ['Dino Identification', 'Fossil Dig', 'Size Comparison']
    },
    {
        id: '8',
        title: 'Space Station Mission',
        description: 'Live as an astronaut on the International Space Station!',
        subject: 'Space Science',
        thumbnail: '🚀',
        duration: '30-50 min',
        difficulty: 'advanced',
        rating: 4.7,
        players: 1890,
        xpReward: 450,
        isNew: false,
        isLocked: true,
        requiredLevel: 15,
        features: ['Zero Gravity', 'Space Walk', 'Mission Control']
    }
];

export default function VRGames() {
    const [selectedGame, setSelectedGame] = useState<VRGame | null>(null);
    const [filter, setFilter] = useState<string>('all');
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const filters = [
        { id: 'all', label: 'All Games', icon: '🎮' },
        { id: 'new', label: 'New', icon: '✨' },
        { id: 'Science', label: 'Science', icon: '🔬' },
        { id: 'Mathematics', label: 'Math', icon: '🔢' },
        { id: 'History', label: 'History', icon: '📜' }
    ];

    const filteredGames = VR_GAMES.filter(game => {
        if (filter === 'all') return true;
        if (filter === 'new') return game.isNew;
        return game.subject === filter;
    });

    const getDifficultyColor = (difficulty: VRGame['difficulty']) => {
        switch (difficulty) {
            case 'beginner': return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
            case 'intermediate': return 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'advanced': return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
        }
    };

    const userLevel = 8; // Mock user level

    return (
        <div className="space-y-4 md:space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20">
                    <Glasses className="w-32 h-32 md:w-48 md:h-48 -mr-8 -mt-8" />
                </div>
                <div className="relative">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                                <Glasses className="w-6 h-6 md:w-7 md:h-7" />
                                VR Learning Games
                            </h1>
                            <p className="text-white/80 text-sm md:text-base">Immersive educational experiences</p>
                        </div>
                        <div className="flex gap-3 md:gap-6">
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold">{VR_GAMES.length}</div>
                                <div className="text-white/80 text-xs md:text-sm">Games</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold">{VR_GAMES.filter(g => !g.isLocked || g.requiredLevel <= userLevel).length}</div>
                                <div className="text-white/80 text-xs md:text-sm">Unlocked</div>
                            </div>
                        </div>
                    </div>

                    {/* VR Mode Info */}
                    <div className="mt-4 p-3 bg-white/20 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-5 h-5" />
                            <span className="text-sm font-medium">Works on mobile, tablet & VR headsets!</span>
                        </div>
                        <div className="flex gap-2 ml-auto">
                            <span className="px-2 py-1 bg-white/30 rounded text-xs">📱 Mobile</span>
                            <span className="px-2 py-1 bg-white/30 rounded text-xs">🎮 Gyroscope</span>
                            <span className="px-2 py-1 bg-white/30 rounded text-xs">🥽 VR Ready</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Game */}
            {!isPlaying && (
                <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-purple-200 dark:border-purple-800">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-5xl md:text-6xl shadow-lg">
                            🌌
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <span className="px-2 py-0.5 bg-purple-500 text-white text-xs font-medium rounded-full">
                                    ⭐ Featured
                                </span>
                                <span className="px-2 py-0.5 bg-green-500 text-white text-xs font-medium rounded-full">
                                    NEW
                                </span>
                            </div>
                            <h2 className="text-lg md:text-xl font-bold mb-1">Solar System Explorer</h2>
                            <p className="text-sm text-muted-foreground mb-3">
                                Experience the wonders of our solar system in breathtaking 3D!
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                    4.9
                                </span>
                                <span className="flex items-center gap-1">
                                    <Users className="w-3.5 h-3.5" />
                                    2.4K players
                                </span>
                                <span className="flex items-center gap-1">
                                    <Zap className="w-3.5 h-3.5 text-yellow-500" />
                                    +200 XP
                                </span>
                            </div>
                        </div>
                        <button 
                            onClick={() => setIsPlaying(true)}
                            className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors"
                        >
                            <Play className="w-5 h-5" fill="currentColor" />
                            Play Now
                        </button>
                    </div>
                </div>
            )}

            {/* VR Game Player */}
            {isPlaying && (
                <div className="bg-black rounded-xl md:rounded-2xl overflow-hidden relative aspect-video">
                    {/* Placeholder VR View */}
                    <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-black flex items-center justify-center">
                        <div className="text-center text-white">
                            <div className="text-6xl md:text-8xl mb-4">🌌</div>
                            <h3 className="text-xl md:text-2xl font-bold mb-2">Solar System Explorer</h3>
                            <p className="text-white/60 text-sm mb-4">Loading VR Experience...</p>
                            <div className="w-48 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
                                <div className="h-full bg-white rounded-full animate-pulse" style={{ width: '60%' }} />
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => setIsPlaying(false)}
                                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30"
                                >
                                    <RotateCcw className="w-5 h-5 text-white" />
                                </button>
                                <button 
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="p-2 bg-white/20 rounded-lg hover:bg-white/30"
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                                    <Info className="w-5 h-5 text-white" />
                                </button>
                                <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30">
                                    <Maximize className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                {filters.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setFilter(f.id)}
                        className={`flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
                            filter === f.id
                                ? 'bg-primary text-white'
                                : 'bg-muted text-muted-foreground hover:bg-muted/80'
                        }`}
                    >
                        <span>{f.icon}</span>
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {filteredGames.map(game => {
                    const isLocked = game.isLocked && game.requiredLevel > userLevel;
                    
                    return (
                        <div 
                            key={game.id}
                            className={`bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden transition-all group ${
                                isLocked ? 'opacity-60' : 'hover:shadow-lg cursor-pointer'
                            }`}
                            onClick={() => !isLocked && setSelectedGame(game)}
                        >
                            {/* Thumbnail */}
                            <div className={`h-28 md:h-36 flex items-center justify-center text-5xl md:text-6xl relative ${
                                game.subject === 'Science' || game.subject === 'Biology' || game.subject === 'Marine Biology' 
                                    ? 'bg-blue-100 dark:bg-blue-900/30' :
                                game.subject === 'Mathematics' ? 'bg-purple-100 dark:bg-purple-900/30' :
                                game.subject === 'History' ? 'bg-orange-100 dark:bg-orange-900/30' :
                                game.subject === 'Chemistry' ? 'bg-green-100 dark:bg-green-900/30' :
                                game.subject === 'Paleontology' ? 'bg-yellow-100 dark:bg-yellow-900/30' :
                                'bg-cyan-100 dark:bg-cyan-900/30'
                            }`}>
                                {game.thumbnail}
                                
                                {isLocked && (
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <Lock className="w-8 h-8 mx-auto mb-1" />
                                            <span className="text-xs">Level {game.requiredLevel}</span>
                                        </div>
                                    </div>
                                )}

                                {game.isNew && !isLocked && (
                                    <span className="absolute top-2 right-2 px-2 py-0.5 bg-green-500 text-white text-xs font-bold rounded-full">
                                        NEW
                                    </span>
                                )}

                                {!isLocked && (
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all">
                                        <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" />
                                    </div>
                                )}
                            </div>

                            <div className="p-3 md:p-4">
                                {/* Badges */}
                                <div className="flex items-center gap-2 mb-2">
                                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                                        {game.difficulty}
                                    </span>
                                    <span className="px-2 py-0.5 bg-muted rounded text-xs">
                                        {game.subject}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-sm md:text-base mb-1 line-clamp-1">{game.title}</h3>
                                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{game.description}</p>

                                {/* Stats */}
                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                                    <span className="flex items-center gap-1">
                                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                        {game.rating}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {game.duration}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Users className="w-3 h-3" />
                                        {game.players > 1000 ? `${(game.players/1000).toFixed(1)}K` : game.players}
                                    </span>
                                </div>

                                {/* XP & Play */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1 text-yellow-600 dark:text-yellow-400">
                                        <Zap className="w-4 h-4" />
                                        <span className="text-sm font-bold">+{game.xpReward}</span>
                                    </div>
                                    <button 
                                        disabled={isLocked}
                                        className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium ${
                                            isLocked 
                                                ? 'bg-muted text-muted-foreground cursor-not-allowed'
                                                : 'bg-primary text-white hover:bg-primary/90'
                                        }`}
                                    >
                                        {isLocked ? <Lock className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                                        {isLocked ? 'Locked' : 'Play'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Game Details Modal */}
            {selectedGame && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedGame(null)}>
                    <div className="bg-background rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                        <div className={`h-40 flex items-center justify-center text-7xl ${
                            selectedGame.subject === 'Science' ? 'bg-blue-100 dark:bg-blue-900/30' :
                            'bg-purple-100 dark:bg-purple-900/30'
                        }`}>
                            {selectedGame.thumbnail}
                        </div>
                        <div className="p-6">
                            <h2 className="text-xl font-bold mb-2">{selectedGame.title}</h2>
                            <p className="text-muted-foreground mb-4">{selectedGame.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {selectedGame.features.map(f => (
                                    <span key={f} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                                        {f}
                                    </span>
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-6">
                                <div className="text-center p-3 bg-muted rounded-xl">
                                    <Star className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
                                    <span className="text-lg font-bold">{selectedGame.rating}</span>
                                    <p className="text-xs text-muted-foreground">Rating</p>
                                </div>
                                <div className="text-center p-3 bg-muted rounded-xl">
                                    <Users className="w-5 h-5 mx-auto mb-1 text-blue-500" />
                                    <span className="text-lg font-bold">{selectedGame.players}</span>
                                    <p className="text-xs text-muted-foreground">Players</p>
                                </div>
                                <div className="text-center p-3 bg-muted rounded-xl">
                                    <Zap className="w-5 h-5 mx-auto mb-1 text-yellow-500" />
                                    <span className="text-lg font-bold">+{selectedGame.xpReward}</span>
                                    <p className="text-xs text-muted-foreground">XP</p>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button 
                                    onClick={() => setSelectedGame(null)}
                                    className="flex-1 py-3 bg-muted text-foreground rounded-xl font-medium"
                                >
                                    Cancel
                                </button>
                                <button 
                                    onClick={() => {
                                        setSelectedGame(null);
                                        setIsPlaying(true);
                                    }}
                                    className="flex-1 py-3 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2"
                                >
                                    <Play className="w-5 h-5" fill="currentColor" />
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
