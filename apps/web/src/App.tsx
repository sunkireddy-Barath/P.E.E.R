import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute, PublicRoute } from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Learn from './pages/Learn';
import Chat from './pages/Chat';
import TeacherDashboard from './pages/TeacherDashboard';
import Profile from './pages/Profile';
import Achievements from './pages/Achievements';
import Leaderboard from './pages/Leaderboard';
import Games from './pages/Games';
import Shop from './pages/Shop';
import Social from './pages/Social';
import DailyProgress from './pages/DailyProgress';
import Workshops from './pages/Workshops';
import ExamSchedule from './pages/ExamSchedule';
import VRGames from './pages/VRGames';
import Activities from './pages/Activities';
import EmotionTracker from './pages/EmotionTracker';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Layout from './components/Layout';

function App() {
    // In production, check authentication and user role
    const userRole: string = 'student'; // Mock role

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public Routes - accessible without authentication */}
                    <Route path="/login" element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/signup" element={
                        <PublicRoute>
                            <Signup />
                        </PublicRoute>
                    } />
                    <Route path="/forgot-password" element={
                        <PublicRoute>
                            <ForgotPassword />
                        </PublicRoute>
                    } />

                    {/* Protected Routes - require authentication */}
                    <Route path="/" element={
                        <ProtectedRoute>
                            <Layout />
                        </ProtectedRoute>
                    }>
                        <Route index element={<Navigate to="/dashboard" replace />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="learn" element={<Learn />} />
                        <Route path="learn/:contentId" element={<Learn />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="achievements" element={<Achievements />} />
                        <Route path="leaderboard" element={<Leaderboard />} />
                        <Route path="games" element={<Games />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="social" element={<Social />} />
                        <Route path="progress" element={<DailyProgress />} />
                        <Route path="workshops" element={<Workshops />} />
                        <Route path="exams" element={<ExamSchedule />} />
                        <Route path="vr-games" element={<VRGames />} />
                        <Route path="activities" element={<Activities />} />
                        <Route path="emotions" element={<EmotionTracker />} />
                        {userRole === 'teacher' && (
                            <Route path="teacher" element={<TeacherDashboard />} />
                        )}
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
