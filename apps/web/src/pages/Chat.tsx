import { useState } from 'react';
import { MOCK_TUTORS, MOCK_CHAT_HISTORY } from '../lib/mockData';

export default function Chat() {
    const [conversations] = useState(
        MOCK_TUTORS.map(tutor => ({
            id: tutor.id,
            name: tutor.name,
            lastMessage: tutor.specialty + ' Tutor',
            unread: 0,
            online: tutor.isOnline,
            avatar: tutor.avatar
        }))
    );

    const [selectedChat, setSelectedChat] = useState(conversations[0]);
    const [messages, setMessages] = useState(
        MOCK_CHAT_HISTORY.map(msg => ({
            id: msg.id,
            from: msg.isAi ? 'AI Assistant' : 'Me',
            content: msg.text || '',
            time: new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: !msg.isAi
        }))
    );
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, {
            id: Date.now().toString(),
            from: 'Me',
            content: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isMe: true
        }]);
        setInput('');
    };

    return (
        <div className="fade-in">
            <h1 className="mb-3">Peer Chat & Tutoring</h1>
            <p className="text-secondary mb-4">Connect with classmates and help each other learn</p>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '1.5rem', height: '600px' }}>
                {/* Conversations List */}
                <div className="card" style={{ overflowY: 'auto' }}>
                    <h3 className="mb-3">Conversations</h3>
                    {conversations.map((conv) => (
                        <div
                            key={conv.id}
                            onClick={() => setSelectedChat(conv)}
                            style={{
                                padding: '1rem',
                                borderRadius: '0.75rem',
                                backgroundColor: selectedChat.id === conv.id ? 'rgba(79, 70, 229, 0.1)' : 'transparent',
                                cursor: 'pointer',
                                marginBottom: '0.5rem',
                                transition: 'all 0.2s ease',
                            }}
                            onMouseEnter={(e) => {
                                if (selectedChat.id !== conv.id) {
                                    e.currentTarget.style.backgroundColor = 'var(--background)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (selectedChat.id !== conv.id) {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }
                            }}
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <img src={conv.avatar} alt={conv.name} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{conv.name}</h4>
                                    {conv.online && (
                                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--success)' }} />
                                    )}
                                </div>
                                {conv.unread > 0 && (
                                    <span style={{
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
                                    }}>
                                        {conv.unread}
                                    </span>
                                )}
                            </div>
                            <p className="text-secondary" style={{ fontSize: '0.875rem', margin: 0 }}>
                                {conv.lastMessage}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Chat Window */}
                <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                        <div className="flex items-center gap-2">
                            <img src={selectedChat.avatar} alt={selectedChat.name} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                            <div>
                                <h3 style={{ margin: 0 }}>{selectedChat.name}</h3>
                                <p className="text-secondary" style={{ fontSize: '0.875rem', margin: 0 }}>
                                    {selectedChat.online ? 'Online' : 'Offline'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem' }}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                style={{
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: msg.isMe ? 'flex-end' : 'flex-start',
                                }}
                            >
                                <div style={{ maxWidth: '70%' }}>
                                    {!msg.isMe && (
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                                            {msg.from}
                                        </p>
                                    )}
                                    <div
                                        style={{
                                            padding: '0.75rem 1rem',
                                            borderRadius: '1rem',
                                            backgroundColor: msg.isMe ? 'var(--primary)' : 'var(--background)',
                                            color: msg.isMe ? 'white' : 'var(--text-primary)',
                                        }}
                                    >
                                        {msg.content}
                                    </div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                                        {msg.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                            style={{ flex: 1 }}
                        />
                        <button className="btn btn-primary" onClick={handleSend}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
