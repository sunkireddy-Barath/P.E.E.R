import { useState, useEffect, useCallback } from 'react';
import { 
    Play, Pause, RotateCcw, Trophy, Clock, Zap, 
    CheckCircle, XCircle, ChevronRight, Star, Sparkles,
    Brain, Target, Gamepad2
} from 'lucide-react';
import { 
    QUIZ_QUESTIONS, MINI_GAMES, PLAYER_STATS,
    type QuizQuestion, type MiniGame
} from '../lib/gamificationData';

export default function Games() {
    const [activeGame, setActiveGame] = useState<string | null>(null);
    const [quizState, setQuizState] = useState({
        currentQuestion: 0,
        score: 0,
        answers: [] as boolean[],
        showResult: false,
        selectedAnswer: null as number | null,
        showExplanation: false,
        timeLeft: 60,
        isActive: false
    });

    const [mathSprintState, setMathSprintState] = useState({
        score: 0,
        timeLeft: 60,
        currentProblem: { num1: 0, num2: 0, operator: '+', answer: 0 },
        userAnswer: '',
        isActive: false,
        problems: [] as { correct: boolean; problem: string }[]
    });

    // Generate math problem
    const generateMathProblem = useCallback(() => {
        const operators = ['+', '-', '×'];
        const operator = operators[Math.floor(Math.random() * operators.length)];
        let num1, num2, answer;

        switch (operator) {
            case '+':
                num1 = Math.floor(Math.random() * 50) + 1;
                num2 = Math.floor(Math.random() * 50) + 1;
                answer = num1 + num2;
                break;
            case '-':
                num1 = Math.floor(Math.random() * 50) + 20;
                num2 = Math.floor(Math.random() * 20) + 1;
                answer = num1 - num2;
                break;
            case '×':
                num1 = Math.floor(Math.random() * 12) + 1;
                num2 = Math.floor(Math.random() * 12) + 1;
                answer = num1 * num2;
                break;
            default:
                num1 = 0; num2 = 0; answer = 0;
        }

        return { num1, num2, operator, answer };
    }, []);

    // Math Sprint Timer
    useEffect(() => {
        if (mathSprintState.isActive && mathSprintState.timeLeft > 0) {
            const timer = setTimeout(() => {
                setMathSprintState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
            }, 1000);
            return () => clearTimeout(timer);
        } else if (mathSprintState.timeLeft === 0 && mathSprintState.isActive) {
            setMathSprintState(prev => ({ ...prev, isActive: false }));
        }
    }, [mathSprintState.isActive, mathSprintState.timeLeft]);

    // Quiz Timer
    useEffect(() => {
        if (quizState.isActive && quizState.timeLeft > 0 && !quizState.showResult) {
            const timer = setTimeout(() => {
                setQuizState(prev => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [quizState.isActive, quizState.timeLeft, quizState.showResult]);

    const startQuiz = () => {
        setActiveGame('quiz');
        setQuizState({
            currentQuestion: 0,
            score: 0,
            answers: [],
            showResult: false,
            selectedAnswer: null,
            showExplanation: false,
            timeLeft: 60,
            isActive: true
        });
    };

    const selectAnswer = (index: number) => {
        if (quizState.selectedAnswer !== null) return;

        const currentQ = QUIZ_QUESTIONS[quizState.currentQuestion];
        const isCorrect = index === currentQ.correctAnswer;

        setQuizState(prev => ({
            ...prev,
            selectedAnswer: index,
            showExplanation: true,
            score: isCorrect ? prev.score + currentQ.xpReward : prev.score,
            answers: [...prev.answers, isCorrect]
        }));
    };

    const nextQuestion = () => {
        if (quizState.currentQuestion < QUIZ_QUESTIONS.length - 1) {
            setQuizState(prev => ({
                ...prev,
                currentQuestion: prev.currentQuestion + 1,
                selectedAnswer: null,
                showExplanation: false
            }));
        } else {
            setQuizState(prev => ({ ...prev, showResult: true, isActive: false }));
        }
    };

    const startMathSprint = () => {
        setActiveGame('math_sprint');
        setMathSprintState({
            score: 0,
            timeLeft: 60,
            currentProblem: generateMathProblem(),
            userAnswer: '',
            isActive: true,
            problems: []
        });
    };

    const submitMathAnswer = () => {
        const isCorrect = parseInt(mathSprintState.userAnswer) === mathSprintState.currentProblem.answer;
        const problemStr = `${mathSprintState.currentProblem.num1} ${mathSprintState.currentProblem.operator} ${mathSprintState.currentProblem.num2}`;

        setMathSprintState(prev => ({
            ...prev,
            score: isCorrect ? prev.score + 1 : prev.score,
            problems: [...prev.problems, { correct: isCorrect, problem: problemStr }],
            currentProblem: generateMathProblem(),
            userAnswer: ''
        }));
    };

    const renderGameCard = (game: MiniGame) => (
        <div 
            key={game.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            onClick={() => game.id === 'math_sprint' ? startMathSprint() : null}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{game.icon}</div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    game.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                    game.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                }`}>
                    {game.difficulty}
                </span>
            </div>

            <h3 className="font-bold text-lg mb-2">{game.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{game.description}</p>

            <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-500" />
                        +{game.xpReward}
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="text-yellow-500">🪙</span>
                        +{game.coinReward}
                    </span>
                </div>
                <span className="text-muted-foreground">
                    Best: {game.highScore}
                </span>
            </div>

            <button className="w-full mt-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Play Now
            </button>
        </div>
    );

    const renderQuiz = () => {
        if (quizState.showResult) {
            const correctCount = quizState.answers.filter(a => a).length;
            const percentage = Math.round((correctCount / QUIZ_QUESTIONS.length) * 100);

            return (
                <div className="bg-card border border-border rounded-xl p-8 text-center">
                    <div className="mb-6">
                        {percentage >= 80 ? (
                            <div className="text-6xl mb-4">🏆</div>
                        ) : percentage >= 60 ? (
                            <div className="text-6xl mb-4">⭐</div>
                        ) : (
                            <div className="text-6xl mb-4">💪</div>
                        )}
                        <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
                        <p className="text-muted-foreground">
                            {percentage >= 80 ? 'Excellent work!' : percentage >= 60 ? 'Good job!' : 'Keep practicing!'}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-muted rounded-xl p-4">
                            <p className="text-3xl font-bold text-primary">{correctCount}/{QUIZ_QUESTIONS.length}</p>
                            <p className="text-sm text-muted-foreground">Correct</p>
                        </div>
                        <div className="bg-muted rounded-xl p-4">
                            <p className="text-3xl font-bold text-green-500">{percentage}%</p>
                            <p className="text-sm text-muted-foreground">Score</p>
                        </div>
                        <div className="bg-muted rounded-xl p-4">
                            <p className="text-3xl font-bold text-yellow-500">+{quizState.score}</p>
                            <p className="text-sm text-muted-foreground">XP Earned</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveGame(null)}
                            className="flex-1 py-3 bg-muted text-foreground rounded-xl font-medium hover:bg-muted/80 transition-colors"
                        >
                            Back to Games
                        </button>
                        <button
                            onClick={startQuiz}
                            className="flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Play Again
                        </button>
                    </div>
                </div>
            );
        }

        const currentQ = QUIZ_QUESTIONS[quizState.currentQuestion];

        return (
            <div className="bg-card border border-border rounded-xl p-6">
                {/* Progress & Timer */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                            Question {quizState.currentQuestion + 1}/{QUIZ_QUESTIONS.length}
                        </span>
                        <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-primary transition-all"
                                style={{ width: `${((quizState.currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className={`font-mono font-bold ${quizState.timeLeft <= 10 ? 'text-red-500' : ''}`}>
                            {quizState.timeLeft}s
                        </span>
                    </div>
                </div>

                {/* Question */}
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            currentQ.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                            currentQ.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                        }`}>
                            {currentQ.difficulty}
                        </span>
                        <span className="text-xs text-muted-foreground">{currentQ.subject} • {currentQ.topic}</span>
                    </div>
                    <h2 className="text-xl font-bold">{currentQ.question}</h2>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                    {currentQ.options.map((option, index) => {
                        const isSelected = quizState.selectedAnswer === index;
                        const isCorrect = index === currentQ.correctAnswer;
                        const showCorrect = quizState.showExplanation && isCorrect;
                        const showWrong = quizState.showExplanation && isSelected && !isCorrect;

                        return (
                            <button
                                key={index}
                                onClick={() => selectAnswer(index)}
                                disabled={quizState.selectedAnswer !== null}
                                className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                                    showCorrect 
                                        ? 'bg-green-50 border-green-500 dark:bg-green-900/30' 
                                        : showWrong
                                        ? 'bg-red-50 border-red-500 dark:bg-red-900/30'
                                        : isSelected
                                        ? 'bg-primary/10 border-primary'
                                        : 'bg-card border-border hover:border-primary/50 hover:bg-muted/50'
                                }`}
                            >
                                <span className="font-medium">{option}</span>
                                {showCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                                {showWrong && <XCircle className="w-5 h-5 text-red-500" />}
                            </button>
                        );
                    })}
                </div>

                {/* Explanation */}
                {quizState.showExplanation && (
                    <div className="bg-muted rounded-xl p-4 mb-6">
                        <p className="text-sm font-medium mb-1">Explanation:</p>
                        <p className="text-sm text-muted-foreground">{currentQ.explanation}</p>
                    </div>
                )}

                {/* Next Button */}
                {quizState.showExplanation && (
                    <button
                        onClick={nextQuestion}
                        className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                        {quizState.currentQuestion < QUIZ_QUESTIONS.length - 1 ? (
                            <>
                                Next Question
                                <ChevronRight className="w-4 h-4" />
                            </>
                        ) : (
                            <>
                                See Results
                                <Trophy className="w-4 h-4" />
                            </>
                        )}
                    </button>
                )}
            </div>
        );
    };

    const renderMathSprint = () => {
        if (!mathSprintState.isActive && mathSprintState.problems.length > 0) {
            const correctCount = mathSprintState.problems.filter(p => p.correct).length;

            return (
                <div className="bg-card border border-border rounded-xl p-8 text-center">
                    <div className="text-6xl mb-4">⏱️</div>
                    <h2 className="text-2xl font-bold mb-2">Time's Up!</h2>
                    <p className="text-muted-foreground mb-6">Great effort!</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-muted rounded-xl p-4">
                            <p className="text-3xl font-bold text-primary">{mathSprintState.score}</p>
                            <p className="text-sm text-muted-foreground">Problems Solved</p>
                        </div>
                        <div className="bg-muted rounded-xl p-4">
                            <p className="text-3xl font-bold text-yellow-500">+{mathSprintState.score * 5}</p>
                            <p className="text-sm text-muted-foreground">XP Earned</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setActiveGame(null)}
                            className="flex-1 py-3 bg-muted text-foreground rounded-xl font-medium"
                        >
                            Back
                        </button>
                        <button
                            onClick={startMathSprint}
                            className="flex-1 py-3 bg-primary text-white rounded-xl font-medium flex items-center justify-center gap-2"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Play Again
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="bg-card border border-border rounded-xl p-6">
                {/* Timer */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        <span className="font-bold text-xl">{mathSprintState.score}</span>
                    </div>
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                        mathSprintState.timeLeft <= 10 ? 'bg-red-100 text-red-700' : 'bg-muted'
                    }`}>
                        <Clock className="w-5 h-5" />
                        <span className="font-mono font-bold text-xl">{mathSprintState.timeLeft}s</span>
                    </div>
                </div>

                {/* Problem */}
                <div className="text-center mb-8">
                    <p className="text-5xl font-bold mb-4">
                        {mathSprintState.currentProblem.num1} {mathSprintState.currentProblem.operator} {mathSprintState.currentProblem.num2} = ?
                    </p>
                </div>

                {/* Input */}
                <div className="flex gap-3">
                    <input
                        type="number"
                        value={mathSprintState.userAnswer}
                        onChange={(e) => setMathSprintState(prev => ({ ...prev, userAnswer: e.target.value }))}
                        onKeyPress={(e) => e.key === 'Enter' && submitMathAnswer()}
                        className="flex-1 text-center text-2xl font-bold py-4 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="?"
                        autoFocus
                    />
                    <button
                        onClick={submitMathAnswer}
                        className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors"
                    >
                        Submit
                    </button>
                </div>

                {/* Recent answers */}
                {mathSprintState.problems.length > 0 && (
                    <div className="mt-6 flex gap-2 flex-wrap">
                        {mathSprintState.problems.slice(-5).map((p, i) => (
                            <span 
                                key={i}
                                className={`px-3 py-1 rounded-full text-sm ${
                                    p.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}
                            >
                                {p.problem} {p.correct ? '✓' : '✗'}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-1 flex items-center gap-2">
                            <Gamepad2 className="w-7 h-7" />
                            Learning Games
                        </h1>
                        <p className="text-white/80">Learn while having fun!</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold">{PLAYER_STATS.totalXp.toLocaleString()}</p>
                            <p className="text-sm text-white/80">Total XP</p>
                        </div>
                    </div>
                </div>
            </div>

            {activeGame === null ? (
                <>
                    {/* Quick Play */}
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-indigo-500" />
                                    Daily Quiz Challenge
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    Test your knowledge with 10 questions!
                                </p>
                            </div>
                            <button
                                onClick={startQuiz}
                                className="px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors flex items-center gap-2"
                            >
                                <Play className="w-4 h-4" />
                                Start Quiz
                            </button>
                        </div>
                    </div>

                    {/* Mini Games */}
                    <div>
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                            Mini Games
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {MINI_GAMES.map(renderGameCard)}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h2 className="text-lg font-bold mb-4">Your Gaming Stats</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center p-4 bg-muted rounded-xl">
                                <p className="text-2xl font-bold text-primary">{PLAYER_STATS.quizzesCompleted}</p>
                                <p className="text-sm text-muted-foreground">Quizzes Completed</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-xl">
                                <p className="text-2xl font-bold text-green-500">{PLAYER_STATS.perfectScores}</p>
                                <p className="text-sm text-muted-foreground">Perfect Scores</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-xl">
                                <p className="text-2xl font-bold text-orange-500">{PLAYER_STATS.streak}</p>
                                <p className="text-sm text-muted-foreground">Day Streak</p>
                            </div>
                            <div className="text-center p-4 bg-muted rounded-xl">
                                <p className="text-2xl font-bold text-purple-500">#{PLAYER_STATS.rank}</p>
                                <p className="text-sm text-muted-foreground">Leaderboard Rank</p>
                            </div>
                        </div>
                    </div>
                </>
            ) : activeGame === 'quiz' ? (
                <div>
                    <button
                        onClick={() => setActiveGame(null)}
                        className="mb-4 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                        ← Back to Games
                    </button>
                    {renderQuiz()}
                </div>
            ) : activeGame === 'math_sprint' ? (
                <div>
                    <button
                        onClick={() => setActiveGame(null)}
                        className="mb-4 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                        ← Back to Games
                    </button>
                    {renderMathSprint()}
                </div>
            ) : null}
        </div>
    );
}
