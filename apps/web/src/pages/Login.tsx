import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
    Zap, Mail, Lock, Eye, EyeOff, AlertCircle, 
    Loader2, User, ArrowRight, Sparkles, BookOpen, Trophy, Users
} from 'lucide-react';
import { signInWithEmail, signInWithGoogle } from '../lib/firebase';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);

    const handleEmailLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const { user, error } = await signInWithEmail(email, password);
        
        if (error) {
            setError(error);
            setLoading(false);
        } else if (user) {
            navigate('/dashboard');
        }
    };

    const handleGoogleLogin = async () => {
        setError('');
        setGoogleLoading(true);

        const { user, error } = await signInWithGoogle();
        
        if (error) {
            setError(error);
            setGoogleLoading(false);
        } else if (user) {
            navigate('/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-primary/5 via-background to-purple-500/5">
            {/* Left Panel - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-primary to-purple-600 p-12 flex-col justify-between text-white">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-white/20 rounded-xl">
                            <Zap size={32} fill="currentColor" />
                        </div>
                        <h1 className="text-3xl font-bold">P.E.E.R</h1>
                    </div>
                    <h2 className="text-4xl font-bold mb-4 leading-tight">
                        Personalized Education for<br />Every Rural student
                    </h2>
                    <p className="text-white/80 text-lg">
                        AI-powered offline learning platform designed for rural students
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="p-3 bg-white/20 rounded-lg">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Personalized Learning</h3>
                            <p className="text-sm text-white/70">AI adapts to your learning style</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="p-3 bg-white/20 rounded-lg">
                            <Trophy size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Gamified Experience</h3>
                            <p className="text-sm text-white/70">Learn while having fun</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                        <div className="p-3 bg-white/20 rounded-lg">
                            <Users size={24} />
                        </div>
                        <div>
                            <h3 className="font-semibold">Community Learning</h3>
                            <p className="text-sm text-white/70">Connect with peers worldwide</p>
                        </div>
                    </div>
                </div>

                <p className="text-white/60 text-sm">
                    © 2024 P.E.E.R • Empowering Rural Education
                </p>
            </div>

            {/* Right Panel - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="lg:hidden flex items-center justify-center gap-3 mb-8">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary">
                            <Zap size={32} fill="currentColor" />
                        </div>
                        <h1 className="text-2xl font-bold">P.E.E.R</h1>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold mb-2">Welcome back!</h2>
                            <p className="text-muted-foreground">Sign in to continue learning</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-400 text-sm">
                                <AlertCircle size={18} />
                                {error}
                            </div>
                        )}

                        {/* Google Login */}
                        <button
                            onClick={handleGoogleLogin}
                            disabled={googleLoading}
                            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white dark:bg-muted border border-border rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-muted/80 transition-colors disabled:opacity-50"
                        >
                            {googleLoading ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                            )}
                            Continue with Google
                        </button>

                        <div className="flex items-center gap-4 my-6">
                            <div className="flex-1 h-px bg-border" />
                            <span className="text-sm text-muted-foreground">or</span>
                            <div className="flex-1 h-px bg-border" />
                        </div>

                        {/* Email Login Form */}
                        <form onSubmit={handleEmailLogin} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <div className="relative">
                                    <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Password</label>
                                <div className="relative">
                                    <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full pl-10 pr-12 py-3 bg-muted border-none rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <label className="flex items-center gap-2 text-sm">
                                    <input type="checkbox" className="w-4 h-4 rounded border-border" />
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <Loader2 size={20} className="animate-spin" />
                                ) : (
                                    <>
                                        Sign In
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </form>

                        <p className="text-center text-sm text-muted-foreground mt-6">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-primary font-medium hover:underline">
                                Sign up for free
                            </Link>
                        </p>
                    </div>

                    {/* Features - Mobile */}
                    <div className="lg:hidden mt-8 grid grid-cols-3 gap-3">
                        <div className="text-center p-3 bg-card border border-border rounded-xl">
                            <Sparkles size={24} className="mx-auto mb-2 text-primary" />
                            <span className="text-xs font-medium">AI Learning</span>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-xl">
                            <Trophy size={24} className="mx-auto mb-2 text-yellow-500" />
                            <span className="text-xs font-medium">Gamified</span>
                        </div>
                        <div className="text-center p-3 bg-card border border-border rounded-xl">
                            <Users size={24} className="mx-auto mb-2 text-blue-500" />
                            <span className="text-xs font-medium">Community</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
