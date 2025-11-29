import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Footprints, Flame, Calculator, Star, ChevronRight, Settings, Bell, Shield, Info, LogOut } from 'lucide-react-native';
export default function ProfileScreen() {
    return (_jsx(SafeAreaView, { style: styles.container, children: _jsxs(ScrollView, { style: styles.scrollView, children: [_jsxs(View, { style: styles.profileHeader, children: [_jsx(View, { style: styles.avatar, children: _jsx(User, { size: 40, color: "#6366f1" }) }), _jsx(Text, { style: styles.name, children: "Student Name" }), _jsx(Text, { style: styles.class, children: "Class 6 - Section A" })] }), _jsxs(View, { style: styles.statsGrid, children: [_jsxs(View, { style: styles.statBox, children: [_jsx(Text, { style: styles.statValue, children: "450" }), _jsx(Text, { style: styles.statLabel, children: "Points" })] }), _jsxs(View, { style: styles.statBox, children: [_jsx(Text, { style: styles.statValue, children: "7" }), _jsx(Text, { style: styles.statLabel, children: "Streak" })] }), _jsxs(View, { style: styles.statBox, children: [_jsx(Text, { style: styles.statValue, children: "12" }), _jsx(Text, { style: styles.statLabel, children: "Badges" })] }), _jsxs(View, { style: styles.statBox, children: [_jsx(Text, { style: styles.statValue, children: "85%" }), _jsx(Text, { style: styles.statLabel, children: "Progress" })] })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { style: styles.sectionTitle, children: "Achievements" }), _jsxs(View, { style: styles.badgeGrid, children: [_jsxs(View, { style: styles.badge, children: [_jsx(Footprints, { size: 32, color: "#2563eb", style: styles.badgeIcon }), _jsx(Text, { style: styles.badgeName, children: "First Steps" })] }), _jsxs(View, { style: styles.badge, children: [_jsx(Flame, { size: 32, color: "#ef4444", style: styles.badgeIcon }), _jsx(Text, { style: styles.badgeName, children: "Week Warrior" })] }), _jsxs(View, { style: styles.badge, children: [_jsx(Calculator, { size: 32, color: "#16a34a", style: styles.badgeIcon }), _jsx(Text, { style: styles.badgeName, children: "Math Master" })] }), _jsxs(View, { style: styles.badge, children: [_jsx(Star, { size: 32, color: "#eab308", style: styles.badgeIcon }), _jsx(Text, { style: styles.badgeName, children: "Star Learner" })] })] })] }), _jsxs(View, { style: styles.section, children: [_jsx(Text, { style: styles.sectionTitle, children: "Settings" }), _jsxs(TouchableOpacity, { style: styles.menuItem, children: [_jsxs(View, { style: styles.menuItemLeft, children: [_jsx(Settings, { size: 20, color: "#6b7280" }), _jsx(Text, { style: styles.menuItemText, children: "Language Preferences" })] }), _jsx(ChevronRight, { size: 20, color: "#9ca3af" })] }), _jsxs(TouchableOpacity, { style: styles.menuItem, children: [_jsxs(View, { style: styles.menuItemLeft, children: [_jsx(View, { style: [styles.iconContainer, { backgroundColor: '#dcfce7' }], children: _jsx(View, { style: [styles.statusDot, { backgroundColor: '#22c55e' }] }) }), _jsx(Text, { style: styles.menuItemText, children: "P.E.E.R Device: Connected" })] }), _jsx(ChevronRight, { size: 20, color: "#9ca3af" })] }), _jsxs(TouchableOpacity, { style: styles.menuItem, children: [_jsxs(View, { style: styles.menuItemLeft, children: [_jsx(Bell, { size: 20, color: "#6b7280" }), _jsx(Text, { style: styles.menuItemText, children: "Notifications" })] }), _jsx(ChevronRight, { size: 20, color: "#9ca3af" })] }), _jsxs(TouchableOpacity, { style: styles.menuItem, children: [_jsxs(View, { style: styles.menuItemLeft, children: [_jsx(Shield, { size: 20, color: "#6b7280" }), _jsx(Text, { style: styles.menuItemText, children: "Privacy" })] }), _jsx(ChevronRight, { size: 20, color: "#9ca3af" })] }), _jsxs(TouchableOpacity, { style: styles.menuItem, children: [_jsxs(View, { style: styles.menuItemLeft, children: [_jsx(Info, { size: 20, color: "#6b7280" }), _jsx(Text, { style: styles.menuItemText, children: "About" })] }), _jsx(ChevronRight, { size: 20, color: "#9ca3af" })] }), _jsx(TouchableOpacity, { style: [styles.menuItem, styles.logoutButton], children: _jsxs(View, { style: styles.menuItemLeft, children: [_jsx(LogOut, { size: 20, color: "#ef4444" }), _jsx(Text, { style: [styles.menuItemText, { color: '#ef4444' }], children: "Log Out" })] }) })] })] }) }));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
    },
    scrollView: {
        flex: 1,
    },
    profileHeader: {
        backgroundColor: '#6366f1',
        padding: 32,
        alignItems: 'center',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 4,
    },
    class: {
        fontSize: 14,
        color: '#e0e7ff',
        opacity: 0.9,
    },
    statsGrid: {
        flexDirection: 'row',
        padding: 16,
        gap: 12,
        marginTop: -20,
    },
    statBox: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 12,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    statValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 2,
    },
    statLabel: {
        fontSize: 11,
        color: '#6b7280',
        fontWeight: '500',
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
    badgeGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
    },
    badge: {
        width: '47%',
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    badgeIcon: {
        marginBottom: 8,
    },
    badgeName: {
        fontSize: 12,
        fontWeight: '600',
        color: '#1f2937',
        textAlign: 'center',
    },
    menuItem: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 12,
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 1,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    menuItemText: {
        fontSize: 16,
        color: '#1f2937',
        fontWeight: '500',
    },
    logoutButton: {
        marginTop: 12,
        backgroundColor: '#fef2f2',
    },
    iconContainer: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statusDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
});
