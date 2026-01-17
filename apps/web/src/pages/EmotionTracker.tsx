import { useState, useEffect } from 'react';
import { 
    Heart, Smile, Meh, Frown, CloudRain, Sun, 
    MessageCircle, Sparkles, TrendingUp, Calendar,
    Brain, Lightbulb, Music, BookOpen, Users, Wind,
    ThumbsUp, Star, Coffee, Moon, Zap, Target, Quote
} from 'lucide-react';

interface MoodEntry {
    id: string;
    mood: 'great' | 'good' | 'okay' | 'sad' | 'stressed';
    note?: string;
    timestamp: string;
    date: string;
}

interface Tip {
    id: string;
    category: string;
    title: string;
    description: string;
    icon: string;
}

const MOOD_OPTIONS = [
    { id: 'great', emoji: '😄', label: 'Great!', color: 'bg-green-500', lightColor: 'bg-green-100 text-green-600' },
    { id: 'good', emoji: '🙂', label: 'Good', color: 'bg-blue-500', lightColor: 'bg-blue-100 text-blue-600' },
    { id: 'okay', emoji: '😐', label: 'Okay', color: 'bg-yellow-500', lightColor: 'bg-yellow-100 text-yellow-600' },
    { id: 'sad', emoji: '😔', label: 'Sad', color: 'bg-orange-500', lightColor: 'bg-orange-100 text-orange-600' },
    { id: 'stressed', emoji: '😰', label: 'Stressed', color: 'bg-red-500', lightColor: 'bg-red-100 text-red-600' }
];

const MOOD_HISTORY: MoodEntry[] = [
    { id: '1', mood: 'good', timestamp: 'Today, 9:00 AM', date: 'Today' },
    { id: '2', mood: 'great', timestamp: 'Yesterday, 8:30 AM', date: 'Yesterday' },
    { id: '3', mood: 'okay', timestamp: 'Jan 15, 10:00 AM', date: 'Jan 15' },
    { id: '4', mood: 'good', timestamp: 'Jan 14, 9:15 AM', date: 'Jan 14' },
    { id: '5', mood: 'great', timestamp: 'Jan 13, 8:45 AM', date: 'Jan 13' },
    { id: '6', mood: 'sad', timestamp: 'Jan 12, 11:00 AM', date: 'Jan 12' },
    { id: '7', mood: 'good', timestamp: 'Jan 11, 9:30 AM', date: 'Jan 11' }
];

const WELLNESS_TIPS: Tip[] = [
    { id: '1', category: 'Focus', title: 'Take a 5-minute break', description: 'Step away from your screen and look at something far away', icon: '👀' },
    { id: '2', category: 'Energy', title: 'Stretch your body', description: 'Do some simple stretches to refresh your mind', icon: '🤸' },
    { id: '3', category: 'Calm', title: 'Deep breathing', description: 'Take 5 deep breaths - inhale for 4, hold for 4, exhale for 4', icon: '🌬️' },
    { id: '4', category: 'Social', title: 'Talk to a friend', description: 'Share how you feel with someone you trust', icon: '💬' },
    { id: '5', category: 'Joy', title: 'Listen to music', description: 'Play your favorite uplifting song', icon: '🎵' },
    { id: '6', category: 'Gratitude', title: 'Write 3 good things', description: 'List three things that made you smile today', icon: '📝' }
];

const MOTIVATIONAL_QUOTES = [
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Every expert was once a beginner.", author: "Helen Hayes" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
    { quote: "You are braver than you believe.", author: "A.A. Milne" }
];

const ACTIVITIES_FOR_MOOD = {
    great: ['Share your happiness with friends!', 'Try a challenging lesson', 'Help someone else learn'],
    good: ['Keep up the good work!', 'Try a new activity', 'Set a new goal'],
    okay: ['Take a short break', 'Do something you enjoy', 'Talk to a friend'],
    sad: ['It\'s okay to feel this way', 'Try some gentle exercise', 'Listen to calming music'],
    stressed: ['Take deep breaths', 'Break tasks into smaller steps', 'Ask for help if needed']
};

