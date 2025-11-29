import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calculator, FlaskConical, BookOpen, Globe, Clock, PlayCircle } from 'lucide-react-native';
export default function LearningScreen() {
    return (_jsx(SafeAreaView, { style: styles.container, children: _jsxs(ScrollView, { style: styles.scrollView, children: [_jsxs(View, { style: styles.header, children: [_jsx(Text, { style: styles.title, children: "Learning" }), _jsx(Text, { style: styles.subtitle, children: "Choose a subject to continue" })] }), _jsxs(View, { style: styles.subjectsContainer, children: [_jsxs(TouchableOpacity, { style: [styles.subjectCard, { backgroundColor: '#dbeafe' }], children: [_jsx(Calculator, { size: 40, color: "#2563eb", style: styles.subjectIcon }), _jsx(Text, { style: styles.subjectTitle, children: "Mathematics" }), _jsx(Text, { style: styles.subjectProgress, children: "8/12 chapters" })] }), _jsxs(TouchableOpacity, { style: [styles.subjectCard, { backgroundColor: '#dcfce7' }], children: [_jsx(FlaskConical, { size: 40, color: "#16a34a", style: styles.subjectIcon }), _jsx(Text, { style: styles.subjectTitle, children: "Science" }), _jsx(Text, { style: styles.subjectProgress, children: "5/10 chapters" })] }), _jsxs(TouchableOpacity, { style: [styles.subjectCard, { backgroundColor: '#fef3c7' }], children: [_jsx(BookOpen, { size: 40, color: "#d97706", style: styles.subjectIcon }), _jsx(Text, { style: styles.subjectTitle, children: "English" }), _jsx(Text, { style: styles.subjectProgress, children: "6/8 chapters" })] }), _jsxs(TouchableOpacity, { style: [styles.subjectCard, { backgroundColor: '#fce7f3' }], children: [_jsx(Globe, { size: 40, color: "#db2777", style: styles.subjectIcon }), _jsx(Text, { style: styles.subjectTitle, children: "Social Studies" }), _jsx(Text, { style: styles.subjectProgress, children: "3/9 chapters" })] })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { style: styles.sectionTitle, children: "Recommended for You" }), _jsxs(View, { style: styles.lessonCard, children: [_jsxs(View, { style: styles.lessonHeader, children: [_jsx(Text, { style: [styles.lessonBadge, { color: '#2563eb', backgroundColor: '#dbeafe' }], children: "Mathematics" }), _jsxs(View, { style: styles.durationContainer, children: [_jsx(Clock, { size: 14, color: "#9ca3af" }), _jsx(Text, { style: styles.lessonDuration, children: "15 min" })] })] }), _jsx(Text, { style: styles.lessonTitle, children: "Understanding Fractions" }), _jsx(Text, { style: styles.lessonDescription, children: "Learn the basics of fractions and how to add them with visual examples." }), _jsxs(TouchableOpacity, { style: styles.startButton, children: [_jsx(PlayCircle, { size: 20, color: "#ffffff" }), _jsx(Text, { style: styles.startButtonText, children: "Start Lesson" })] })] }), _jsxs(View, { style: styles.lessonCard, children: [_jsxs(View, { style: styles.lessonHeader, children: [_jsx(Text, { style: [styles.lessonBadge, { color: '#16a34a', backgroundColor: '#dcfce7' }], children: "Science" }), _jsxs(View, { style: styles.durationContainer, children: [_jsx(Clock, { size: 14, color: "#9ca3af" }), _jsx(Text, { style: styles.lessonDuration, children: "20 min" })] })] }), _jsx(Text, { style: styles.lessonTitle, children: "The Water Cycle" }), _jsx(Text, { style: styles.lessonDescription, children: "Explore how water moves through our environment in this interactive lesson." }), _jsxs(TouchableOpacity, { style: styles.startButton, children: [_jsx(PlayCircle, { size: 20, color: "#ffffff" }), _jsx(Text, { style: styles.startButtonText, children: "Start Lesson" })] })] }), _jsxs(View, { style: styles.lessonCard, children: [_jsxs(View, { style: styles.lessonHeader, children: [_jsx(Text, { style: [styles.lessonBadge, { color: '#d97706', backgroundColor: '#fef3c7' }], children: "English" }), _jsxs(View, { style: styles.durationContainer, children: [_jsx(Clock, { size: 14, color: "#9ca3af" }), _jsx(Text, { style: styles.lessonDuration, children: "12 min" })] })] }), _jsx(Text, { style: styles.lessonTitle, children: "Parts of Speech: Verbs" }), _jsx(Text, { style: styles.lessonDescription, children: "Master action words and helping verbs with fun exercises." }), _jsxs(TouchableOpacity, { style: styles.startButton, children: [_jsx(PlayCircle, { size: 20, color: "#ffffff" }), _jsx(Text, { style: styles.startButtonText, children: "Start Lesson" })] })] })] })] }) }));
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
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
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
    subjectsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 12,
        gap: 12,
    },
    subjectCard: {
        width: '47%',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    subjectIcon: {
        marginBottom: 12,
    },
    subjectTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 4,
    },
    subjectProgress: {
        fontSize: 12,
        color: '#6b7280',
    },
    section: {
        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 16,
    },
    lessonCard: {
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
    lessonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    lessonBadge: {
        fontSize: 12,
        fontWeight: '600',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        overflow: 'hidden',
    },
    durationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    lessonDuration: {
        fontSize: 12,
        color: '#9ca3af',
    },
    lessonTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 8,
    },
    lessonDescription: {
        fontSize: 14,
        color: '#6b7280',
        lineHeight: 20,
        marginBottom: 16,
    },
    startButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6366f1',
        paddingVertical: 10,
        borderRadius: 10,
        gap: 8,
    },
    startButtonText: {
        color: '#ffffff',
        fontWeight: '600',
        fontSize: 14,
    },
});
