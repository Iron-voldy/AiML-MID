// Guessed Exam Paper - IT2011
class QuizApp {
    constructor() {
        this.questions = [
            {
                question: "A smart home system needs to automatically adjust temperature based on occupancy, weather, and user preferences. Which approach is most suitable?",
                options: [
                    "Rule-based IF-ELSE statements",
                    "SQL database queries",
                    "Machine Learning with sensor data",
                    "Manual configuration only",
                    "Simple mathematical formulas"
                ],
                correct: [2],
                multipleChoice: false
            },
            {
                question: "A medical diagnostic system is evaluated on 1000 patients. 150 actually have the disease, 850 are healthy. The system correctly identifies 135 diseased patients and incorrectly flags 60 healthy patients as diseased. Calculate the Precision:",
                options: [
                    "0.90",
                    "0.69",
                    "0.83",
                    "0.75",
                    "0.88"
                ],
                correct: [1],
                multipleChoice: false,
                explanation: "Precision = TP/(TP+FP) = 135/(135+60) = 135/195 = 0.69"
            },
            {
                question: "An autonomous drone needs to learn optimal flight paths while avoiding obstacles and minimizing battery consumption. Which approach is most appropriate?",
                options: [
                    "Supervised Learning with pre-recorded paths",
                    "Unsupervised clustering of flight data",
                    "Reinforcement Learning with reward/penalty system",
                    "Simple GPS navigation",
                    "Manual remote control"
                ],
                correct: [2],
                multipleChoice: false
            },
            {
                question: "Which evaluation metrics are appropriate for a highly imbalanced dataset (95% negative, 5% positive class)? (select all that apply)",
                options: [
                    "Accuracy only",
                    "Precision and Recall",
                    "F1-score",
                    "ROC-AUC",
                    "Confusion Matrix analysis"
                ],
                correct: [1, 2, 3, 4],
                multipleChoice: true
            },
            {
                question: "A language translation app converts English text to multiple languages. Which technologies are most suitable? (select all that apply)",
                options: [
                    "Deep Learning Transformers",
                    "Natural Language Processing",
                    "Simple dictionary lookup",
                    "Neural Machine Translation",
                    "Manual translation tables"
                ],
                correct: [0, 1, 3],
                multipleChoice: true
            },
            {
                question: "A credit risk model shows these results on test data: True Positives: 240, False Positives: 60, True Negatives: 3640, False Negatives: 60. What is the Specificity (True Negative Rate)?",
                options: [
                    "0.80",
                    "0.91",
                    "0.98",
                    "0.85",
                    "0.95"
                ],
                correct: [2],
                multipleChoice: false,
                explanation: "Specificity = TN/(TN+FP) = 3640/(3640+60) = 3640/3700 = 0.98"
            },
            {
                question: "A streaming service wants to recommend movies to users. Which approaches combine effectively? (select all that apply)",
                options: [
                    "Collaborative filtering using user behavior",
                    "Content-based filtering using movie features",
                    "Matrix factorization for dimensionality reduction",
                    "Random movie selection",
                    "Hybrid recommendation systems"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "For preprocessing customer transaction data for fraud detection, which are Feature Engineering activities? (select all that apply)",
                options: [
                    "Converting transaction time to 'hour of day' and 'day of week'",
                    "Creating 'average transaction amount per month' feature",
                    "Selecting Random Forest vs SVM algorithm",
                    "One-hot encoding merchant categories",
                    "Computing 'days since last transaction' feature"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "A researcher builds a house price prediction model using area, bedrooms, and location. The results show: Actual prices: [200k, 250k, 300k, 350k, 400k], Predicted: [190k, 260k, 290k, 360k, 380k]. If the mean actual price is 300k, what is the approximate R² value?",
                options: [
                    "0.75",
                    "0.88",
                    "0.92",
                    "0.65",
                    "0.80"
                ],
                correct: [1],
                multipleChoice: false,
                explanation: "Calculate SSE = sum of (actual-predicted)² and SST = sum of (actual-mean)². R² = 1 - SSE/SST ≈ 0.88"
            },
            {
                question: "Which tasks are well-suited for Generative AI applications? (select all that apply)",
                options: [
                    "Creating personalized email marketing content",
                    "Generating code from natural language descriptions",
                    "Predicting customer churn probability",
                    "Creating synthetic training data for ML models",
                    "Fraud detection in real-time transactions"
                ],
                correct: [0, 1, 3],
                multipleChoice: true
            },
            {
                question: "An image recognition system needs to classify photos as indoor/outdoor scenes. Which approach is most appropriate?",
                options: [
                    "Manual pixel analysis",
                    "Simple color histogram comparison",
                    "Convolutional Neural Networks (CNN)",
                    "Rule-based keyword detection",
                    "SQL pattern matching"
                ],
                correct: [2],
                multipleChoice: false
            },
            {
                question: "What are the main limitations of Expert Systems compared to Machine Learning? (select all that apply)",
                options: [
                    "Cannot automatically learn patterns from data",
                    "Require extensive manual rule creation by domain experts",
                    "Poor performance with noisy or uncertain data",
                    "Limited scalability to complex, unstructured domains",
                    "Always require supervised learning datasets"
                ],
                correct: [0, 1, 2, 3],
                multipleChoice: true
            },
            {
                question: "In a hospital management ontology with entities: Patient, Doctor, Treatment, Disease, and Symptom. What are valid advantages? (select all that apply)",
                options: [
                    "Enables automated medical diagnosis without doctors",
                    "Supports semantic reasoning about medical relationships",
                    "Provides structured representation of medical knowledge",
                    "Facilitates complex medical queries and decision support",
                    "Improves interoperability between different hospital systems"
                ],
                correct: [1, 2, 3, 4],
                multipleChoice: true
            },
            {
                question: "A social media platform analyzes user engagement with 12 features: likes, comments, shares, time spent, etc. After PCA, the first 4 components explain 85% variance. What can be concluded? (select all that apply)",
                options: [
                    "Most engagement patterns can be captured in 4 dimensions",
                    "The remaining 8 components contain only 15% of information",
                    "All 12 original features are now completely unnecessary",
                    "Dimensionality reduction from 12 to 4 features is viable",
                    "PCA automatically guarantees improved model accuracy"
                ],
                correct: [0, 1, 3],
                multipleChoice: true
            },
            {
                question: "A chatbot for customer service needs to understand user intents and generate appropriate responses. Which combination is most effective?",
                options: [
                    "Simple keyword matching with pre-written responses",
                    "NLP for intent recognition + Generative AI for responses",
                    "Manual decision trees for all possible conversations",
                    "SQL database lookup for standard responses",
                    "Rule-based pattern matching only"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "Which algorithms require feature scaling/normalization? (select all that apply)",
                options: [
                    "K-Nearest Neighbors (KNN)",
                    "Support Vector Machines (SVM)",
                    "Decision Trees",
                    "Neural Networks",
                    "K-Means Clustering"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "A model evaluation shows: Precision=0.85, Recall=0.78, F1-score=0.81. What does this indicate about the model's performance?",
                options: [
                    "The model has high accuracy but poor generalization",
                    "The model is better at avoiding false positives than false negatives",
                    "The model perfectly balances precision and recall",
                    "The model has poor performance overall",
                    "The model tends to be conservative in positive predictions"
                ],
                correct: [1, 4],
                multipleChoice: true
            },
            {
                question: "An e-commerce site wants to detect fake product reviews. Which approach combines multiple suitable techniques?",
                options: [
                    "Text analysis + Behavioral pattern recognition",
                    "Simple spam keyword filtering only",
                    "Manual review of all content",
                    "NLP sentiment analysis + User activity modeling",
                    "Both a and d"
                ],
                correct: [4],
                multipleChoice: false
            },
            {
                question: "For time series forecasting of stock prices, which factors make this a challenging ML problem? (select all that apply)",
                options: [
                    "High noise and volatility in financial data",
                    "Non-stationary patterns that change over time",
                    "Multiple external factors affecting prices",
                    "Perfect predictability using historical data only",
                    "Market sentiment and psychological factors"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "A manufacturing company implements predictive maintenance for equipment. Which data preprocessing steps are essential? (select all that apply)",
                options: [
                    "Sensor data cleaning and outlier removal",
                    "Time-series feature extraction (moving averages, trends)",
                    "Choosing between Random Forest and Neural Networks",
                    "Normalization of different sensor measurement scales",
                    "Creating failure prediction time windows"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "Cross-validation is used in machine learning to:",
                options: [
                    "Clean and preprocess the raw data",
                    "Select the most relevant features",
                    "Estimate model performance and reduce overfitting",
                    "Generate synthetic training data",
                    "Optimize hyperparameters and assess generalization"
                ],
                correct: [2, 4],
                multipleChoice: true
            },
            {
                question: "A model achieves 98% training accuracy but only 75% validation accuracy. This most likely indicates:",
                options: [
                    "Perfect model performance",
                    "Overfitting to training data",
                    "Underfitting problem",
                    "Good generalization ability",
                    "Need for more complex model"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "Which techniques help address overfitting in machine learning? (select all that apply)",
                options: [
                    "Adding more training data",
                    "Using simpler models with fewer parameters",
                    "Applying regularization (L1/L2)",
                    "Increasing model complexity",
                    "Early stopping during training"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "An online learning platform wants to personalize course recommendations. Which approaches are suitable? (select all that apply)",
                options: [
                    "Collaborative filtering based on similar learners",
                    "Content-based filtering using course topics and difficulty",
                    "Random course suggestions",
                    "Sequential pattern mining of learning paths",
                    "Hybrid recommendation combining multiple approaches"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "In ensemble learning, what are the main benefits? (select all that apply)",
                options: [
                    "Reduced overfitting through model diversity",
                    "Improved prediction accuracy over single models",
                    "Better handling of uncertainty and variance",
                    "Guaranteed faster training time",
                    "Robustness to outliers and noise"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "A search engine wants to rank web pages based on user queries. Which ML techniques are applicable? (select all that apply)",
                options: [
                    "Learning-to-Rank algorithms",
                    "Natural Language Processing for query understanding",
                    "Simple alphabetical sorting",
                    "Click-through rate prediction",
                    "User behavior modeling and personalization"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "What characterizes Big Data problems that require specialized ML approaches? (select all that apply)",
                options: [
                    "Volume: Datasets too large for traditional processing",
                    "Velocity: High-speed data streams requiring real-time processing",
                    "Variety: Multiple data types (text, images, sensors)",
                    "All data fits comfortably in computer memory",
                    "Veracity: Uncertainty and inconsistency in data quality"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "A health monitoring app tracks user activities using smartphone sensors. Which ML pipeline steps are required? (select all that apply)",
                options: [
                    "Sensor data collection and synchronization",
                    "Signal processing and noise reduction",
                    "Feature extraction from time-series data",
                    "Manual labeling of all activities by users",
                    "Activity pattern recognition and classification"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "Which statement about Deep Learning vs Traditional ML is most accurate?",
                options: [
                    "Deep Learning always outperforms traditional ML",
                    "Traditional ML is better for small datasets and interpretability",
                    "Deep Learning requires less computational resources",
                    "Traditional ML handles unstructured data better",
                    "Deep Learning never suffers from overfitting"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "A ride-sharing app optimizes driver-passenger matching in real-time. Which approaches combine effectively? (select all that apply)",
                options: [
                    "Geospatial algorithms for location-based matching",
                    "Predictive modeling for demand forecasting",
                    "Manual dispatch by human operators",
                    "Optimization algorithms for route efficiency",
                    "Real-time decision making with streaming data"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "What are key considerations when deploying ML models to production? (select all that apply)",
                options: [
                    "Model performance monitoring and drift detection",
                    "Scalability to handle real-world data volumes",
                    "Data privacy and security compliance",
                    "Ignoring model updates after deployment",
                    "A/B testing for gradual rollout"
                ],
                correct: [0, 1, 2, 4],
                multipleChoice: true
            },
            {
                question: "An agricultural system predicts crop yields using weather, soil, and satellite imagery data. Which approach is most comprehensive?",
                options: [
                    "Simple weather-based rules only",
                    "Multi-modal ML combining weather, soil, and image data",
                    "Historical average yield predictions",
                    "Manual farmer expertise only",
                    "Single-variable regression on rainfall"
                ],
                correct: [1],
                multipleChoice: false
            },
            {
                question: "Which scenarios benefit most from Reinforcement Learning? (select all that apply)",
                options: [
                    "Game playing with sequential decisions",
                    "Autonomous vehicle navigation",
                    "Static image classification",
                    "Dynamic resource allocation and optimization",
                    "Interactive recommendation systems"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "A content moderation system needs to detect inappropriate posts on social media. What challenges must be addressed? (select all that apply)",
                options: [
                    "Handling multiple languages and cultural contexts",
                    "Distinguishing context and intent in text",
                    "Processing only perfectly formatted text",
                    "Dealing with evolving slang and new forms of inappropriate content",
                    "Balancing automation with human review"
                ],
                correct: [0, 1, 3, 4],
                multipleChoice: true
            },
            {
                question: "In transfer learning for computer vision, what is the typical approach?",
                options: [
                    "Train a completely new model from scratch",
                    "Use pre-trained models and fine-tune for specific tasks",
                    "Only use traditional image processing techniques",
                    "Manually design all image features",
                    "Ignore existing knowledge and start fresh"
                ],
                correct: [1],
                multipleChoice: false
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

            let explanationText = '';
            if (question.explanation) {
                explanationText = `<div class="explanation" style="margin-top: 1rem; padding: 1rem; background: var(--bg-secondary); border-radius: 8px; font-style: italic;"><strong>Explanation:</strong> ${question.explanation}</div>`;
            }

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
                ${explanationText}
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