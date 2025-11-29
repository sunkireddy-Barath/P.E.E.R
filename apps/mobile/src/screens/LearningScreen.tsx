import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calculator, FlaskConical, BookOpen, Globe, Clock, PlayCircle } from 'lucide-react-native';

export default function LearningScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <Text style={styles.title}>Learning</Text>
                    <Text style={styles.subtitle}>Choose a subject to continue</Text>
                </View>

                <View style={styles.subjectsContainer}>
                    <TouchableOpacity style={[styles.subjectCard, { backgroundColor: '#dbeafe' }]}>
                        <Calculator size={40} color="#2563eb" style={styles.subjectIcon} />
                        <Text style={styles.subjectTitle}>Mathematics</Text>
                        <Text style={styles.subjectProgress}>8/12 chapters</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.subjectCard, { backgroundColor: '#dcfce7' }]}>
                        <FlaskConical size={40} color="#16a34a" style={styles.subjectIcon} />
                        <Text style={styles.subjectTitle}>Science</Text>
                        <Text style={styles.subjectProgress}>5/10 chapters</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.subjectCard, { backgroundColor: '#fef3c7' }]}>
                        <BookOpen size={40} color="#d97706" style={styles.subjectIcon} />
                        <Text style={styles.subjectTitle}>English</Text>
                        <Text style={styles.subjectProgress}>6/8 chapters</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.subjectCard, { backgroundColor: '#fce7f3' }]}>
                        <Globe size={40} color="#db2777" style={styles.subjectIcon} />
                        <Text style={styles.subjectTitle}>Social Studies</Text>
                        <Text style={styles.subjectProgress}>3/9 chapters</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recommended for You</Text>
                    <View style={styles.lessonCard}>
                        <View style={styles.lessonHeader}>
                            <Text style={[styles.lessonBadge, { color: '#2563eb', backgroundColor: '#dbeafe' }]}>Mathematics</Text>
                            <View style={styles.durationContainer}>
                                <Clock size={14} color="#9ca3af" />
                                <Text style={styles.lessonDuration}>15 min</Text>
                            </View>
                        </View>
                        <Text style={styles.lessonTitle}>Understanding Fractions</Text>
                        <Text style={styles.lessonDescription}>
                            Learn the basics of fractions and how to add them with visual examples.
                        </Text>
                        <TouchableOpacity style={styles.startButton}>
                            <PlayCircle size={20} color="#ffffff" />
                            <Text style={styles.startButtonText}>Start Lesson</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lessonCard}>
                        <View style={styles.lessonHeader}>
                            <Text style={[styles.lessonBadge, { color: '#16a34a', backgroundColor: '#dcfce7' }]}>Science</Text>
                            <View style={styles.durationContainer}>
                                <Clock size={14} color="#9ca3af" />
                                <Text style={styles.lessonDuration}>20 min</Text>
                            </View>
                        </View>
                        <Text style={styles.lessonTitle}>The Water Cycle</Text>
                        <Text style={styles.lessonDescription}>
                            Explore how water moves through our environment in this interactive lesson.
                        </Text>
                        <TouchableOpacity style={styles.startButton}>
                            <PlayCircle size={20} color="#ffffff" />
                            <Text style={styles.startButtonText}>Start Lesson</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lessonCard}>
                        <View style={styles.lessonHeader}>
                            <Text style={[styles.lessonBadge, { color: '#d97706', backgroundColor: '#fef3c7' }]}>English</Text>
                            <View style={styles.durationContainer}>
                                <Clock size={14} color="#9ca3af" />
                                <Text style={styles.lessonDuration}>12 min</Text>
                            </View>
                        </View>
                        <Text style={styles.lessonTitle}>Parts of Speech: Verbs</Text>
                        <Text style={styles.lessonDescription}>
                            Master action words and helping verbs with fun exercises.
                        </Text>
                        <TouchableOpacity style={styles.startButton}>
                            <PlayCircle size={20} color="#ffffff" />
                            <Text style={styles.startButtonText}>Start Lesson</Text>
                        </TouchableOpacity>
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
