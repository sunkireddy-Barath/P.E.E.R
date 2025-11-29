import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users, MessageCircle, Heart, Search, Star } from 'lucide-react-native';
import { MOCK_TUTORS } from '@vidyut/shared';

export default function CommunityScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.title}>Community</Text>
                    <Text style={styles.subtitle}>Connect with fellow learners</Text>
                </View>

                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Search size={20} color="#9ca3af" />
                        <Text style={styles.searchPlaceholder}>Search groups or tutors...</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Top Tutors</Text>
                    {MOCK_TUTORS.map((tutor) => (
                        <View key={tutor.id} style={styles.groupCard}>
                            <View style={styles.groupHeader}>
                                <Image source={{ uri: tutor.avatar }} style={styles.avatar} />
                                <View style={styles.groupInfo}>
                                    <Text style={styles.groupName}>{tutor.name}</Text>
                                    <Text style={styles.groupMembers}>{tutor.specialty} • {tutor.reviews} reviews</Text>
                                    <View style={styles.ratingContainer}>
                                        <Star size={14} color="#eab308" fill="#eab308" />
                                        <Text style={styles.ratingText}>{tutor.rating}</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.joinButton}>
                                <Text style={styles.joinButtonText}>Chat</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Study Groups</Text>
                    <View style={styles.groupCard}>
                        <View style={styles.groupHeader}>
                            <View style={[styles.groupIconContainer, { backgroundColor: '#dbeafe' }]}>
                                <Users size={24} color="#2563eb" />
                            </View>
                            <View style={styles.groupInfo}>
                                <Text style={styles.groupName}>Math Enthusiasts</Text>
                                <Text style={styles.groupMembers}>124 members</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.joinButton}>
                            <Text style={styles.joinButtonText}>Join</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Recent Discussions</Text>
                    <View style={styles.discussionCard}>
                        <Text style={styles.discussionTitle}>How to solve quadratic equations?</Text>
                        <Text style={styles.discussionMeta}>Posted by Raj • 2 hours ago</Text>
                        <Text style={styles.discussionPreview}>
                            I'm struggling with the formula. Can someone explain the steps clearly?
                        </Text>
                        <View style={styles.discussionStats}>
                            <View style={styles.statItem}>
                                <MessageCircle size={16} color="#6b7280" />
                                <Text style={styles.statText}>12 replies</Text>
                            </View>
                            <View style={styles.statItem}>
                                <Heart size={16} color="#6b7280" />
                                <Text style={styles.statText}>8 likes</Text>
                            </View>
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
    searchContainer: {
        paddingHorizontal: 20,
        paddingBottom: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#f3f4f6',
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        padding: 12,
        borderRadius: 12,
        gap: 8,
    },
    searchPlaceholder: {
        color: '#9ca3af',
        fontSize: 16,
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 16,
    },
    groupCard: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    groupHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 12,
    },
    groupIconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#f3f4f6',
    },
    groupInfo: {
        flex: 1,
    },
    groupName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 2,
    },
    groupMembers: {
        fontSize: 12,
        color: '#6b7280',
        marginBottom: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    ratingText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1f2937',
    },
    joinButton: {
        backgroundColor: '#eef2ff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    joinButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6366f1',
    },
    discussionCard: {
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
    discussionTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1f2937',
        marginBottom: 8,
    },
    discussionMeta: {
        fontSize: 12,
        color: '#9ca3af',
        marginBottom: 8,
    },
    discussionPreview: {
        fontSize: 14,
        color: '#4b5563',
        lineHeight: 20,
        marginBottom: 16,
    },
    discussionStats: {
        flexDirection: 'row',
        gap: 16,
        borderTopWidth: 1,
        borderTopColor: '#f3f4f6',
        paddingTop: 12,
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    statText: {
        fontSize: 12,
        color: '#6b7280',
    },
});
