// ML & Data Science Quiz Application
class QuizApp {
    constructor() {
        this.questions = [
            {
                question: "A retail company wants to predict customer lifetime value based on purchase history, demographics, and browsing behavior. Which approach is most appropriate?",
                options: [
                    "Rule-based programming",
                    "Supervised Machine Learning",
                    "SQL queries only",
                    "Manual calculation",
                    "Unsupervised clustering"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "In a spam email detection system tested on 1000 emails, 200 are actually spam and 800 are legitimate. The model correctly identifies 180 spam emails but incorrectly flags 50 legitimate emails as spam. What is the Precision?",
                options: [
                    "0.90",
                    "0.78",
                    "0.94",
                    "0.72",
                    "0.85"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "A recommendation system needs to learn optimal strategies for suggesting products to users based on their responses. Which approach is most suitable?",
                options: [
                    "Supervised Learning",
                    "Unsupervised Learning",
                    "Reinforcement Learning",
                    "Rule-based systems",
                    "SQL queries"
                ],
                correct: [2],
                multipleChoice: false
            },
            {
                question: "Which of the following tasks are suitable for Deep Learning? (select all that apply)",
                options: [
                    "Image recognition in medical scans",
                    "Natural language translation",
                    "Calculating simple statistics",
                    "Speech recognition",
                    "Time series forecasting with complex patterns"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "A social media platform wants to automatically detect hate speech in posts. Which method is most appropriate?",
                options: [
                    "Manual review only",
                    "Simple keyword matching",
                    "Natural Language Processing with ML",
                    "SQL pattern matching",
                    "Mathematical formulas"
                ],
                correct: [2],
                multipleChoice: false
            },
            {
                question: "In a binary classification problem, a model has: True Positives: 85, False Positives: 15, True Negatives: 180, False Negatives: 20. What is the Recall (Sensitivity)?",
                options: [
                    "0.85",
                    "0.81",
                    "0.92",
                    "0.75",
                    "0.88"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "A music streaming service wants to create personalized playlists. Which approaches are suitable? (select all that apply)",
                options: [
                    "Collaborative filtering",
                    "Content-based filtering",
                    "Matrix factorization",
                    "Random selection",
                    "Hybrid recommendation systems"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "Which scenarios require Feature Engineering? (select all that apply)",
                options: [
                    "Converting text reviews into sentiment scores",
                    "Creating interaction terms between variables",
                    "Normalizing numerical features",
                    "Selecting the best algorithm",
                    "One-hot encoding categorical variables"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "A hospital wants to predict patient readmission within 30 days using historical data. The dataset has 5000 patients with 15 features. After training a model, R² = 0.72. What does this indicate?",
                options: [
                    "The model explains 72% of variance in readmission",
                    "The model has 72% accuracy",
                    "72% of patients will be readmitted",
                    "The model is 28% wrong",
                    "72% of features are important"
                ],
                correct: [0],
                multipleChoice: false
            },
            {
                question: "Which of the following are advantages of using ontologies in healthcare systems? (select all that apply)",
                options: [
                    "Enables semantic reasoning about medical relationships",
                    "Supports interoperability between hospital systems",
                    "Automatically diagnoses all diseases",
                    "Provides structured medical knowledge representation",
                    "Facilitates complex medical queries"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "A streaming platform analyzes user viewing patterns with 20 features. After PCA, the first 4 components explain 85% variance. What can be concluded? (select all that apply)",
                options: [
                    "Dimensionality can be reduced significantly",
                    "The last 16 components explain 15% variance",
                    "All original features are now useless",
                    "Most information is captured in 4 dimensions",
                    "PCA guarantees better model performance"
                ],
                correct: [0, 1, 3],
                multipleChoice: true
            },
            {
                question: "An autonomous vehicle needs to make real-time driving decisions based on sensor data. Which approach is most suitable?",
                options: [
                    "Pre-written if-else rules",
                    "Deep Reinforcement Learning",
                    "Simple regression models",
                    "Manual programming of all scenarios",
                    "Basic neural networks only"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "Which tasks are better suited for Generative AI? (select all that apply)",
                options: [
                    "Code generation from natural language",
                    "Creating artwork in specific styles",
                    "Fraud detection in transactions",
                    "Writing creative stories",
                    "Customer churn prediction"
                ],
                correct: [0, 1, 3],
                multipleChoice: true
            },
            {
                question: "A credit scoring model shows these results: Class 0 (precision: 0.92, recall: 0.88), Class 1 (precision: 0.78, recall: 0.85), overall accuracy: 0.87. Which metrics are shown? (select all that apply)",
                options: [
                    "Precision per class",
                    "Recall per class",
                    "F1-score per class",
                    "Overall accuracy",
                    "R² score"
                ],
                correct: [0, 1, 3],
                multipleChoice: true
            },
            {
                question: "A manufacturing company wants to detect equipment failures before they occur. Which approach combines multiple suitable methods?",
                options: [
                    "IoT sensors + Machine Learning",
                    "Manual inspection only",
                    "Simple threshold rules",
                    "Predictive maintenance with ML",
                    "Both a and d"
                ],
                correct: [4],
                multipleChoice: false
            },
            {
                question: "In feature selection, which techniques help identify important variables? (select all that apply)",
                options: [
                    "Correlation analysis",
                    "Recursive feature elimination",
                    "Random selection",
                    "Information gain",
                    "L1 regularization (Lasso)"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "A chatbot needs to understand user intents from natural language. Which combination is most effective?",
                options: [
                    "Rule-based pattern matching only",
                    "NLP + Intent classification with ML",
                    "Simple keyword search",
                    "Manual response mapping",
                    "Regular expressions only"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "Which are limitations of Expert Systems compared to ML? (select all that apply)",
                options: [
                    "Cannot adapt to new patterns automatically",
                    "Require extensive domain expert knowledge",
                    "Poor handling of noisy data",
                    "Limited scalability to complex domains",
                    "Always need labeled training data"
                ],
                correct: [0, 1, 2, 3],
                multipleChoice: true
            },
            {
                question: "A dataset has missing values, outliers, and inconsistent formats. Which preprocessing steps are needed? (select all that apply)",
                options: [
                    "Data imputation for missing values",
                    "Outlier detection and treatment",
                    "Data standardization",
                    "Model selection",
                    "Format normalization"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "Time series forecasting for stock prices would benefit from which approaches? (select all that apply)",
                options: [
                    "LSTM neural networks",
                    "ARIMA models",
                    "Random Forest with lag features",
                    "Simple linear regression",
                    "Transformer models"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "A model achieves 95% accuracy on training data but only 70% on test data. This indicates:",
                options: [
                    "Perfect model performance",
                    "Overfitting",
                    "Underfitting",
                    "Good generalization",
                    "Data leakage"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "Which evaluation metrics are appropriate for imbalanced classification? (select all that apply)",
                options: [
                    "Accuracy only",
                    "Precision and Recall",
                    "F1-score",
                    "ROC-AUC",
                    "Confusion matrix analysis"
                ],
                correct: [1, 2, 3, 4],
                multipleChoice: true
            },
            {
                question: "A search engine wants to improve result relevance using user behavior data. Which ML techniques apply? (select all that apply)",
                options: [
                    "Learning to rank algorithms",
                    "Click-through rate prediction",
                    "User preference modeling",
                    "Simple keyword matching",
                    "Personalization with collaborative filtering"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "Feature scaling is important for which algorithms? (select all that apply)",
                options: [
                    "K-means clustering",
                    "Support Vector Machines",
                    "Decision Trees",
                    "Neural Networks",
                    "K-Nearest Neighbors"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "A model's confusion matrix shows: Predicted Pos/Neg, Actual Pos: 120/30, Actual Neg: 25/825. Calculate the Specificity (True Negative Rate):",
                options: [
                    "0.80",
                    "0.97",
                    "0.83",
                    "0.92",
                    "0.88"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "Which scenarios benefit from ensemble methods? (select all that apply)",
                options: [
                    "Reducing overfitting",
                    "Improving prediction accuracy",
                    "Combining diverse models",
                    "Handling model uncertainty",
                    "Reducing computational cost"
                ],
                correct: [0, 1, 2, 3],
                multipleChoice: true
            },
            {
                question: "A recommendation system uses matrix factorization. Which problems does this address? (select all that apply)",
                options: [
                    "Data sparsity",
                    "Scalability",
                    "Cold start problem partially",
                    "Dimensionality reduction",
                    "Eliminating all biases"
                ],
                correct: [0, 1, 2, 3],
                multipleChoice: true
            },
            {
                question: "Cross-validation is used to:",
                options: [
                    "Clean the data",
                    "Select features",
                    "Estimate model performance",
                    "Generate new data",
                    "Both b and c"
                ],
                correct: [2],
                multipleChoice: false
            },
            {
                question: "Which are characteristics of Big Data problems? (select all that apply)",
                options: [
                    "High volume",
                    "High velocity",
                    "High variety",
                    "High veracity",
                    "All data fits in memory"
                ],
                correct: [0, 1, 2, 3],
                multipleChoice: true
            },
            {
                question: "A clustering algorithm groups customers into segments. Which evaluation metrics apply? (select all that apply)",
                options: [
                    "Silhouette score",
                    "Inertia/Within-cluster sum of squares",
                    "Accuracy",
                    "Calinski-Harabasz index",
                    "Precision and Recall"
                ],
                correct: [0, 1, 3],
                multipleChoice: true
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

        // Add instruction for multiple choice questions
        if (question.multipleChoice) {
            const instruction = document.createElement('div');
            instruction.className = 'multiple-choice-instruction';
            instruction.textContent = '(Multiple selections allowed)';
            instruction.style.cssText = 'color: var(--accent-blue); font-size: 0.9rem; margin-bottom: 1rem; font-style: italic;';
            this.optionsElement.appendChild(instruction);
        }

        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.textContent = option;
            optionElement.addEventListener('click', () => this.selectOption(index));

            // Restore previous selections and feedback if exists
            if (this.userAnswers[this.currentQuestion] !== undefined) {
                const userAnswer = this.userAnswers[this.currentQuestion];
                const isSelected = question.multipleChoice ?
                    userAnswer.includes(index) : userAnswer === index;

                if (isSelected) {
                    optionElement.classList.add('selected');
                    // Show feedback for previously selected answer
                    const isCorrect = question.correct.includes(index);
                    if (isCorrect) {
                        optionElement.classList.add('correct');
                        optionElement.innerHTML += ' ✓';
                    } else {
                        optionElement.classList.add('incorrect');
                        optionElement.innerHTML += ' ✗';
                    }
                }
                // Always show correct answers
                if (question.correct.includes(index)) {
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
        const options = this.optionsElement.querySelectorAll('.option');

        if (question.multipleChoice) {
            // Handle multiple selection
            if (!this.userAnswers[this.currentQuestion]) {
                this.userAnswers[this.currentQuestion] = [];
            }

            const currentSelections = this.userAnswers[this.currentQuestion];
            const optionElement = options[index];

            if (currentSelections.includes(index)) {
                // Deselect
                currentSelections.splice(currentSelections.indexOf(index), 1);
                optionElement.classList.remove('selected', 'correct', 'incorrect');
                optionElement.textContent = optionElement.textContent.replace(' ✓', '').replace(' ✗', '');
            } else {
                // Select
                currentSelections.push(index);
                optionElement.classList.add('selected');

                // Show immediate feedback
                if (question.correct.includes(index)) {
                    optionElement.classList.add('correct');
                    optionElement.innerHTML += ' ✓';
                } else {
                    optionElement.classList.add('incorrect');
                    optionElement.innerHTML += ' ✗';
                }
            }

            // Update correct answer highlights
            options.forEach((opt, idx) => {
                if (question.correct.includes(idx)) {
                    opt.classList.add('correct-answer');
                }
            });
        } else {
            // Handle single selection
            // Remove previous selection
            options.forEach(opt => {
                opt.classList.remove('selected', 'correct', 'incorrect');
                opt.textContent = opt.textContent.replace(' ✓', '').replace(' ✗', '');
            });

            // Store user answer
            this.userAnswers[this.currentQuestion] = index;

            // Add selection to clicked option
            options[index].classList.add('selected');

            // Show immediate feedback
            if (question.correct.includes(index)) {
                options[index].classList.add('correct');
                options[index].innerHTML += ' ✓';
            } else {
                options[index].classList.add('incorrect');
                options[index].innerHTML += ' ✗';
                // Also highlight the correct answer
                question.correct.forEach(correctIndex => {
                    options[correctIndex].classList.add('correct-answer');
                });
            }
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
            const question = this.questions[index];
            if (question.multipleChoice) {
                // For multiple choice, check if all correct answers are selected and no incorrect ones
                if (answer && Array.isArray(answer)) {
                    const correctSet = new Set(question.correct);
                    const userSet = new Set(answer);
                    if (correctSet.size === userSet.size &&
                        [...correctSet].every(x => userSet.has(x))) {
                        this.score++;
                    }
                }
            } else {
                // For single choice
                if (question.correct.includes(answer)) {
                    this.score++;
                }
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
            const isCorrect = this.isAnswerCorrect(index);
            reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

            const userAnswer = this.userAnswers[index];
            const answeredText = userAnswer !== undefined ? '' : ' (Not answered)';

            reviewItem.innerHTML = `
                <div class="review-question">
                    ${index + 1}. ${question.question}
                </div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (question.correct.includes(optIndex)) {
                            className += ' correct-answer';
                        }

                        const isUserSelection = question.multipleChoice ?
                            (userAnswer && userAnswer.includes(optIndex)) :
                            userAnswer === optIndex;

                        if (isUserSelection) {
                            className += isCorrect && question.correct.includes(optIndex) ?
                                ' user-selected' : ' user-incorrect';
                        }
                        return `<div class="${className}">${option}</div>`;
                    }).join('')}
                </div>
                <div class="review-status ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}${answeredText}
                </div>
            `;

            this.reviewContent.appendChild(reviewItem);
        });
    }

    isAnswerCorrect(questionIndex) {
        const question = this.questions[questionIndex];
        const userAnswer = this.userAnswers[questionIndex];

        if (userAnswer === undefined) return false;

        if (question.multipleChoice) {
            if (!Array.isArray(userAnswer)) return false;
            const correctSet = new Set(question.correct);
            const userSet = new Set(userAnswer);
            return correctSet.size === userSet.size &&
                   [...correctSet].every(x => userSet.has(x));
        } else {
            return question.correct.includes(userAnswer);
        }
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