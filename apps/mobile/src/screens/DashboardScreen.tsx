import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Flame, Star, CheckCircle, BookOpen, Clock, Activity as ActivityIcon } from 'lucide-react-native';
import { MOCK_USER, MOCK_COURSES, MOCK_ACTIVITIES } from '@vidyut/shared';

export default function DashboardScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.greeting}>Welcome back, {MOCK_USER.name.split(' ')[0]}!</Text>
                    <Text style={styles.subtitle}>Continue your learning journey</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Flame size={24} color="#ef4444" style={styles.statIcon} />
                        <Text style={styles.statValue}>{MOCK_USER.streak}</Text>
                        <Text style={styles.statLabel}>Day Streak</Text>
                    </View>
                    <View style={styles.statCard}>
                        <Star size={24} color="#eab308" style={styles.statIcon} />
                        <Text style={styles.statValue}>{MOCK_USER.points}</Text>
                        <Text style={styles.statLabel}>Total Points</Text>
                    </View>
                    <View style={styles.statCard}>
                        <CheckCircle size={24} color="#22c55e" style={styles.statIcon} />
                        <Text style={styles.statValue}>{MOCK_USER.completedLessons}</Text>
                        <Text style={styles.statLabel}>Completed</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Continue Learning</Text>
                    {MOCK_COURSES.slice(0, 2).map((course) => (
                        <TouchableOpacity key={course.id} style={styles.card}>
                            <View style={styles.cardHeader}>
                                <BookOpen size={24} color="#6366f1" />
                                <View style={styles.cardHeaderText}>
                                    <Text style={styles.cardTitle}>{course.title}</Text>
                                    <Text style={styles.cardSubtitle}>{course.description.substring(0, 40)}...</Text>
                                </View>
                            </View>
                            <View style={styles.progressBar}>
                                <View style={[styles.progressFill, { width: `${course.progress}%` }]} />
                            </View>
                            <Text style={styles.progressText}>{course.progress}% Complete</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Activity</Text>
                    {MOCK_ACTIVITIES.map((activity) => (
                        <View key={activity.id} style={styles.activityItem}>
                            <View style={styles.activityIconContainer}>
                                {activity.status === 'completed' ? (
                                    <CheckCircle size={20} color="#22c55e" />
                                ) : (
                                    <Clock size={20} color="#f59e0b" />
                                )}
                            </View>
                            <View style={styles.activityContent}>
                                <Text style={styles.activityTitle}>{activity.title}</Text>
                                <Text style={styles.activityTime}>
                                    {new Date(activity.timestamp).toLocaleDateString()}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.fab}>
                <ActivityIcon size={24} color="#ffffff" />
                <Text style={styles.fabText}>Ask AI</Text>
            </TouchableOpacity>
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
    fab: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        backgroundColor: '#6366f1',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 32,
        shadowColor: '#6366f1',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        gap: 8,
    },
    fabText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    header: {
        padding: 24,
        paddingBottom: 48,
        backgroundColor: '#6366f1',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#e0e7ff',
        opacity: 0.9,
    },
    statsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 12,
        marginTop: -32,
    },
    statCard: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
    },
    statIcon: {
        marginBottom: 8,
        padding: 8,
        backgroundColor: '#f3f4f6',
        borderRadius: 12,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 2,
    },
    statLabel: {
        fontSize: 11,
        color: '#6b7280',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    section: {
        padding: 24,
        paddingBottom: 0,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#f3f4f6',
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 16,
    },
    cardHeaderText: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#6b7280',
    },
    progressBar: {
        height: 8,
        backgroundColor: '#f3f4f6',
        borderRadius: 4,
        marginBottom: 8,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#6366f1',
        borderRadius: 4,
    },
    progressText: {
        fontSize: 12,
        color: '#6b7280',
        textAlign: 'right',
        fontWeight: '500',
    },
    activityItem: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: '#f3f4f6',
    },
    activityIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#f3f4f6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityContent: {
        flex: 1,
    },
    activityTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 4,
    },
    activityTime: {
        fontSize: 12,
        color: '#9ca3af',
    },
});
