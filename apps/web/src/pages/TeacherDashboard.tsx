import { Users, UserCheck, TrendingUp, Award, AlertCircle, Trophy } from 'lucide-react';
import { MOCK_CLASS_ANALYTICS } from '@vidyut/shared';

export default function TeacherDashboard() {
    const { grade, section, totalStudents, activeStudents, avgMastery, topPerformers, needsAttention } = MOCK_CLASS_ANALYTICS;

    return (
        <div className="fade-in">
            <h1 className="mb-3">Teacher Dashboard</h1>
            <p className="text-secondary mb-4">Class {grade} - Section {section}</p>

            <div className="grid grid-3 mb-4">
                <div className="card">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-secondary mb-1">Total Students</p>
                            <h2 style={{ color: 'var(--primary)', margin: 0 }}>{totalStudents}</h2>
                        </div>
                        <Users size={32} color="var(--primary)" style={{ opacity: 0.5 }} />
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-secondary mb-1">Active (7 days)</p>
                            <h2 style={{ color: 'var(--secondary)', margin: 0 }}>{activeStudents}</h2>
                        </div>
                        <UserCheck size={32} color="var(--secondary)" style={{ opacity: 0.5 }} />
                    </div>
                </div>
                <div className="card">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-secondary mb-1">Avg Mastery</p>
                            <h2 style={{ color: 'var(--warning)', margin: 0 }}>{avgMastery}%</h2>
                        </div>
                        <TrendingUp size={32} color="var(--warning)" style={{ opacity: 0.5 }} />
                    </div>
                </div>
            </div>

            <div className="grid grid-2 gap-3">
                <div className="card">
                    <h3 className="mb-3">Top Performers</h3>
                    {topPerformers.map((student, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                backgroundColor: 'var(--background)',
                                marginBottom: '0.5rem',
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Award size={24} color={idx === 0 ? '#FFD700' : idx === 1 ? '#C0C0C0' : '#CD7F32'} />
                                    <div>
                                        <h4 style={{ margin: 0, marginBottom: '0.25rem' }}>{student.name}</h4>
                                        <p className="text-secondary" style={{ fontSize: '0.875rem', margin: 0 }}>
                                            {student.points} points • {student.mastery}% mastery
                                        </p>
                                    </div>
                                </div>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)' }}>
                                    #{idx + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card">
                    <h3 className="mb-3">Needs Attention</h3>
                    {needsAttention.map((student, idx) => (
                        <div
                            key={idx}
                            style={{
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                backgroundColor: '#FEE2E2',
                                marginBottom: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                        >
                            <AlertCircle size={24} color="#991B1B" />
                            <div>
                                <h4 style={{ margin: 0, marginBottom: '0.25rem' }}>{student.name}</h4>
                                <p style={{ fontSize: '0.875rem', color: '#991B1B', margin: 0 }}>
                                    {student.points} points • {student.mastery}% mastery
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card mt-4">
                <h3 className="mb-3">Mastery Heatmap</h3>
                <p className="text-secondary">Visual representation of class performance across topics</p>
                <div style={{
                    marginTop: '1rem',
                    padding: '2rem',
                    backgroundColor: 'var(--background)',
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                }}>
                    <Trophy size={48} color="var(--text-secondary)" style={{ opacity: 0.2, marginBottom: '1rem' }} />
                    <p className="text-secondary">Heatmap visualization would go here</p>
                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>
                        (Requires chart library like recharts)
                    </p>
                </div>
            </div>
        </div>
    );
}
