import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, UserCheck, TrendingUp, Award, AlertCircle, Trophy } from 'lucide-react';
import { MOCK_CLASS_ANALYTICS } from '@vidyut/shared';
export default function TeacherDashboard() {
    const { grade, section, totalStudents, activeStudents, avgMastery, topPerformers, needsAttention } = MOCK_CLASS_ANALYTICS;
    return (_jsxs("div", { className: "fade-in", children: [_jsx("h1", { className: "mb-3", children: "Teacher Dashboard" }), _jsxs("p", { className: "text-secondary mb-4", children: ["Class ", grade, " - Section ", section] }), _jsxs("div", { className: "grid grid-3 mb-4", children: [_jsx("div", { className: "card", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-secondary mb-1", children: "Total Students" }), _jsx("h2", { style: { color: 'var(--primary)', margin: 0 }, children: totalStudents })] }), _jsx(Users, { size: 32, color: "var(--primary)", style: { opacity: 0.5 } })] }) }), _jsx("div", { className: "card", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-secondary mb-1", children: "Active (7 days)" }), _jsx("h2", { style: { color: 'var(--secondary)', margin: 0 }, children: activeStudents })] }), _jsx(UserCheck, { size: 32, color: "var(--secondary)", style: { opacity: 0.5 } })] }) }), _jsx("div", { className: "card", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("p", { className: "text-secondary mb-1", children: "Avg Mastery" }), _jsxs("h2", { style: { color: 'var(--warning)', margin: 0 }, children: [avgMastery, "%"] })] }), _jsx(TrendingUp, { size: 32, color: "var(--warning)", style: { opacity: 0.5 } })] }) })] }), _jsxs("div", { className: "grid grid-2 gap-3", children: [_jsxs("div", { className: "card", children: [_jsx("h3", { className: "mb-3", children: "Top Performers" }), topPerformers.map((student, idx) => (_jsx("div", { style: {
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    backgroundColor: 'var(--background)',
                                    marginBottom: '0.5rem',
                                }, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Award, { size: 24, color: idx === 0 ? '#FFD700' : idx === 1 ? '#C0C0C0' : '#CD7F32' }), _jsxs("div", { children: [_jsx("h4", { style: { margin: 0, marginBottom: '0.25rem' }, children: student.name }), _jsxs("p", { className: "text-secondary", style: { fontSize: '0.875rem', margin: 0 }, children: [student.points, " points \u2022 ", student.mastery, "% mastery"] })] })] }), _jsxs("span", { style: { fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)' }, children: ["#", idx + 1] })] }) }, idx)))] }), _jsxs("div", { className: "card", children: [_jsx("h3", { className: "mb-3", children: "Needs Attention" }), needsAttention.map((student, idx) => (_jsxs("div", { style: {
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    backgroundColor: '#FEE2E2',
                                    marginBottom: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }, children: [_jsx(AlertCircle, { size: 24, color: "#991B1B" }), _jsxs("div", { children: [_jsx("h4", { style: { margin: 0, marginBottom: '0.25rem' }, children: student.name }), _jsxs("p", { style: { fontSize: '0.875rem', color: '#991B1B', margin: 0 }, children: [student.points, " points \u2022 ", student.mastery, "% mastery"] })] })] }, idx)))] })] }), _jsxs("div", { className: "card mt-4", children: [_jsx("h3", { className: "mb-3", children: "Mastery Heatmap" }), _jsx("p", { className: "text-secondary", children: "Visual representation of class performance across topics" }), _jsxs("div", { style: {
                            marginTop: '1rem',
                            padding: '2rem',
                            backgroundColor: 'var(--background)',
                            borderRadius: '0.75rem',
                            textAlign: 'center',
                        }, children: [_jsx(Trophy, { size: 48, color: "var(--text-secondary)", style: { opacity: 0.2, marginBottom: '1rem' } }), _jsx("p", { className: "text-secondary", children: "Heatmap visualization would go here" }), _jsx("p", { className: "text-secondary", style: { fontSize: '0.875rem' }, children: "(Requires chart library like recharts)" })] })] })] }));
}
