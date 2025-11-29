import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen, FlaskConical, Globe, ChevronRight, PlayCircle, Calculator } from 'lucide-react-native';
export default function CoursesScreen() {
    return (_jsx(SafeAreaView, { style: styles.container, children: _jsxs(ScrollView, { style: styles.scrollView, children: [_jsxs(View, { style: styles.header, children: [_jsx(Text, { style: styles.title, children: "Courses" }), _jsx(Text, { style: styles.subtitle, children: "Browse all available courses" })] }), _jsxs(View, { style: styles.coursesContainer, children: [_jsxs(View, { style: styles.courseCard, children: [_jsxs(View, { style: styles.courseHeader, children: [_jsx(View, { style: [styles.iconContainer, { backgroundColor: '#dbeafe' }], children: _jsx(Calculator, { size: 24, color: "#2563eb" }) }), _jsx(View, { style: styles.courseBadge, children: _jsx(Text, { style: styles.courseBadgeText, children: "Class 6" }) })] }), _jsx(Text, { style: styles.courseTitle, children: "Mathematics Fundamentals" }), _jsx(Text, { style: styles.courseDescription, children: "Master the basics of mathematics including algebra, geometry, and arithmetic" }), _jsxs(View, { style: styles.courseFooter, children: [_jsx(Text, { style: styles.courseStats, children: "12 Chapters \u2022 45 Lessons" }), _jsxs(TouchableOpacity, { style: styles.enrollButton, children: [_jsx(Text, { style: styles.enrollButtonText, children: "Continue" }), _jsx(ChevronRight, { size: 16, color: "#ffffff" })] })] })] }), _jsxs(View, { style: styles.courseCard, children: [_jsxs(View, { style: styles.courseHeader, children: [_jsx(View, { style: [styles.iconContainer, { backgroundColor: '#dcfce7' }], children: _jsx(FlaskConical, { size: 24, color: "#16a34a" }) }), _jsx(View, { style: styles.courseBadge, children: _jsx(Text, { style: styles.courseBadgeText, children: "Class 6" }) })] }), _jsx(Text, { style: styles.courseTitle, children: "Science Exploration" }), _jsx(Text, { style: styles.courseDescription, children: "Discover the wonders of science through interactive lessons and experiments" }), _jsxs(View, { style: styles.courseFooter, children: [_jsx(Text, { style: styles.courseStats, children: "10 Chapters \u2022 38 Lessons" }), _jsxs(TouchableOpacity, { style: styles.enrollButton, children: [_jsx(Text, { style: styles.enrollButtonText, children: "Continue" }), _jsx(ChevronRight, { size: 16, color: "#ffffff" })] })] })] }), _jsxs(View, { style: styles.courseCard, children: [_jsxs(View, { style: styles.courseHeader, children: [_jsx(View, { style: [styles.iconContainer, { backgroundColor: '#fef3c7' }], children: _jsx(BookOpen, { size: 24, color: "#d97706" }) }), _jsx(View, { style: styles.courseBadge, children: _jsx(Text, { style: styles.courseBadgeText, children: "Class 6" }) })] }), _jsx(Text, { style: styles.courseTitle, children: "English Language" }), _jsx(Text, { style: styles.courseDescription, children: "Improve your reading, writing, and communication skills" }), _jsxs(View, { style: styles.courseFooter, children: [_jsx(Text, { style: styles.courseStats, children: "8 Chapters \u2022 32 Lessons" }), _jsxs(TouchableOpacity, { style: styles.enrollButton, children: [_jsx(Text, { style: styles.enrollButtonText, children: "Start" }), _jsx(PlayCircle, { size: 16, color: "#ffffff" })] })] })] }), _jsxs(View, { style: styles.courseCard, children: [_jsxs(View, { style: styles.courseHeader, children: [_jsx(View, { style: [styles.iconContainer, { backgroundColor: '#fce7f3' }], children: _jsx(Globe, { size: 24, color: "#db2777" }) }), _jsx(View, { style: styles.courseBadge, children: _jsx(Text, { style: styles.courseBadgeText, children: "Class 6" }) })] }), _jsx(Text, { style: styles.courseTitle, children: "Social Studies" }), _jsx(Text, { style: styles.courseDescription, children: "Learn about history, geography, and civics" }), _jsxs(View, { style: styles.courseFooter, children: [_jsx(Text, { style: styles.courseStats, children: "9 Chapters \u2022 28 Lessons" }), _jsxs(TouchableOpacity, { style: styles.enrollButton, children: [_jsx(Text, { style: styles.enrollButtonText, children: "Start" }), _jsx(PlayCircle, { size: 16, color: "#ffffff" })] })] })] })] })] }) }));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    scrollView: {
        flex: 1,
    },
    header: {
        padding: 24,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        color: '#6b7280',
    },
    coursesContainer: {
        padding: 16,
    },
    courseCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    courseHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    courseBadge: {
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 12,
    },
    courseBadgeText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#4b5563',
    },
    courseTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 8,
    },
    courseDescription: {
        fontSize: 14,
        color: '#6b7280',
        lineHeight: 20,
        marginBottom: 16,
    },
    courseFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
        paddingTop: 16,
    },
    courseStats: {
        fontSize: 12,
        color: '#9ca3af',
        fontWeight: '500',
    },
    enrollButton: {
        backgroundColor: '#6366f1',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    enrollButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ffffff',
    },
});
