import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './global.css';
import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { Home, BookOpen, Library, Users, User } from 'lucide-react-native';
// Import screens
import DashboardScreen from './src/screens/DashboardScreen';
import LearningScreen from './src/screens/LearningScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CommunityScreen from './src/screens/CommunityScreen';
import ProfileScreen from './src/screens/ProfileScreen';
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 2,
            staleTime: 5 * 60 * 1000, // 5 minutes
        },
    },
});
export default function App() {
    return (_jsx(ErrorBoundary, { children: _jsx(SafeAreaProvider, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(NavigationContainer, { children: _jsxs(Tab.Navigator, { screenOptions: {
                                headerShown: false,
                                tabBarActiveTintColor: '#4f46e5', // Indigo 600
                                tabBarInactiveTintColor: '#6b7280', // Slate 500
                                tabBarStyle: {
                                    paddingBottom: 8,
                                    paddingTop: 8,
                                    height: 60,
                                    backgroundColor: '#ffffff',
                                    borderTopColor: '#e5e7eb',
                                },
                            }, children: [_jsx(Tab.Screen, { name: "Dashboard", component: DashboardScreen, options: {
                                        tabBarLabel: 'Home',
                                        tabBarIcon: ({ color, size }) => (_jsx(Home, { size: size, color: color })),
                                    } }), _jsx(Tab.Screen, { name: "Learning", component: LearningScreen, options: {
                                        tabBarLabel: 'Learn',
                                        tabBarIcon: ({ color, size }) => (_jsx(BookOpen, { size: size, color: color })),
                                    } }), _jsx(Tab.Screen, { name: "Courses", component: CoursesScreen, options: {
                                        tabBarLabel: 'Courses',
                                        tabBarIcon: ({ color, size }) => (_jsx(Library, { size: size, color: color })),
                                    } }), _jsx(Tab.Screen, { name: "Community", component: CommunityScreen, options: {
                                        tabBarLabel: 'Community',
                                        tabBarIcon: ({ color, size }) => (_jsx(Users, { size: size, color: color })),
                                    } }), _jsx(Tab.Screen, { name: "Profile", component: ProfileScreen, options: {
                                        tabBarLabel: 'Profile',
                                        tabBarIcon: ({ color, size }) => (_jsx(User, { size: size, color: color })),
                                    } })] }) }), _jsx(StatusBar, { style: "auto" })] }) }) }));
}
registerRootComponent(App);