export default function EmotionTracker() {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);
    const [note, setNote] = useState('');
    const [showMoodPicker, setShowMoodPicker] = useState(true);
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [todayMood, setTodayMood] = useState<MoodEntry | null>(MOOD_HISTORY[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuoteIndex(prev => (prev + 1) % MOTIVATIONAL_QUOTES.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const handleMoodSelect = (moodId: string) => {
        setSelectedMood(moodId);
        setShowMoodPicker(false);
    };

    const handleSaveMood = () => {
        if (selectedMood) {
            // In real app, save to database
            setTodayMood({
                id: Date.now().toString(),
                mood: selectedMood as any,
                note,
                timestamp: 'Just now',
                date: 'Today'
            });
            setNote('');
            setSelectedMood(null);
        }
    };

    const getMoodData = (moodId: string) => MOOD_OPTIONS.find(m => m.id === moodId);

    const weeklyMoodData = MOOD_HISTORY.slice(0, 7).map(entry => {
        const mood = getMoodData(entry.mood);
        return { ...entry, ...mood };
    });

    const moodCounts = {
        great: MOOD_HISTORY.filter(m => m.mood === 'great').length,
        good: MOOD_HISTORY.filter(m => m.mood === 'good').length,
        okay: MOOD_HISTORY.filter(m => m.mood === 'okay').length,
        sad: MOOD_HISTORY.filter(m => m.mood === 'sad').length,
        stressed: MOOD_HISTORY.filter(m => m.mood === 'stressed').length
    };

    return (
        <div className="space-y-4 md:space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl md:rounded-2xl p-4 md:p-6 text-white">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-2">
                            <Heart className="w-6 h-6 md:w-7 md:h-7" />
                            How are you feeling?
                        </h1>
                        <p className="text-white/80 text-sm md:text-base">Your emotions matter - track and understand them</p>
                    </div>
                    {todayMood && (
                        <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-xl">
                            <span className="text-2xl">{getMoodData(todayMood.mood)?.emoji}</span>
                            <div>
                                <p className="text-xs text-white/80">Today's mood</p>
                                <p className="font-medium">{getMoodData(todayMood.mood)?.label}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mood Picker */}
            {showMoodPicker && (
                <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                    <h2 className="text-base md:text-lg font-bold mb-4 text-center">How are you feeling right now?</h2>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {MOOD_OPTIONS.map(mood => (
                            <button
                                key={mood.id}
                                onClick={() => handleMoodSelect(mood.id)}
                                className={`flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl transition-all hover:scale-110 ${
                                    selectedMood === mood.id 
                                        ? `${mood.color} text-white shadow-lg` 
                                        : 'bg-muted hover:bg-muted/80'
                                }`}
                            >
                                <span className="text-3xl md:text-4xl">{mood.emoji}</span>
                                <span className="text-xs md:text-sm font-medium">{mood.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Mood Selected View */}
            {selectedMood && !showMoodPicker && (
                <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-xl ${getMoodData(selectedMood)?.color}`}>
                            <span className="text-4xl">{getMoodData(selectedMood)?.emoji}</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">You're feeling {getMoodData(selectedMood)?.label.toLowerCase()}</h3>
                            <p className="text-sm text-muted-foreground">Would you like to add a note?</p>
                        </div>
                    </div>

                    <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="What's on your mind? (optional)"
                        className="w-full p-3 bg-muted border-none rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={3}
                    />

                    <div className="mt-4">
                        <h4 className="font-medium text-sm mb-2">💡 Suggestions for you:</h4>
                        <div className="flex flex-wrap gap-2">
                            {ACTIVITIES_FOR_MOOD[selectedMood as keyof typeof ACTIVITIES_FOR_MOOD].map((activity, i) => (
                                <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                    {activity}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <button 
                            onClick={() => setShowMoodPicker(true)}
                            className="flex-1 py-2.5 bg-muted text-foreground rounded-xl font-medium text-sm"
                        >
                            Change
                        </button>
                        <button 
                            onClick={handleSaveMood}
                            className="flex-1 py-2.5 bg-primary text-white rounded-xl font-medium text-sm"
                        >
                            Save Mood
                        </button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                    {/* Weekly Mood Chart */}
                    <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5">
                        <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-primary" />
                            This Week's Mood
                        </h3>
                        <div className="flex items-end justify-between gap-2 h-32">
                            {weeklyMoodData.reverse().map((entry, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                                    <div 
                                        className={`w-full rounded-t-lg ${entry.color} transition-all`}
                                        style={{ 
                                            height: entry.mood === 'great' ? '100%' : 
                                                   entry.mood === 'good' ? '80%' : 
                                                   entry.mood === 'okay' ? '60%' : 
                                                   entry.mood === 'sad' ? '40%' : '30%'
                                        }}
                                    />
                                    <span className="text-lg">{entry.emoji}</span>
                                    <span className="text-xs text-muted-foreground">{entry.date?.split(' ')[0] || 'Day'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mood History */}
                    <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5">
                        <h3 className="font-bold text-base mb-4 flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-primary" />
                            Recent Entries
                        </h3>
                        <div className="space-y-3">
                            {MOOD_HISTORY.slice(0, 5).map(entry => {
                                const mood = getMoodData(entry.mood);
                                return (
                                    <div key={entry.id} className="flex items-center gap-3 p-3 bg-muted rounded-xl">
                                        <span className="text-2xl">{mood?.emoji}</span>
                                        <div className="flex-1">
                                            <p className="font-medium text-sm">{mood?.label}</p>
                                            <p className="text-xs text-muted-foreground">{entry.timestamp}</p>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${mood?.lightColor}`}>
                                            {entry.date}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-4 md:space-y-6">
                    {/* Motivational Quote */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl md:rounded-2xl p-4 md:p-5 border border-yellow-200 dark:border-yellow-800">
                        <div className="flex items-start gap-2 mb-3">
                            <Quote className="w-5 h-5 text-yellow-600" />
                            <span className="font-bold text-sm">Daily Inspiration</span>
                        </div>
                        <p className="text-sm italic mb-2">"{MOTIVATIONAL_QUOTES[currentQuoteIndex].quote}"</p>
                        <p className="text-xs text-muted-foreground">— {MOTIVATIONAL_QUOTES[currentQuoteIndex].author}</p>
                    </div>

                    {/* Mood Summary */}
                    <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5">
                        <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-primary" />
                            Mood Summary
                        </h3>
                        <div className="space-y-2">
                            {MOOD_OPTIONS.map(mood => (
                                <div key={mood.id} className="flex items-center gap-2">
                                    <span className="text-lg">{mood.emoji}</span>
                                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full ${mood.color}`}
                                            style={{ 
                                                width: `${(moodCounts[mood.id as keyof typeof moodCounts] / MOOD_HISTORY.length) * 100}%` 
                                            }}
                                        />
                                    </div>
                                    <span className="text-xs text-muted-foreground w-4">
                                        {moodCounts[mood.id as keyof typeof moodCounts]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Wellness Tips */}
                    <div className="bg-card border border-border rounded-xl md:rounded-2xl p-4 md:p-5">
                        <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                            <Lightbulb className="w-4 h-4 text-yellow-500" />
                            Wellness Tips
                        </h3>
                        <div className="space-y-2">
                            {WELLNESS_TIPS.slice(0, 4).map(tip => (
                                <button 
                                    key={tip.id}
                                    className="w-full flex items-start gap-2 p-2 bg-muted rounded-lg text-left hover:bg-muted/80 transition-colors"
                                >
                                    <span className="text-lg">{tip.icon}</span>
                                    <div>
                                        <p className="text-xs font-medium">{tip.title}</p>
                                        <p className="text-xs text-muted-foreground line-clamp-1">{tip.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Talk to Someone */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl md:rounded-2xl p-4 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-blue-500 rounded-lg text-white">
                                <MessageCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">Need to talk?</h3>
                                <p className="text-xs text-muted-foreground">Connect with a counselor</p>
                            </div>
                        </div>
                        <button className="w-full py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600">
                            Chat Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <button className="p-4 bg-green-100 dark:bg-green-900/30 rounded-xl text-center hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors">
                    <Wind className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <span className="text-xs md:text-sm font-medium">Breathing</span>
                </button>
                <button className="p-4 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-center hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors">
                    <Music className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <span className="text-xs md:text-sm font-medium">Calm Music</span>
                </button>
                <button className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-center hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                    <BookOpen className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <span className="text-xs md:text-sm font-medium">Journal</span>
                </button>
                <button className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-xl text-center hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors">
                    <Users className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                    <span className="text-xs md:text-sm font-medium">Friends</span>
                </button>
            </div>
        </div>
    );
}
