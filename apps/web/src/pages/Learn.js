import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInferenceEngine } from '@vidyut/ai';
export default function Learn() {
    const { contentId } = useParams();
    console.log(contentId);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hello! I\'m your AI tutor. What would you like to learn today?' },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSend = async () => {
        if (!input.trim())
            return;
        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        try {
            const engine = await getInferenceEngine();
            const response = await engine.chat(input);
            setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
        }
        catch (error) {
            console.error('AI inference failed:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
            ]);
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs("div", { className: "fade-in", children: [_jsx("h1", { className: "mb-3", children: "AI Learning Assistant" }), _jsx("p", { className: "text-secondary mb-4", children: "Ask me anything about your lessons!" }), _jsxs("div", { className: "grid grid-2 gap-3", children: [_jsxs("div", { className: "card", style: { height: '600px', display: 'flex', flexDirection: 'column' }, children: [_jsxs("div", { style: { flex: 1, overflowY: 'auto', marginBottom: '1rem' }, children: [messages.map((msg, idx) => (_jsx("div", { style: {
                                            marginBottom: '1rem',
                                            display: 'flex',
                                            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                        }, children: _jsx("div", { style: {
                                                maxWidth: '80%',
                                                padding: '1rem',
                                                borderRadius: '1rem',
                                                backgroundColor: msg.role === 'user' ? 'var(--primary)' : 'var(--background)',
                                                color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                                            }, children: msg.content }) }, idx))), isLoading && (_jsx("div", { style: { textAlign: 'center', color: 'var(--text-secondary)' }, children: _jsx("span", { children: "AI is thinking..." }) }))] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), onKeyPress: (e) => e.key === 'Enter' && handleSend(), placeholder: "Ask a question...", style: { flex: 1 } }), _jsx("button", { className: "btn btn-primary", onClick: handleSend, disabled: isLoading, children: "Send" })] })] }), _jsxs("div", { children: [_jsxs("div", { className: "card mb-3", children: [_jsx("h3", { className: "mb-2", children: "Quick Topics" }), _jsx("div", { className: "flex flex-col gap-2", children: ['Algebra', 'Geometry', 'Physics', 'Chemistry', 'Biology'].map((topic) => (_jsx("button", { className: "btn btn-secondary", onClick: () => setInput(`Explain ${topic} basics`), style: { justifyContent: 'flex-start' }, children: topic }, topic))) })] }), _jsxs("div", { className: "card", children: [_jsx("h3", { className: "mb-2", children: "Practice Quiz" }), _jsx("p", { className: "text-secondary mb-3", children: "Test your knowledge" }), _jsx("button", { className: "btn btn-primary", style: { width: '100%' }, children: "Start Quiz" })] })] })] })] }));
}
