// Generative AI Quiz Application
class QuizApp {
    constructor() {
        this.questions = [
            {
                question: "According to the lecture, what is the hierarchical relationship between AI, Machine Learning, Deep Learning, and Generative AI?",
                options: [
                    "They are all separate, independent fields",
                    "AI is the umbrella term, ML is a subset of AI, DL is a subset of ML, and Generative AI is a subset of DL",
                    "Machine Learning is the broadest field containing all others",
                    "Generative AI is the umbrella term for all AI technologies"
                ],
                correct: 1
            },
            {
                question: "Which type of AI model classifies existing data, such as spam detection or facial recognition?",
                options: [
                    "Generative AI",
                    "Predictive AI",
                    "Discriminative AI",
                    "Reasoning AI"
                ],
                correct: 2
            },
            {
                question: "What type of AI creates entirely new content like text, images, music, and code?",
                options: [
                    "Discriminative AI",
                    "Predictive AI",
                    "Generative AI",
                    "Classical AI"
                ],
                correct: 2
            },
            {
                question: "Which architecture is used by modern Large Language Models (LLMs) and was introduced in Google's 2017 'Attention is all you need' paper?",
                options: [
                    "Convolutional Neural Networks",
                    "Recurrent Neural Networks",
                    "Transformer",
                    "Generative Adversarial Networks"
                ],
                correct: 2
            },
            {
                question: "What are examples of current reasoning models mentioned in the lecture?",
                options: [
                    "ChatGPT and Claude",
                    "OpenAI o1, DeepSeek R1, and Gemini Deep Research",
                    "DALL-E and Stable Diffusion",
                    "BERT and RoBERTa"
                ],
                correct: 1
            },
            {
                question: "According to Prof. Kodagoda, what is the main problem with using AI just to get answers in education?",
                options: [
                    "It's too expensive",
                    "It's too slow",
                    "It reduces brain activity and learning effectiveness",
                    "It's inaccurate"
                ],
                correct: 2
            },
            {
                question: "What learning approach does the lecture recommend when using GenAI tools?",
                options: [
                    "Use AI to get direct answers to save time",
                    "Socratic approach with chatbots for deeper understanding",
                    "Replace all traditional learning with AI",
                    "Only use AI for simple questions"
                ],
                correct: 1
            },
            {
                question: "In prompt engineering, what are the four key components of effective prompts?",
                options: [
                    "Question, Answer, Context, Review",
                    "Input, Process, Output, Feedback",
                    "Context, Task, Instructions, Clarify and Refine",
                    "Role, Goal, Method, Verification"
                ],
                correct: 2
            },
            {
                question: "What is the difference between normal API calls and LLM API calls?",
                options: [
                    "LLM calls are faster",
                    "LLM calls include model selection, system prompts, and user prompts",
                    "Normal calls are more expensive",
                    "There is no difference"
                ],
                correct: 1
            },
            {
                question: "Which of the following are examples of open models mentioned in the lecture?",
                options: [
                    "GPT-4 and Claude",
                    "LLaMA and Mistral",
                    "Gemini and Copilot",
                    "ChatGPT and Bard"
                ],
                correct: 1
            },
            {
                question: "What does the term 'parameters' refer to in the context of AI models?",
                options: [
                    "The input variables",
                    "The training time",
                    "The learned components of a model that store knowledge (e.g., GPT-3 has 175 billion parameters)",
                    "The output format"
                ],
                correct: 2
            },
            {
                question: "What is a context window in language models?",
                options: [
                    "The training data size",
                    "The amount of text a model can process at once",
                    "The model's accuracy rate",
                    "The processing speed"
                ],
                correct: 1
            },
            {
                question: "What is fine-tuning in the context of AI models?",
                options: [
                    "Increasing the model size",
                    "Customizing pre-trained models for specific tasks",
                    "Reducing processing time",
                    "Improving hardware performance"
                ],
                correct: 1
            },
            {
                question: "What is model distillation?",
                options: [
                    "Training models from scratch",
                    "Compressing large models into smaller, faster ones",
                    "Combining multiple models",
                    "Removing unnecessary features"
                ],
                correct: 1
            },
            {
                question: "What are Small Language Models (SLMs) optimized for?",
                options: [
                    "Maximum accuracy only",
                    "Largest possible size",
                    "Speed and efficiency",
                    "Complex reasoning tasks only"
                ],
                correct: 2
            },
            {
                question: "According to the lecture, which statement about university education and AI is correct?",
                options: [
                    "University education should focus on memorizing facts",
                    "University education focuses on learning how to think, and AI should guide learning, not replace thinking",
                    "AI should completely replace traditional learning methods",
                    "Students should only use AI for complex problems"
                ],
                correct: 1
            },
            {
                question: "Which platforms are mentioned for building GenAI applications?",
                options: [
                    "Facebook and Twitter",
                    "OpenAI and Hugging Face",
                    "Netflix and Spotify",
                    "Amazon and eBay"
                ],
                correct: 1
            },
            {
                question: "What is the main difference between foundation models and Large Language Models (LLMs)?",
                options: [
                    "Foundation models are smaller",
                    "LLMs are text-focused foundation models",
                    "Foundation models are newer",
                    "There is no difference"
                ],
                correct: 1
            },
            {
                question: "What milestone did GPT-4.5 reportedly achieve according to the lecture?",
                options: [
                    "First AI to beat humans at chess",
                    "First AI to pass the Turing Test with 73% success rate",
                    "First AI to generate realistic images",
                    "First AI to write computer code"
                ],
                correct: 1
            },
            {
                question: "Which learning resource platform is specifically mentioned for comprehensive AI education in the lecture?",
                options: [
                    "Coursera only",
                    "edX",
                    "DeepLearning.AI platform",
                    "Udemy"
                ],
                correct: 2
            }
        ];

        this.currentQuestion = 0;
        this.userAnswers = [];
        this.score = 0;
        this.quizStartTime = null;

        this.initializeElements();
        this.setupEventListeners();
        this.showStartScreen();
    }

