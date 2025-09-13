// Expert Systems and Ontologies Quiz Application
class QuizApp {
    constructor() {
        this.questions = [
            {
                question: "What is an Expert System?",
                options: [
                    "A computer program that replaces human experts completely",
                    "A computer program designed to simulate the decision-making ability of a human expert in a specific domain",
                    "A database that stores expert knowledge",
                    "A type of neural network for pattern recognition"
                ],
                correct: 1
            },
            {
                question: "In the Data vs. Information vs. Knowledge hierarchy, what does 'Knowledge' represent?",
                options: [
                    "Raw facts like '98.6'",
                    "Organized data like 'Temperature = 98.6°F'",
                    "Meaningful insights like '98.6°F is a normal body temperature'",
                    "Complex algorithms for processing data"
                ],
                correct: 2
            },
            {
                question: "What is the main difference between conventional systems and expert systems in terms of control?",
                options: [
                    "Conventional systems use knowledge to control, Expert systems use data to control",
                    "Conventional systems use data to control, Expert systems use knowledge to control",
                    "Both use the same control mechanisms",
                    "Expert systems don't have any control mechanisms"
                ],
                correct: 1
            },
            {
                question: "Which component of an Expert System stores facts and rules collected from domain experts?",
                options: [
                    "Inference Engine",
                    "User Interface",
                    "Knowledge Base",
                    "Working Memory"
                ],
                correct: 2
            },
            {
                question: "What are the two types of knowledge stored in the Knowledge Base?",
                options: [
                    "Simple and Complex",
                    "Static and Dynamic",
                    "Declarative (facts) and Procedural (rules)",
                    "Input and Output"
                ],
                correct: 2
            },
            {
                question: "What does the Inference Engine do in an Expert System?",
                options: [
                    "Stores expert knowledge",
                    "Provides the user interface",
                    "Applies reasoning to the knowledge base to derive conclusions",
                    "Explains the system's decisions"
                ],
                correct: 2
            },
            {
                question: "In Forward Chaining reasoning, what is the starting point?",
                options: [
                    "Known facts (input data)",
                    "A goal or hypothesis",
                    "User questions",
                    "System rules"
                ],
                correct: 0
            },
            {
                question: "In Backward Chaining reasoning, what is the starting point?",
                options: [
                    "Known facts (input data)",
                    "A goal or hypothesis",
                    "Random data",
                    "System configuration"
                ],
                correct: 1
            },
            {
                question: "Which historical expert system was designed to diagnose blood infections?",
                options: [
                    "DENDRAL",
                    "XCON",
                    "MYCIN",
                    "HEARSAY"
                ],
                correct: 2
            },
            {
                question: "Which expert system was used for automated configuration of computer systems and saved $25 million for DEC?",
                options: [
                    "MYCIN",
                    "DENDRAL",
                    "XCON",
                    "HEARSAY"
                ],
                correct: 2
            },
            {
                question: "What is a major limitation of Expert Systems mentioned in the lecture?",
                options: [
                    "They are too expensive to build",
                    "They work too slowly",
                    "They are built entirely using manual rules and cannot learn from data",
                    "They require too much storage space"
                ],
                correct: 2
            },
            {
                question: "According to Gruber (1993), an ontology is defined as:",
                options: [
                    "A computer program for storing data",
                    "A formal, explicit specification of a shared conceptualization",
                    "A type of expert system",
                    "A machine learning algorithm"
                ],
                correct: 1
            },
            {
                question: "In ontology terms, what is a 'Class'?",
                options: [
                    "A specific member of a category",
                    "A group or category of things",
                    "A link between instances",
                    "A logical rule"
                ],
                correct: 1
            },
            {
                question: "In ontology terms, what is an 'Instance'?",
                options: [
                    "A group or category of things",
                    "A specific member of a class",
                    "A feature or attribute",
                    "A constraint on properties"
                ],
                correct: 1
            },
            {
                question: "Using the university domain example, 'John (a Student)' would be classified as:",
                options: [
                    "A Class",
                    "An Instance",
                    "A Property",
                    "An Axiom"
                ],
                correct: 1
            },
            {
                question: "What is an 'Axiom' in ontology?",
                options: [
                    "A specific instance of a class",
                    "A feature or attribute of a class",
                    "A logical rule that must always be true",
                    "A link between two classes"
                ],
                correct: 2
            },
            {
                question: "Which of the following is a real-world application of ontologies mentioned in the lecture?",
                options: [
                    "SNOMED CT for standardizing medical terms",
                    "Facebook's social network algorithm",
                    "Netflix's recommendation system",
                    "Uber's routing algorithm"
                ],
                correct: 0
            },
            {
                question: "What is a major challenge with ontologies mentioned in the lecture?",
                options: [
                    "They are too fast to implement",
                    "They require domain experts to build and maintain",
                    "They use too little storage space",
                    "They are too simple for complex problems"
                ],
                correct: 1
            },
            {
                question: "Why have modern AI techniques moved beyond Expert Systems and Ontologies?",
                options: [
                    "They are too expensive",
                    "They lack learning capability and don't improve with experience",
                    "They are too fast",
                    "They are too accurate"
                ],
                correct: 1
            },
            {
                question: "Which modern AI technique is mentioned as learning patterns from data automatically and scaling to new problems?",
                options: [
                    "Expert Systems",
                    "Ontologies",
                    "Machine Learning (ML)",
                    "Rule-based systems"
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