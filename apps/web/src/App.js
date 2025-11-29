import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Chat from './pages/Chat';
import TeacherDashboard from './pages/TeacherDashboard';
import Profile from './pages/Profile';
import Layout from './components/Layout';
function App() {
    // In production, check authentication and user role
    const userRole = 'student'; // Mock role
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Navigate, { to: "/dashboard", replace: true }) }), _jsx(Route, { path: "dashboard", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "learn", element: _jsx(Learn, {}) }), _jsx(Route, { path: "learn/:contentId", element: _jsx(Learn, {}) }), _jsx(Route, { path: "chat", element: _jsx(Chat, {}) }), _jsx(Route, { path: "profile", element: _jsx(Profile, {}) }), userRole === 'teacher' && (_jsx(Route, { path: "teacher", element: _jsx(TeacherDashboard, {}) }))] }) }) }));
}
export default App;
