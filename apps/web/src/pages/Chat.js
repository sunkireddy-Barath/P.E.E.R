import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { MOCK_TUTORS, MOCK_CHAT_HISTORY } from '@vidyut/shared';
export default function Chat() {
    const [conversations] = useState(MOCK_TUTORS.map(tutor => ({
        id: tutor.id,
        name: tutor.name,
        lastMessage: tutor.specialty + ' Tutor',
        unread: 0,
        online: tutor.isOnline,
        avatar: tutor.avatar
    })));
    const [selectedChat, setSelectedChat] = useState(conversations[0]);
    const [messages, setMessages] = useState(MOCK_CHAT_HISTORY.map(msg => ({
        id: msg.id,
        from: msg.isAi ? 'AI Assistant' : 'Me',
        content: msg.text || '',
        time: new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: !msg.isAi
    })));
    const [input, setInput] = useState('');
    const handleSend = () => {
        if (!input.trim())
            return;
        setMessages([...messages, {
                id: Date.now().toString(),
                from: 'Me',
                content: input,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                isMe: true
            }]);
        setInput('');
    };
    return (_jsxs("div", { className: "fade-in", children: [_jsx("h1", { className: "mb-3", children: "Peer Chat & Tutoring" }), _jsx("p", { className: "text-secondary mb-4", children: "Connect with classmates and help each other learn" }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: '300px 1fr', gap: '1.5rem', height: '600px' }, children: [_jsxs("div", { className: "card", style: { overflowY: 'auto' }, children: [_jsx("h3", { className: "mb-3", children: "Conversations" }), conversations.map((conv) => (_jsxs("div", { onClick: () => setSelectedChat(conv), style: {
                                    padding: '1rem',
                                    borderRadius: '0.75rem',
                                    backgroundColor: selectedChat.id === conv.id ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
                                    cursor: 'pointer',
                                    marginBottom: '0.5rem',
                                    transition: 'all 0.2s ease',
                                }, onMouseEnter: (e) => {
                                    if (selectedChat.id !== conv.id) {
                                        e.currentTarget.style.backgroundColor = 'var(--background)';
                                    }
                                }, onMouseLeave: (e) => {
                                    if (selectedChat.id !== conv.id) {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                    }
                                }, children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("img", { src: conv.avatar, alt: conv.name, style: { width: '32px', height: '32px', borderRadius: '50%' } }), _jsx("h4", { style: { margin: 0, fontSize: '1rem' }, children: conv.name }), conv.online && (_jsx("span", { style: { width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)' } }))] }), conv.unread > 0 && (_jsx("span", { style: {
                                                    backgroundColor: 'var(--primary)',
                                                    color: 'white',
                                                    borderRadius: '50%',
                                                    width: '20px',
                                                    height: '20px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                }, children: conv.unread }))] }), _jsx("p", { className: "text-secondary", style: { fontSize: '0.875rem', margin: 0 }, children: conv.lastMessage })] }, conv.id)))] }), _jsxs("div", { className: "card", style: { display: 'flex', flexDirection: 'column' }, children: [_jsx("div", { style: { borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("img", { src: selectedChat.avatar, alt: selectedChat.name, style: { width: '48px', height: '48px', borderRadius: '50%' } }), _jsxs("div", { children: [_jsx("h3", { style: { margin: 0 }, children: selectedChat.name }), _jsx("p", { className: "text-secondary", style: { fontSize: '0.875rem', margin: 0 }, children: selectedChat.online ? 'Online' : 'Offline' })] })] }) }), _jsx("div", { style: { flex: 1, overflowY: 'auto', marginBottom: '1rem' }, children: messages.map((msg) => (_jsx("div", { style: {
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
                                    }, children: _jsxs("div", { style: { maxWidth: '70%' }, children: [!msg.isMe && (_jsx("p", { style: { fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }, children: msg.from })), _jsx("div", { style: {
                                                    padding: '0.75rem 1rem',
                                                    borderRadius: '1rem',
                                                    backgroundColor: msg.isMe ? 'var(--primary)' : 'var(--background)',
                                                    color: msg.isMe ? 'white' : 'var(--text-primary)',
                                                }, children: msg.content }), _jsx("p", { style: { fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }, children: msg.time })] }) }, msg.id))) }), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), onKeyPress: (e) => e.key === 'Enter' && handleSend(), placeholder: "Type a message...", style: { flex: 1 } }), _jsx("button", { className: "btn btn-primary", onClick: handleSend, children: "Send" })] })] })] })] }));
}
