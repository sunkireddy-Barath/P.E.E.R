import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "fade-in", children: [_jsx("h1", { className: "mb-4", children: "Profile" }), _jsxs("div", { className: "grid grid-2 gap-3", children: [_jsxs("div", { className: "card", children: [_jsxs("div", { style: { textAlign: 'center', marginBottom: '1.5rem' }, children: [_jsx("div", { style: {
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
                                        }, children: _jsx(User, { size: 48 }) }), _jsx("h2", { style: { margin: 0 }, children: user.name }), _jsxs("p", { className: "text-secondary", children: ["Class ", user.grade, " - Section ", user.section] })] }), _jsxs("div", { style: { borderTop: '1px solid var(--border)', paddingTop: '1rem' }, children: [_jsxs("div", { style: { marginBottom: '1rem' }, children: [_jsx("label", { style: { display: 'block', marginBottom: '0.5rem', fontWeight: 500 }, children: "School" }), _jsx("p", { className: "text-secondary", style: { margin: 0 }, children: user.school })] }), _jsxs("div", { style: { marginBottom: '1rem' }, children: [_jsx("label", { style: { display: 'block', marginBottom: '0.5rem', fontWeight: 500 }, children: "Language" }), _jsxs("select", { style: { width: '100%', padding: '0.5rem', borderRadius: '0.5rem', border: '1px solid var(--border)' }, children: [_jsx("option", { children: "English" }), _jsx("option", { children: "\u0939\u093F\u0902\u0926\u0940 (Hindi)" }), _jsx("option", { children: "\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD (Tamil)" })] })] })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "card mb-3", children: [_jsx("h3", { className: "mb-3", children: "Statistics" }), _jsxs("div", { className: "flex flex-col gap-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Award, { size: 20, color: "var(--primary)" }), _jsx("span", { children: "Total Points" })] }), _jsx("strong", { style: { color: 'var(--primary)' }, children: user.points })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Zap, { size: 20, color: "var(--secondary)" }), _jsx("span", { children: "Knowledge Credits" })] }), _jsx("strong", { style: { color: 'var(--secondary)' }, children: user.credits })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Award, { size: 20, color: "var(--warning)" }), _jsx("span", { children: "Current Streak" })] }), _jsxs("strong", { style: { color: 'var(--warning)' }, children: [user.streak, " days"] })] })] })] }), _jsxs("div", { className: "card", children: [_jsx("h3", { className: "mb-3", children: "Settings" }), _jsxs("button", { className: "btn btn-secondary", style: { width: '100%', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Bell, { size: 18 }), _jsx("span", { children: "Notifications" })] }), _jsx(ChevronRight, { size: 18 })] }), _jsxs("button", { className: "btn btn-secondary", style: { width: '100%', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Smartphone, { size: 18 }), _jsx("span", { children: "Sync Devices" })] }), _jsx(ChevronRight, { size: 18 })] }), _jsxs("button", { className: "btn btn-secondary", style: { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Shield, { size: 18 }), _jsx("span", { children: "Privacy" })] }), _jsx(ChevronRight, { size: 18 })] })] })] })] })] }));
}
