import { COLORS } from '@vidyut/constants';
// Re-export colors for easy access
export { COLORS };
// API Configuration
export const API_CONFIG = {
    BASE_URL: __DEV__
        ? 'http://localhost:3000/api'
        : 'https://api.vidyutbandhu.com',
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 2,
};
// Screen names
export const SCREENS = {
    DASHBOARD: 'Dashboard',
    LEARNING: 'Learning',
    COURSES: 'Courses',
    COMMUNITY: 'Community',
    PROFILE: 'Profile',
};
// Storage keys
export const STORAGE_KEYS = {
    USER: '@vidyut:user',
    TOKEN: '@vidyut:token',
    LANGUAGE: '@vidyut:language',
    THEME: '@vidyut:theme',
};
// Layout constants
export const LAYOUT = {
    HEADER_HEIGHT: 60,
    TAB_BAR_HEIGHT: 60,
    SPACING: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    BORDER_RADIUS: {
        sm: 8,
        md: 12,
        lg: 16,
    },
};
