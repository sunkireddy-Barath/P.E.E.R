import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Users, MessageCircle, Heart, Search, Star } from 'lucide-react-native';
import { MOCK_TUTORS } from '@vidyut/shared';
export default function CommunityScreen() {
    return (_jsx(SafeAreaView, { style: styles.container, children: _jsxs(ScrollView, { style: styles.scrollView, showsVerticalScrollIndicator: false, children: [_jsxs(View, { style: styles.header, children: [_jsx(Text, { style: styles.title, children: "Community" }), _jsx(Text, { style: styles.subtitle, children: "Connect with fellow learners" })] }), _jsx(View, { style: styles.searchContainer, children: _jsxs(View, { style: styles.searchBar, children: [_jsx(Search, { size: 20, color: "#9ca3af" }), _jsx(Text, { style: styles.searchPlaceholder, children: "Search groups or tutors..." })] }) }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { style: styles.sectionTitle, children: "Top Tutors" }), MOCK_TUTORS.map((tutor) => (_jsxs(View, { style: styles.groupCard, children: [_jsxs(View, { style: styles.groupHeader, children: [_jsx(Image, { source: { uri: tutor.avatar }, style: styles.avatar }), _jsxs(View, { style: styles.groupInfo, children: [_jsx(Text, { style: styles.groupName, children: tutor.name }), _jsxs(Text, { style: styles.groupMembers, children: [tutor.specialty, " \u2022 ", tutor.reviews, " reviews"] }), _jsxs(View, { style: styles.ratingContainer, children: [_jsx(Star, { size: 14, color: "#eab308", fill: "#eab308" }), _jsx(Text, { style: styles.ratingText, children: tutor.rating })] })] })] }), _jsx(TouchableOpacity, { style: styles.joinButton, children: _jsx(Text, { style: styles.joinButtonText, children: "Chat" }) })] }, tutor.id)))] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { style: styles.sectionTitle, children: "Study Groups" }), _jsxs(View, { style: styles.groupCard, children: [_jsxs(View, { style: styles.groupHeader, children: [_jsx(View, { style: [styles.groupIconContainer, { backgroundColor: '#dbeafe' }], children: _jsx(Users, { size: 24, color: "#2563eb" }) }), _jsxs(View, { style: styles.groupInfo, children: [_jsx(Text, { style: styles.groupName, children: "Math Enthusiasts" }), _jsx(Text, { style: styles.groupMembers, children: "124 members" })] })] }), _jsx(TouchableOpacity, { style: styles.joinButton, children: _jsx(Text, { style: styles.joinButtonText, children: "Join" }) })] })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { style: styles.sectionTitle, children: "Recent Discussions" }), _jsxs(View, { style: styles.discussionCard, children: [_jsx(Text, { style: styles.discussionTitle, children: "How to solve quadratic equations?" }), _jsx(Text, { style: styles.discussionMeta, children: "Posted by Raj \u2022 2 hours ago" }), _jsx(Text, { style: styles.discussionPreview, children: "I'm struggling with the formula. Can someone explain the steps clearly?" }), _jsxs(View, { style: styles.discussionStats, children: [_jsxs(View, { style: styles.statItem, children: [_jsx(MessageCircle, { size: 16, color: "#6b7280" }), _jsx(Text, { style: styles.statText, children: "12 replies" })] }), _jsxs(View, { style: styles.statItem, children: [_jsx(Heart, { size: 16, color: "#6b7280" }), _jsx(Text, { style: styles.statText, children: "8 likes" })] })] })] })] })] }) }));
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