    initializeElements() {
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.quizContainer = document.getElementById('quiz-container');
        this.resultScreen = document.getElementById('result-screen');
        this.reviewScreen = document.getElementById('review-screen');

        // Quiz elements
        this.questionElement = document.getElementById('question');
        this.optionsElement = document.getElementById('options');
        this.currentQuestionSpan = document.getElementById('current-question');
        this.totalQuestionsSpan = document.getElementById('total-questions');
        this.progressElement = document.getElementById('progress');

        // Buttons
        this.startQuizBtn = document.getElementById('start-quiz-btn');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.submitBtn = document.getElementById('submit-btn');
        this.reviewBtn = document.getElementById('review-btn');
        this.restartBtn = document.getElementById('restart-btn');
        this.closeReviewBtn = document.getElementById('close-review-btn');

        // Result elements
        this.scoreText = document.getElementById('score-text');
        this.correctCount = document.getElementById('correct-count');
        this.timeTaken = document.getElementById('time-taken');
        this.grade = document.getElementById('grade');
        this.reviewContent = document.getElementById('review-content');

        // Set total questions
        this.totalQuestionsSpan.textContent = this.questions.length;
    }

    setupEventListeners() {
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.submitBtn.addEventListener('click', () => this.submitQuiz());
        this.reviewBtn.addEventListener('click', () => this.showReviewScreen());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.closeReviewBtn.addEventListener('click', () => this.showResultScreen());
    }

    showStartScreen() {
        this.startScreen.style.display = 'block';
        this.quizContainer.style.display = 'none';
        this.resultScreen.style.display = 'none';
        this.reviewScreen.style.display = 'none';
    }

    startQuiz() {
        this.quizStartTime = Date.now();
        this.startScreen.style.display = 'none';
        this.quizContainer.style.display = 'block';
        this.quizContainer.classList.add('fade-in');
        this.loadQuestion();
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];

        this.questionElement.textContent = question.question;
        this.currentQuestionSpan.textContent = this.currentQuestion + 1;

        // Update progress bar
        const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
        this.progressElement.style.width = `${progress}%`;

