import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// Initialize database on app load
import { getDatabase } from '@vidyut/db';
getDatabase().then(() => {
    console.log('Database initialized');
}).catch((error) => {
    console.error('Failed to initialize database:', error);
});
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
