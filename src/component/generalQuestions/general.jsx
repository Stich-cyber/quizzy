import React, { useState, useEffect } from "react";
import "./general.css";
import { generalQuestions } from "./generalQuestions.js";

function Art() {
  const [quizType, setQuizType] = useState(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const handleQuizStart = (type) => {
    setQuizType(type);
    const questions = generalQuestions
      .filter((q) => q.type === type)
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(questionCount, 20));
    setFilteredQuestions(questions);
  };
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };
  const handleNextQuestion = () => {
    if (
      selectedAnswer === filteredQuestions[currentQuestionIndex].correct_answer
    ) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };
  const handleRestart = () => {
    setQuizType(null);
    setQuestionCount(10);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowScore(false);
  };
  if (!quizType) {
    return (
      <div className="quiz-container">
        <h1>General Questions Quiz</h1>
        <div className="quiz-selection">
          <h2>Select Quiz Type:</h2>
          <button onClick={() => handleQuizStart("multiple")}>
            Multiple Choice
          </button>
          <button onClick={() => handleQuizStart("boolean")}>True/False</button>

          <div className="question-count">
            <label>Number of questions (max 20):</label>
            <input
              type="number"
              min="1"
              max="20"
              value={questionCount}
              onChange={(e) =>
                setQuestionCount(
                  Math.min(20, Math.max(1, parseInt(e.target.value) || 1))
                )
              }
            />
          </div>
        </div>
      </div>
    );
  }
  if (filteredQuestions.length === 0) {
    return (
      <div className="quiz-container">
        <h1>General Questions Quiz</h1>
        <p>No questions available for this type.</p>
        <button onClick={handleRestart}>Back to selection</button>
      </div>
    );
  }
  if (!showScore) {
    const currentQuestion = filteredQuestions[currentQuestionIndex];

    return (
      <div className="quiz-container">
        <h1>
          General Questions Quiz (
          {quizType === "multiple" ? "Multiple Choice" : "True/False"})
        </h1>
        <div className="progress">
          Question {currentQuestionIndex + 1} of {filteredQuestions.length}
        </div>

        <div className="question-card">
          <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />

          {quizType === "multiple" ? (
            <div className="options">
              {[
                ...currentQuestion.incorrect_answers,
                currentQuestion.correct_answer,
              ]
                .sort(() => Math.random() - 0.5)
                .map((option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${
                      selectedAnswer === option ? "selected" : ""
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    {option}
                  </button>
                ))}
            </div>
          ) : (
            <div className="boolean-options">
              <button
                className={`boolean-btn ${
                  selectedAnswer === "True" ? "selected" : ""
                }`}
                onClick={() => handleAnswerSelect("True")}
              >
                True
              </button>
              <button
                className={`boolean-btn ${
                  selectedAnswer === "False" ? "selected" : ""
                }`}
                onClick={() => handleAnswerSelect("False")}
              >
                False
              </button>
            </div>
          )}

          <button
            className="next-btn"
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestionIndex === filteredQuestions.length - 1
              ? "Finish"
              : "Next"}
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="quiz-container">
      <h1>Quiz Completed!</h1>
      <div className="score-section">
        <h2>
          Your score: {score} out of {filteredQuestions.length}
        </h2>
        <button onClick={handleRestart} className="restart-button">
          Start New Quiz
        </button>
      </div>
    </div>
  );
}
export default Art;
