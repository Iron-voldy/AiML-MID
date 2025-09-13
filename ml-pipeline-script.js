// ML Pipeline Quiz Application
class QuizApp {
    constructor() {
        this.questions = [
            {
                question: "What is a Machine Learning Pipeline?",
                options: [
                    "A specific machine learning algorithm",
                    "A sequence of steps that transforms raw data into valuable predictions using ML techniques",
                    "A type of neural network architecture",
                    "A data visualization tool"
                ],
                correct: 1
            },
            {
                question: "Which of the following is NOT one of the 7 key stages in the ML Pipeline?",
                options: [
                    "Data Collection",
                    "Feature Engineering",
                    "Model Deployment",
                    "Database Administration"
                ],
                correct: 3
            },
            {
                question: "What are the three key components of Problem Definition in ML projects?",
                options: [
                    "Data, Model, Evaluation",
                    "Understanding Domain, Identifying Business Objective, Determining ML Task Type",
                    "Training, Testing, Validation",
                    "Input, Process, Output"
                ],
                correct: 1
            },
            {
                question: "Which type of data is described as 'free-form text, images, audio' that is not easily searchable?",
                options: [
                    "Structured Data",
                    "Semi-structured Data",
                    "Unstructured Data",
                    "Preprocessed Data"
                ],
                correct: 2
            },
            {
                question: "What is the main purpose of handling missing data in preprocessing?",
                options: [
                    "To increase the dataset size",
                    "To make the data searchable",
                    "To clean and prepare data for machine learning models",
                    "To convert text to numbers"
                ],
                correct: 2
            },
            {
                question: "Which encoding method should you use ONLY when there is a meaningful order in categories (like Low, Medium, High)?",
                options: [
                    "One-Hot Encoding",
                    "Label Encoding",
                    "Target Encoding",
                    "Binary Encoding"
                ],
                correct: 1
            },
            {
                question: "What is the key principle of Feature Engineering mentioned in the notes?",
                options: [
                    "More features always lead to better models",
                    "Good features can make simple models powerful, while poor features can render complex models useless",
                    "Feature engineering is only needed for deep learning",
                    "All features should be numerical"
                ],
                correct: 1
            },
            {
                question: "Which feature selection technique removes features with low variance (features that don't vary much)?",
                options: [
                    "Mutual Information",
                    "SelectKBest",
                    "Variance Threshold",
                    "Model-Based Selection"
                ],
                correct: 2
            },
            {
                question: "What is the main difference between Filter and Wrapper methods in feature selection?",
                options: [
                    "Filter methods are slower than Wrapper methods",
                    "Filter methods use statistical tests independent of ML algorithm, while Wrapper methods evaluate features using a predictive model",
                    "Filter methods are more accurate than Wrapper methods",
                    "There is no difference between them"
                ],
                correct: 1
            },
            {
                question: "What does PCA (Principal Component Analysis) do?",
                options: [
                    "Selects the best original features",
                    "Removes outliers from data",
                    "Combines features to create new transformed features that capture essential information",
                    "Handles missing values"
                ],
                correct: 2
            },
            {
                question: "What is a hyperparameter?",
                options: [
                    "A parameter learned by the model from data",
                    "A setting you define before training the model",
                    "The output of the model",
                    "The training accuracy"
                ],
                correct: 1
            },
            {
                question: "In Grid Search hyperparameter tuning, what happens?",
                options: [
                    "Random combinations are tested",
                    "Only one parameter is tuned at a time",
                    "All possible combinations of provided hyperparameter values are tried",
                    "Parameters are tuned manually"
                ],
                correct: 2
            },
            {
                question: "How does 5-Fold Cross-Validation work?",
                options: [
                    "Data is split into 5 parts, train on 1 part, test on 4 parts",
                    "Data is split into 5 parts, train on 4 parts, test on 1 part, repeat 5 times",
                    "The model is trained 5 times with different algorithms",
                    "5 different datasets are used"
                ],
                correct: 1
            },
            {
                question: "What are the signs of an overfitted model?",
                options: [
                    "Low training accuracy, low test accuracy",
                    "High training accuracy, high test accuracy",
                    "Very high training accuracy (~100%), low test accuracy (~60-70%)",
                    "Medium training accuracy, high test accuracy"
                ],
                correct: 2
            },
            {
                question: "Which technique is NOT mentioned as a way to fix overfitting?",
                options: [
                    "Use simpler model",
                    "Add more training data",
                    "Early stopping",
                    "Increase model complexity"
                ],
                correct: 3
            },
            {
                question: "What does MAE stand for in regression evaluation metrics?",
                options: [
                    "Maximum Absolute Error",
                    "Mean Absolute Error",
                    "Minimum Absolute Error",
                    "Median Absolute Error"
                ],
                correct: 1
            },
            {
                question: "In classification problems, what does Precision measure?",
                options: [
                    "Overall correctness",
                    "Coverage of actual positives",
                    "Correctness of positive predictions",
                    "Balance between recall and accuracy"
                ],
                correct: 2
            },
            {
                question: "What is the main goal of Model Deployment?",
                options: [
                    "To train the model faster",
                    "To make the trained model available for real-world use",
                    "To evaluate model performance",
                    "To collect more data"
                ],
                correct: 1
            },
            {
                question: "Which data issue is described as 'disguised missing data' in the notes?",
                options: [
                    "Noisy data with outliers",
                    "Inconsistent codes or names",
                    "Intentional errors like Jan. 1 as everyone's birthday",
                    "Incomplete attribute values"
                ],
                correct: 2
            },
            {
                question: "According to the notes, what should you do after model deployment?",
                options: [
                    "Delete the training data",
                    "Stop monitoring the model",
                    "Monitor model performance and handle user feedback",
                    "Deploy more models immediately"
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