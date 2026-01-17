import { BookOpen, Clock, Award, TrendingUp } from 'lucide-react';
import { defaultMockData } from '../lib/mockData';
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
        { label: 'Courses in Progress', value: coursesInProgress.toString(), icon: <BookOpen className="text-blue-500" size={24} />, change: '+1 this week' },
        { label: 'Hours Learned', value: totalHours.toFixed(1), icon: <Clock className="text-green-500" size={24} />, change: '+2.5 hrs' },
        { label: 'Achievements', value: earnedBadges.toString(), icon: <Award className="text-yellow-500" size={24} />, change: 'New badge!' },
        { label: 'Avg. Score', value: `${avgScore}%`, icon: <TrendingUp className="text-purple-500" size={24} />, change: '+5%' },
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

    return (
        <div className="space-y-6 animate-slide-in-right">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome back, {currentStudent.name}!</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Ready to continue your learning journey?</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all duration-200">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-neutral-50 dark:bg-neutral-700 rounded-lg">
                                {stat.icon}
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recent Activity</h2>
                    <div className="space-y-4">
                        {recentActivities.map((activity, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-xl transition-colors cursor-pointer">
                                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">
                                    {activity.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 dark:text-white">{activity.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
                                </div>
                                <span className="text-xs text-gray-400">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Recommended for You</h2>
                    <div className="space-y-4">
                        {recommendedCourses.map((course, i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 rounded-xl transition-colors cursor-pointer">
                                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold text-xs">
                                    {course.icon}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium text-gray-900 dark:text-white">{course.title}</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                                </div>
                                <button className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors">
                                    <BookOpen size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
