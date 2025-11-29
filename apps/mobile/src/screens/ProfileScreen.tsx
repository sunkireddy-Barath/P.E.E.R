import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Footprints, Flame, Calculator, Star, ChevronRight, Settings, Bell, Shield, Info, LogOut } from 'lucide-react-native';

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.profileHeader}>
                    <View style={styles.avatar}>
                        <User size={40} color="#6366f1" />
                    </View>
                    <Text style={styles.name}>Student Name</Text>
                    <Text style={styles.class}>Class 6 - Section A</Text>
                </View>

                <View style={styles.statsGrid}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>450</Text>
                        <Text style={styles.statLabel}>Points</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>7</Text>
                        <Text style={styles.statLabel}>Streak</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statLabel}>Badges</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>85%</Text>
                        <Text style={styles.statLabel}>Progress</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Achievements</Text>
                    <View style={styles.badgeGrid}>
                        <View style={styles.badge}>
                            <Footprints size={32} color="#2563eb" style={styles.badgeIcon} />
                            <Text style={styles.badgeName}>First Steps</Text>
                        </View>
                        <View style={styles.badge}>
                            <Flame size={32} color="#ef4444" style={styles.badgeIcon} />
                            <Text style={styles.badgeName}>Week Warrior</Text>
                        </View>
                        <View style={styles.badge}>
                            <Calculator size={32} color="#16a34a" style={styles.badgeIcon} />
                            <Text style={styles.badgeName}>Math Master</Text>
                        </View>
                        <View style={styles.badge}>
                            <Star size={32} color="#eab308" style={styles.badgeIcon} />
                            <Text style={styles.badgeName}>Star Learner</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Settings</Text>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Settings size={20} color="#6b7280" />
                            <Text style={styles.menuItemText}>Language Preferences</Text>
                        </View>
                        <ChevronRight size={20} color="#9ca3af" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <View style={[styles.iconContainer, { backgroundColor: '#dcfce7' }]}>
                                <View style={[styles.statusDot, { backgroundColor: '#22c55e' }]} />
                            </View>
                            <Text style={styles.menuItemText}>P.E.E.R Device: Connected</Text>
                        </View>
                        <ChevronRight size={20} color="#9ca3af" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Bell size={20} color="#6b7280" />
                            <Text style={styles.menuItemText}>Notifications</Text>
                        </View>
                        <ChevronRight size={20} color="#9ca3af" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Shield size={20} color="#6b7280" />
                            <Text style={styles.menuItemText}>Privacy</Text>
                        </View>
                        <ChevronRight size={20} color="#9ca3af" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <Info size={20} color="#6b7280" />
                            <Text style={styles.menuItemText}>About</Text>
                        </View>
                        <ChevronRight size={20} color="#9ca3af" />
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
                        <View style={styles.menuItemLeft}>
                            <LogOut size={20} color="#ef4444" />
                            <Text style={[styles.menuItemText, { color: '#ef4444' }]}>Log Out</Text>
                        </View>
                    </TouchableOpacity>
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
