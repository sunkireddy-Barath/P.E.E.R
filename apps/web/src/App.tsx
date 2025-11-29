import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Chat from './pages/Chat';
import TeacherDashboard from './pages/TeacherDashboard';
import Profile from './pages/Profile';
import Layout from './components/Layout';

function App() {
    // In production, check authentication and user role
    const userRole: string = 'student'; // Mock role

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="learn" element={<Learn />} />
                    <Route path="learn/:contentId" element={<Learn />} />
                    <Route path="chat" element={<Chat />} />
                    <Route path="profile" element={<Profile />} />
                    {userRole === 'teacher' && (
                        <Route path="teacher" element={<TeacherDashboard />} />
                    )}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
