import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInferenceEngine } from '@vidyut/ai';

export default function Learn() {
    const { contentId } = useParams();
    console.log(contentId);
    const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
        { role: 'assistant', content: 'Hello! I\'m your AI tutor. What would you like to learn today?' },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const engine = await getInferenceEngine();
            const response = await engine.chat(input);
            setMessages((prev) => [...prev, { role: 'assistant', content: response }]);
        } catch (error) {
            console.error('AI inference failed:', error);
            setMessages((prev) => [
                ...prev,
                { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fade-in">
            <h1 className="mb-3">AI Learning Assistant</h1>
            <p className="text-secondary mb-4">Ask me anything about your lessons!</p>

            <div className="grid grid-2 gap-3">
                {/* Chat Interface */}
                <div className="card" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem' }}>
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                }}
                            >
                                <div
                                    style={{
                                        maxWidth: '80%',
                                        padding: '1rem',
                                        borderRadius: '1rem',
                                        backgroundColor: msg.role === 'user' ? 'var(--primary)' : 'var(--background)',
                                        color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                                    }}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
                                <span>AI is thinking...</span>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask a question..."
                            style={{ flex: 1 }}
                        />
                        <button className="btn btn-primary" onClick={handleSend} disabled={isLoading}>
                            Send
                        </button>
                    </div>
                </div>

                {/* Quick Actions */}
                <div>
                    <div className="card mb-3">
                        <h3 className="mb-2">Quick Topics</h3>
                        <div className="flex flex-col gap-2">
                            {['Algebra', 'Geometry', 'Physics', 'Chemistry', 'Biology'].map((topic) => (
                                <button
                                    key={topic}
                                    className="btn btn-secondary"
                                    onClick={() => setInput(`Explain ${topic} basics`)}
                                    style={{ justifyContent: 'flex-start' }}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <h3 className="mb-2">Practice Quiz</h3>
                        <p className="text-secondary mb-3">Test your knowledge</p>
                        <button className="btn btn-primary" style={{ width: '100%' }}>
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
