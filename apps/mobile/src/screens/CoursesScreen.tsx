import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BookOpen, FlaskConical, Globe, ChevronRight, PlayCircle, Calculator } from 'lucide-react-native';

export default function CoursesScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.title}>Courses</Text>
                    <Text style={styles.subtitle}>Browse all available courses</Text>
                </View>

                <View style={styles.coursesContainer}>
                    <View style={styles.courseCard}>
                        <View style={styles.courseHeader}>
                            <View style={[styles.iconContainer, { backgroundColor: '#dbeafe' }]}>
                                <Calculator size={24} color="#2563eb" />
                            </View>
                            <View style={styles.courseBadge}>
                                <Text style={styles.courseBadgeText}>Class 6</Text>
                            </View>
                        </View>
                        <Text style={styles.courseTitle}>Mathematics Fundamentals</Text>
                        <Text style={styles.courseDescription}>
                            Master the basics of mathematics including algebra, geometry, and arithmetic
                        </Text>
                        <View style={styles.courseFooter}>
                            <Text style={styles.courseStats}>12 Chapters • 45 Lessons</Text>
                            <TouchableOpacity style={styles.enrollButton}>
                                <Text style={styles.enrollButtonText}>Continue</Text>
                                <ChevronRight size={16} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.courseCard}>
                        <View style={styles.courseHeader}>
                            <View style={[styles.iconContainer, { backgroundColor: '#dcfce7' }]}>
                                <FlaskConical size={24} color="#16a34a" />
                            </View>
                            <View style={styles.courseBadge}>
                                <Text style={styles.courseBadgeText}>Class 6</Text>
                            </View>
                        </View>
                        <Text style={styles.courseTitle}>Science Exploration</Text>
                        <Text style={styles.courseDescription}>
                            Discover the wonders of science through interactive lessons and experiments
                        </Text>
                        <View style={styles.courseFooter}>
                            <Text style={styles.courseStats}>10 Chapters • 38 Lessons</Text>
                            <TouchableOpacity style={styles.enrollButton}>
                                <Text style={styles.enrollButtonText}>Continue</Text>
                                <ChevronRight size={16} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.courseCard}>
                        <View style={styles.courseHeader}>
                            <View style={[styles.iconContainer, { backgroundColor: '#fef3c7' }]}>
                                <BookOpen size={24} color="#d97706" />
                            </View>
                            <View style={styles.courseBadge}>
                                <Text style={styles.courseBadgeText}>Class 6</Text>
                            </View>
                        </View>
                        <Text style={styles.courseTitle}>English Language</Text>
                        <Text style={styles.courseDescription}>
                            Improve your reading, writing, and communication skills
                        </Text>
                        <View style={styles.courseFooter}>
                            <Text style={styles.courseStats}>8 Chapters • 32 Lessons</Text>
                            <TouchableOpacity style={styles.enrollButton}>
                                <Text style={styles.enrollButtonText}>Start</Text>
                                <PlayCircle size={16} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.courseCard}>
                        <View style={styles.courseHeader}>
                            <View style={[styles.iconContainer, { backgroundColor: '#fce7f3' }]}>
                                <Globe size={24} color="#db2777" />
                            </View>
                            <View style={styles.courseBadge}>
                                <Text style={styles.courseBadgeText}>Class 6</Text>
                            </View>
                        </View>
                        <Text style={styles.courseTitle}>Social Studies</Text>
                        <Text style={styles.courseDescription}>
                            Learn about history, geography, and civics
                        </Text>
                        <View style={styles.courseFooter}>
                            <Text style={styles.courseStats}>9 Chapters • 28 Lessons</Text>
                            <TouchableOpacity style={styles.enrollButton}>
                                <Text style={styles.enrollButtonText}>Start</Text>
                                <PlayCircle size={16} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
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
