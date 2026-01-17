import { useState } from 'react';
import { 
    ShoppingBag, Zap, Shield, Lightbulb, Timer, 
    Sparkles, Gift, Star, Lock, Check
} from 'lucide-react';
import { POWER_UPS, PLAYER_STATS, type PowerUp } from '../lib/gamificationData';

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState<'powerups' | 'avatars' | 'themes'>('powerups');
    const [purchaseModal, setPurchaseModal] = useState<PowerUp | null>(null);
    const [coins, setCoins] = useState(PLAYER_STATS.coins);

    const categories = [
        { id: 'powerups', label: 'Power-ups', icon: <Zap className="w-4 h-4" /> },
        { id: 'avatars', label: 'Avatars', icon: <Star className="w-4 h-4" /> },
        { id: 'themes', label: 'Themes', icon: <Sparkles className="w-4 h-4" /> }
    ];

    const avatars = [
        { id: 'av1', name: 'Cool Cat', icon: '😎', price: 200, owned: true },
        { id: 'av2', name: 'Ninja', icon: '🥷', price: 300, owned: true },
        { id: 'av3', name: 'Astronaut', icon: '👨‍🚀', price: 500, owned: false },
        { id: 'av4', name: 'Wizard', icon: '🧙‍♂️', price: 400, owned: false },
        { id: 'av5', name: 'Robot', icon: '🤖', price: 350, owned: false },
        { id: 'av6', name: 'Superhero', icon: '🦸‍♂️', price: 600, owned: false },
        { id: 'av7', name: 'Scientist', icon: '👨‍🔬', price: 450, owned: false },
        { id: 'av8', name: 'Artist', icon: '👨‍🎨', price: 250, owned: true }
    ];

    const themes = [
        { id: 'th1', name: 'Ocean Blue', colors: ['#0ea5e9', '#0284c7', '#0369a1'], price: 400, owned: true },
        { id: 'th2', name: 'Forest Green', colors: ['#22c55e', '#16a34a', '#15803d'], price: 400, owned: false },
        { id: 'th3', name: 'Sunset Orange', colors: ['#f97316', '#ea580c', '#c2410c'], price: 400, owned: false },
        { id: 'th4', name: 'Royal Purple', colors: ['#a855f7', '#9333ea', '#7e22ce'], price: 500, owned: false },
        { id: 'th5', name: 'Cherry Pink', colors: ['#ec4899', '#db2777', '#be185d'], price: 500, owned: false },
        { id: 'th6', name: 'Golden', colors: ['#eab308', '#ca8a04', '#a16207'], price: 750, owned: false }
    ];

    const getPowerUpIcon = (id: string) => {
        switch (id) {
            case 'xp_boost': return <Zap className="w-8 h-8 text-yellow-500" />;
            case 'streak_shield': return <Shield className="w-8 h-8 text-blue-500" />;
            case 'hint_pack': return <Lightbulb className="w-8 h-8 text-purple-500" />;
            case 'time_freeze': return <Timer className="w-8 h-8 text-cyan-500" />;
            default: return <Star className="w-8 h-8" />;
        }
    };

    const handlePurchase = (item: PowerUp) => {
        if (coins >= item.cost) {
            setCoins(prev => prev - item.cost);
            setPurchaseModal(null);
            // In real app, update state/database
        }
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
                            <ShoppingBag className="w-7 h-7" />
                            Shop
                        </h1>
                        <p className="text-white/80">Spend your coins on awesome items!</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 px-6 py-3 rounded-xl">
                        <span className="text-2xl">🪙</span>
                        <span className="text-2xl font-bold">{coins.toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 p-1 bg-muted rounded-xl">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id as any)}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            selectedCategory === cat.id
                                ? 'bg-background shadow-sm text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {cat.icon}
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Power-ups */}
            {selectedCategory === 'powerups' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {POWER_UPS.map(powerUp => (
                        <div 
                            key={powerUp.id}
                            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-muted rounded-xl">
                                    {getPowerUpIcon(powerUp.id)}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <h3 className="font-bold text-lg">{powerUp.name}</h3>
                                        {powerUp.owned > 0 && (
                                            <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                Owned: {powerUp.owned}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-3">{powerUp.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            <span className="text-xl">🪙</span>
                                            <span className="font-bold text-lg">{powerUp.cost}</span>
                                        </div>
                                        <button
                                            onClick={() => setPurchaseModal(powerUp)}
                                            disabled={coins < powerUp.cost}
                                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                                coins >= powerUp.cost
                                                    ? 'bg-primary text-white hover:bg-primary/90'
                                                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                                            }`}
                                        >
                                            {coins >= powerUp.cost ? 'Buy' : 'Not enough coins'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Avatars */}
            {selectedCategory === 'avatars' && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {avatars.map(avatar => (
                        <div 
                            key={avatar.id}
                            className={`bg-card border rounded-xl p-4 text-center transition-all hover:shadow-lg ${
                                avatar.owned ? 'border-green-300 dark:border-green-700' : 'border-border'
                            }`}
                        >
                            <div className="text-6xl mb-3">{avatar.icon}</div>
                            <h3 className="font-bold mb-2">{avatar.name}</h3>
                            {avatar.owned ? (
                                <div className="flex items-center justify-center gap-1 text-green-600">
                                    <Check className="w-4 h-4" />
                                    <span className="text-sm font-medium">Owned</span>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <div className="flex items-center justify-center gap-1">
                                        <span className="text-lg">🪙</span>
                                        <span className="font-bold">{avatar.price}</span>
                                    </div>
                                    <button
                                        disabled={coins < avatar.price}
                                        className={`w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                                            coins >= avatar.price
                                                ? 'bg-primary text-white hover:bg-primary/90'
                                                : 'bg-muted text-muted-foreground cursor-not-allowed'
                                        }`}
                                    >
                                        {coins >= avatar.price ? 'Buy' : <Lock className="w-4 h-4 mx-auto" />}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Themes */}
            {selectedCategory === 'themes' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {themes.map(theme => (
                        <div 
                            key={theme.id}
                            className={`bg-card border rounded-xl overflow-hidden transition-all hover:shadow-lg ${
                                theme.owned ? 'border-green-300 dark:border-green-700' : 'border-border'
                            }`}
                        >
                            <div 
                                className="h-24 flex"
                                style={{ 
                                    background: `linear-gradient(135deg, ${theme.colors.join(', ')})`
                                }}
                            />
                            <div className="p-4">
                                <h3 className="font-bold mb-2">{theme.name}</h3>
                                <div className="flex items-center gap-2 mb-3">
                                    {theme.colors.map((color, i) => (
                                        <div 
                                            key={i}
                                            className="w-6 h-6 rounded-full border-2 border-white shadow"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </div>
                                {theme.owned ? (
                                    <button className="w-full py-2 bg-green-100 text-green-700 rounded-lg font-medium flex items-center justify-center gap-2">
                                        <Check className="w-4 h-4" />
                                        Apply Theme
                                    </button>
                                ) : (
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-1">
                                            <span className="text-lg">🪙</span>
                                            <span className="font-bold">{theme.price}</span>
                                        </div>
                                        <button
                                            disabled={coins < theme.price}
                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                                coins >= theme.price
                                                    ? 'bg-primary text-white hover:bg-primary/90'
                                                    : 'bg-muted text-muted-foreground cursor-not-allowed'
                                            }`}
                                        >
                                            {coins >= theme.price ? 'Buy' : <Lock className="w-4 h-4" />}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Special Offers */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-4">
                    <Gift className="w-5 h-5 text-purple-500" />
                    <h2 className="text-lg font-bold">Special Bundles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold">Starter Pack</h3>
                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                50% OFF
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                            2x XP Boost + 3x Hint Pack + 500 Coins
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-muted-foreground line-through text-sm">🪙 500</span>
                                <span className="text-lg font-bold ml-2">🪙 250</span>
                            </div>
                            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                                Buy Bundle
                            </button>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-purple-200 dark:border-purple-700">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="font-bold">Pro Pack</h3>
                            <span className="px-2 py-0.5 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                                BEST VALUE
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                            5x All Power-ups + Premium Avatar + 2000 Coins
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <span className="text-muted-foreground line-through text-sm">🪙 1500</span>
                                <span className="text-lg font-bold ml-2">🪙 750</span>
                            </div>
                            <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                                Buy Bundle
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Purchase Modal */}
            {purchaseModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-background rounded-2xl p-6 max-w-md w-full">
                        <div className="text-center mb-6">
                            <div className="p-4 bg-muted rounded-full inline-flex mb-4">
                                {getPowerUpIcon(purchaseModal.id)}
                            </div>
                            <h2 className="text-xl font-bold mb-2">Purchase {purchaseModal.name}?</h2>
                            <p className="text-muted-foreground">{purchaseModal.description}</p>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-muted rounded-xl mb-6">
                            <span className="text-muted-foreground">Price:</span>
                            <span className="flex items-center gap-1 font-bold text-lg">
                                <span className="text-xl">🪙</span>
                                {purchaseModal.cost}
                            </span>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => setPurchaseModal(null)}
                                className="flex-1 py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handlePurchase(purchaseModal)}
                                className="flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                            >
                                Confirm Purchase
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
