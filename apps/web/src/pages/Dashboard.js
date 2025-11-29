import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react';
import { defaultMockData } from '@vidyut/shared';
import { formatDistanceToNow } from 'date-fns';
const Dashboard = () => {
    const currentStudent = defaultMockData.currentStudent;
    const courses = defaultMockData.currentStudentCourses;
    const progress = defaultMockData.currentStudentProgress;
    // Calculate stats from mock data
    const coursesInProgress = courses.filter(c => c.progress > 0 && c.progress < 100).length;
    const totalHours = progress.reduce((sum, p) => sum + p.timeSpent / 60, 0);
    const earnedBadges = defaultMockData.currentStudentBadges.filter(b => b.earnedDate !== null).length;
    const avgScore = Math.round(progress.reduce((sum, p) => sum + p.averageScore, 0) / progress.length);
    const stats = [
        { label: 'Courses in Progress', value: coursesInProgress.toString(), icon: _jsx(BookOpen, { className: "text-blue-500", size: 24 }), change: '+1 this week' },
        { label: 'Hours Learned', value: totalHours.toFixed(1), icon: _jsx(Clock, { className: "text-green-500", size: 24 }), change: '+2.5 hrs' },
        { label: 'Achievements', value: earnedBadges.toString(), icon: _jsx(Award, { className: "text-yellow-500", size: 24 }), change: 'New badge!' },
        { label: 'Avg. Score', value: `${avgScore}%`, icon: _jsx(TrendingUp, { className: "text-purple-500", size: 24 }), change: '+5%' },
    ];
    // Get recent activities (last 3 courses accessed)
    const recentActivities = courses
        .sort((a, b) => b.lastAccessed.getTime() - a.lastAccessed.getTime())
        .slice(0, 3)
        .map(course => {
        const courseProgress = progress.find(p => p.courseId === course.id);
        return {
            subject: course.subject,
            title: course.title,
            description: `Completed ${courseProgress?.quizzesCompleted || 0} of ${courseProgress?.quizzesTotal || 10} quizzes with ${courseProgress?.averageScore || 0}% average`,
            time: formatDistanceToNow(course.lastAccessed, { addSuffix: true }),
            icon: course.subject.substring(0, 3).toUpperCase(),
        };
    });
    // Get recommended courses (those not started or low progress)
    const recommendedCourses = courses
        .filter(c => c.progress < 30)
        .slice(0, 3)
        .map(course => ({
        subject: course.subject,
        title: course.title,
        description: `${course.totalModules} modules • ${course.estimatedHours}h estimated`,
        icon: course.subject.substring(0, 3).toUpperCase(),
    }));
    return (_jsxs("div", { className: "space-y-6 animate-slide-in-right", children: [_jsxs("header", { className: "mb-8", children: [_jsxs("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white", children: ["Welcome back, ", currentStudent.name, "!"] }), _jsx("p", { className: "text-gray-500 dark:text-gray-400 mt-2", children: "Ready to continue your learning journey?" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, index) => (_jsxs("div", { className: "bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all duration-200", children: [_jsxs("div", { className: "flex justify-between items-start mb-4", children: [_jsx("div", { className: "p-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg", children: stat.icon }), _jsx("span", { className: "text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full", children: stat.change })] }), _jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-1", children: stat.value }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: stat.label })] }, index))) }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [_jsxs("div", { className: "bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900 dark:text-white", children: "Recent Activity" }), _jsx("div", { className: "space-y-4", children: recentActivities.map((activity, i) => (_jsxs("div", { className: "flex items-center gap-4 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-xl transition-colors cursor-pointer", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs", children: activity.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-medium text-gray-900 dark:text-white", children: activity.title }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: activity.description })] }), _jsx("span", { className: "text-xs text-gray-400", children: activity.time })] }, i))) })] }), _jsxs("div", { className: "bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700", children: [_jsx("h2", { className: "text-xl font-bold mb-4 text-gray-900 dark:text-white", children: "Recommended for You" }), _jsx("div", { className: "space-y-4", children: recommendedCourses.map((course, i) => (_jsxs("div", { className: "flex items-center gap-4 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-xl transition-colors cursor-pointer", children: [_jsx("div", { className: "w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs", children: course.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-medium text-gray-900 dark:text-white", children: course.title }), _jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: course.description })] }), _jsx("button", { className: "p-2 text-primary hover:bg-primary/10 rounded-full transition-colors", children: _jsx(BookOpen, { size: 20 }) })] }, i))) })] })] })] }));
};
export default Dashboard;
