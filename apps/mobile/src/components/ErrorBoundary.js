import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs(View, { style: styles.container, children: [_jsx(Text, { style: styles.title, children: "Oops! Something went wrong" }), _jsx(Text, { style: styles.message, children: this.state.error?.message || 'An unexpected error occurred' }), _jsx(Text, { style: styles.hint, children: "Please restart the app" })] }));
        }
        return this.props.children;
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9fafb',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 12,
    },
    message: {
        fontSize: 16,
        color: '#6b7280',
        textAlign: 'center',
        marginBottom: 8,
    },
    hint: {
        fontSize: 14,
        color: '#9ca3af',
    },
});
