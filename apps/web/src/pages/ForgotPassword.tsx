import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Zap, Mail, AlertCircle, Loader2, ArrowLeft, CheckCircle 
} from 'lucide-react';
import { resetPassword } from '../lib/firebase';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const { error } = await resetPassword(email);
        
        if (error) {
            setError(error);
            setLoading(false);
        } else {
            setSuccess(true);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-purple-500/5 p-6">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <Zap size={32} fill="currentColor" />
                    </div>
                    <h1 className="text-2xl font-bold">P.E.E.R</h1>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl">
                    {success ? (
                        /* Success State */
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={32} className="text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Check your email</h2>
                            <p className="text-muted-foreground mb-6">
                                We've sent a password reset link to<br />
                                <span className="font-medium text-foreground">{email}</span>
                            </p>
                            <p className="text-sm text-muted-foreground mb-6">
                                Didn't receive the email? Check your spam folder or try again.
                            </p>
                            <div className="space-y-3">
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="w-full py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors"
                                >
                                    Try different email
                                </button>
                                <Link 
                                    to="/login"
                                    className="block w-full py-3 bg-primary text-white rounded-xl font-medium text-center hover:bg-primary/90 transition-colors"
                                >
                                    Back to Sign In
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* Form State */
                        <>
                            <Link 
                                to="/login" 
                                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
                            >
                                <ArrowLeft size={16} />
                                Back to sign in
                            </Link>

                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Forgot password?</h2>
                                <p className="text-muted-foreground">
                                    No worries! Enter your email and we'll send you a reset link.
                                </p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-2 text-red-700 dark:text-red-400 text-sm">
                                    <AlertCircle size={18} />
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">
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

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {loading ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        'Send Reset Link'
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>

                <p className="text-center text-sm text-muted-foreground mt-6">
                    Remember your password?{' '}
                    <Link to="/login" className="text-primary font-medium hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}
