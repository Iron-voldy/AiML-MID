// Logistic Regression Quiz Application
class QuizApp {
    constructor() {
        this.questions = [
            {
                question: "What is logistic regression primarily used for?",
                options: [
                    "Predicting continuous numerical values",
                    "Clustering data points",
                    "Binary classification problems with dichotomous variables",
                    "Dimensionality reduction"
                ],
                correct: 2
            },
            {
                question: "Why can't we use linear regression for binary classification problems?",
                options: [
                    "Linear regression is too slow",
                    "Linear regression can predict values outside the range [0,1], which doesn't make sense for probabilities",
                    "Linear regression requires too much data",
                    "Linear regression is only for continuous variables"
                ],
                correct: 1
            },
            {
                question: "What is the sigmoid function formula?",
                options: [
                    "S(x) = x / (1 + x)",
                    "S(x) = 1 / (1 + e^(-x))",
                    "S(x) = e^x / (1 + e^x)",
                    "S(x) = log(1 + e^x)"
                ],
                correct: 1
            },
            {
                question: "What is a key property of the sigmoid function?",
                options: [
                    "It maps values to a range between -1 and 1",
                    "It creates a linear relationship",
                    "It maps any real number to a value between 0 and 1",
                    "It only works with positive numbers"
                ],
                correct: 2
            },
            {
                question: "What does the sigmoid function create graphically?",
                options: [
                    "A straight line",
                    "A parabolic curve",
                    "An S-shaped curve",
                    "A circular pattern"
                ],
                correct: 2
            },
            {
                question: "In logistic regression, what does P represent in the model formula?",
                options: [
                    "The parameter coefficient",
                    "The probability of the event occurring",
                    "The predicted class label",
                    "The number of features"
                ],
                correct: 1
            },
            {
                question: "What is the logit function?",
                options: [
                    "The inverse of the sigmoid function",
                    "The natural logarithm of the odds: log(P/(1-P))",
                    "The derivative of probability",
                    "The square root of probability"
                ],
                correct: 1
            },
            {
                question: "What does the logit transformation accomplish?",
                options: [
                    "Maps probabilities [0,1] to real numbers [-∞, +∞] and linearizes the relationship",
                    "Converts continuous values to discrete categories",
                    "Reduces the number of features",
                    "Eliminates outliers from the data"
                ],
                correct: 0
            },
            {
                question: "What method is used for parameter estimation in logistic regression?",
                options: [
                    "Ordinary Least Squares (OLS)",
                    "Maximum Likelihood Estimation (MLE)",
                    "Gradient Descent only",
                    "Random sampling"
                ],
                correct: 1
            },
            {
                question: "What is the typical decision threshold used in logistic regression?",
                options: [
                    "0.3",
                    "0.5",
                    "0.7",
                    "1.0"
                ],
                correct: 1
            },
            {
                question: "If the predicted probability P = 0.7 and we use a threshold of 0.5, what would be the classification?",
                options: [
                    "Class 2 (since P < 0.5)",
                    "Class 1 (since P ≥ 0.5)",
                    "Cannot determine",
                    "Both classes equally likely"
                ],
                correct: 1
            },
            {
                question: "Which of the following is an advantage of logistic regression over linear regression for classification?",
                options: [
                    "It's always faster to compute",
                    "It outputs probabilities, not just classifications",
                    "It requires less data",
                    "It works only with categorical features"
                ],
                correct: 1
            },
            {
                question: "Logistic regression is less sensitive to what compared to linear regression?",
                options: [
                    "Missing data",
                    "Categorical variables",
                    "Outliers",
                    "Small datasets"
                ],
                correct: 2
            },
            {
                question: "Which of the following is NOT a typical application of logistic regression?",
                options: [
                    "Email spam detection",
                    "Medical diagnosis (disease/no disease)",
                    "Predicting house prices",
                    "Marketing (buy/don't buy)"
                ],
                correct: 2
            },
            {
                question: "What type of curve does linear regression produce?",
                options: [
                    "S-shaped curve",
                    "Straight line",
                    "Parabolic curve",
                    "Exponential curve"
                ],
                correct: 1
            },
            {
                question: "What is the main difference in output between linear and logistic regression?",
                options: [
                    "Linear regression outputs categories, logistic outputs numbers",
                    "Linear regression outputs continuous values, logistic outputs probabilities (0-1)",
                    "Both output the same type of values",
                    "Linear regression is faster than logistic regression"
                ],
                correct: 1
            },
            {
                question: "In the logistic regression model, what do β₁, β₂, ..., βₚ represent?",
                options: [
                    "The predicted probabilities",
                    "The input features",
                    "The coefficients for features x₁, x₂, ..., xₚ",
                    "The error terms"
                ],
                correct: 2
            },
            {
                question: "What is the first step in making predictions with logistic regression?",
                options: [
                    "Apply the sigmoid function",
                    "Calculate the linear combination: z = β₀ + β₁x₁ + β₂x₂ + ... + βₚxₚ",
                    "Apply the decision threshold",
                    "Normalize the features"
                ],
                correct: 1
            },
            {
                question: "Can the decision threshold (cutoff value) in logistic regression be adjusted?",
                options: [
                    "No, it must always be 0.5",
                    "Yes, it can be adjusted based on specific problem requirements",
                    "Only if using Maximum Likelihood Estimation",
                    "Only for medical applications"
                ],
                correct: 1
            },
            {
                question: "What assumption does logistic regression NOT require that linear regression does?",
                options: [
                    "Independence of observations",
                    "Features to be normally distributed",
                    "No multicollinearity",
                    "Large sample size"
                ],
                correct: 1
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