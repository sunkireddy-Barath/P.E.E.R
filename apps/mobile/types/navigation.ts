import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

// Define the param list for bottom tab navigator
export type RootTabParamList = {
    Dashboard: undefined;
    Learning: undefined;
    Courses: undefined;
    Community: undefined;
    Profile: undefined;
};

// Screen props types
export type DashboardScreenProps = BottomTabScreenProps<RootTabParamList, 'Dashboard'>;
export type LearningScreenProps = BottomTabScreenProps<RootTabParamList, 'Learning'>;
export type CoursesScreenProps = BottomTabScreenProps<RootTabParamList, 'Courses'>;
export type CommunityScreenProps = BottomTabScreenProps<RootTabParamList, 'Community'>;
export type ProfileScreenProps = BottomTabScreenProps<RootTabParamList, 'Profile'>;

// Declare global types for navigation
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootTabParamList { }
    }
}