        // Load options
        this.optionsElement.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index));

            // Restore previous selection and feedback if exists
            if (this.userAnswers[this.currentQuestion] !== undefined) {
                if (this.userAnswers[this.currentQuestion] === index) {
                    optionElement.classList.add('selected');
                    // Show feedback for previously selected answer
                    if (index === question.correct) {
                        optionElement.classList.add('correct');
                        optionElement.innerHTML += ' ✓';
                    } else {
                        optionElement.classList.add('incorrect');
                        optionElement.innerHTML += ' ✗';
                    }
                }
                // Always show the correct answer
                if (index === question.correct) {
                    optionElement.classList.add('correct-answer');
                }
            }

            this.optionsElement.appendChild(optionElement);
        });

        // Update button states
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.style.display = this.currentQuestion === this.questions.length - 1 ? 'none' : 'inline-block';
        this.submitBtn.style.display = this.currentQuestion === this.questions.length - 1 ? 'inline-block' : 'none';
    }

    selectOption(index) {
        const question = this.questions[this.currentQuestion];

        // Remove previous selection
        const options = this.optionsElement.querySelectorAll('.option');
        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            // Remove previous feedback symbols
            opt.textContent = opt.textContent.replace(' ✓', '').replace(' ✗', '');
        });

        // Store user answer
        this.userAnswers[this.currentQuestion] = index;

        // Add selection to clicked option
        options[index].classList.add('selected');

        // Show immediate feedback
        if (index === question.correct) {
            options[index].classList.add('correct');
            options[index].innerHTML += ' ✓';
        } else {
            options[index].classList.add('incorrect');
            options[index].innerHTML += ' ✗';
            // Also highlight the correct answer
            options[question.correct].classList.add('correct-answer');
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
        }
    }

    submitQuiz() {
        // Calculate score
        this.score = 0;
        this.userAnswers.forEach((answer, index) => {
            if (answer === this.questions[index].correct) {
                this.score++;
            }
        });

        this.showResultScreen();
    }

    showResultScreen() {
        this.quizContainer.style.display = 'none';
        this.reviewScreen.style.display = 'none';
        this.resultScreen.style.display = 'block';
        this.resultScreen.classList.add('fade-in');

        // Calculate results
        const percentage = Math.round((this.score / this.questions.length) * 100);
        const timeTakenSeconds = Math.floor((Date.now() - this.quizStartTime) / 1000);
        const minutes = Math.floor(timeTakenSeconds / 60);
        const seconds = timeTakenSeconds % 60;

        // Update score circle
        this.updateScoreCircle(percentage);

        // Update result displays
        this.scoreText.textContent = `${percentage}%`;
        this.correctCount.textContent = this.score;
        this.timeTaken.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        this.grade.textContent = `Grade: ${this.calculateGrade(percentage)}`;
    }

    updateScoreCircle(percentage) {
        const circle = document.querySelector('.score-circle');
        const degrees = (percentage / 100) * 360;

        let color = 'var(--accent-red)';
        if (percentage >= 80) color = 'var(--accent-green)';
        else if (percentage >= 60) color = 'var(--accent-orange)';
        else if (percentage >= 40) color = 'var(--accent-blue)';

        circle.style.background = `conic-gradient(${color} ${degrees}deg, var(--bg-secondary) ${degrees}deg)`;
    }

    calculateGrade(percentage) {
        if (percentage >= 90) return 'A+';
        if (percentage >= 85) return 'A';
        if (percentage >= 80) return 'A-';
        if (percentage >= 75) return 'B+';
        if (percentage >= 70) return 'B';
        if (percentage >= 65) return 'B-';
        if (percentage >= 60) return 'C+';
        if (percentage >= 55) return 'C';
        if (percentage >= 50) return 'C-';
        return 'F';
    }

    showReviewScreen() {
        this.resultScreen.style.display = 'none';
        this.reviewScreen.style.display = 'block';
        this.reviewScreen.classList.add('fade-in');

        this.generateReviewContent();
    }

    generateReviewContent() {
        this.reviewContent.innerHTML = '';

        this.questions.forEach((question, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.className = `review-item ${this.userAnswers[index] === question.correct ? 'correct' : 'incorrect'}`;

            reviewItem.innerHTML = `
                <div class="review-question">
                    ${index + 1}. ${question.question}
                </div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct-answer';
                        }
                        if (this.userAnswers[index] === optIndex) {
                            className += this.userAnswers[index] === question.correct ? ' user-selected' : ' user-incorrect';
                        }
                        return `<div class="${className}">${option}</div>`;
                    }).join('')}
                </div>
                <div class="review-status ${this.userAnswers[index] === question.correct ? 'correct' : 'incorrect'}">
                    ${this.userAnswers[index] === question.correct ? '✓ Correct' : '✗ Incorrect'}
                    ${this.userAnswers[index] === undefined ? ' (Not answered)' : ''}
                </div>
            `;

            this.reviewContent.appendChild(reviewItem);
        });
    }

    restartQuiz() {
        // Reset all variables
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.score = 0;
        this.quizStartTime = null;

        // Show start screen
        this.showStartScreen();
    }
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});

// Prevent accidental page refresh during quiz
window.addEventListener('beforeunload', (e) => {
    if (document.getElementById('quiz-container').style.display !== 'none') {
        e.preventDefault();
        e.returnValue = '';
    }
});