import { User, Award, Zap, Bell, Smartphone, Shield, ChevronRight } from 'lucide-react';

export default function Profile() {
    const user = {
        name: 'Student Name',
        grade: 8,
        section: 'A',
        school: 'Government High School',
        points: 450,
        credits: 120,
        streak: 5,
    };

    return (
        <div className="fade-in">
            <h1 className="mb-4">Profile</h1>

            <div className="grid grid-2 gap-3">
                <div className="card">
                    <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--primary)',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            margin: '0 auto 1rem',
                        }}>
                            <User size={48} />
                        </div>
                        <h2 style={{ margin: 0 }}>{user.name}</h2>
                        <p className="text-secondary">Class {user.grade} - Section {user.section}</p>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>School</label>
                            <p className="text-secondary" style={{ margin: 0 }}>{user.school}</p>
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Language</label>
                            <select style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }}>
                                <option>English</option>
                                <option>हिंदी (Hindi)</option>
                                <option>தமிழ் (Tamil)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="card mb-3">
                        <h3 className="mb-3">Statistics</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Award size={20} color="var(--primary)" />
                                    <span>Total Points</span>
                                </div>
                                <strong style={{ color: 'var(--primary)' }}>{user.points}</strong>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Zap size={20} color="var(--secondary)" />
                                    <span>Knowledge Credits</span>
                                </div>
                                <strong style={{ color: 'var(--secondary)' }}>{user.credits}</strong>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Award size={20} color="var(--warning)" />
                                    <span>Current Streak</span>
                                </div>
                                <strong style={{ color: 'var(--warning)' }}>{user.streak} days</strong>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="mb-3">Settings</h3>
                        <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="flex items-center gap-2">
                                <Bell size={18} />
                                <span>Notifications</span>
                            </div>
                            <ChevronRight size={18} />
                        </button>
                        <button className="btn btn-secondary" style={{ width: '100%', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="flex items-center gap-2">
                                <Smartphone size={18} />
                                <span>Sync Devices</span>
                            </div>
                            <ChevronRight size={18} />
                        </button>
                        <button className="btn btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div className="flex items-center gap-2">
                                <Shield size={18} />
                                <span>Privacy</span>
                            </div>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
