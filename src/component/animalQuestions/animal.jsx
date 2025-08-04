import React, { useState, useEffect } from "react";
import "./animal.css";
import { animalQuestions } from "./animalBase.js";

export function Animal() {
  const [quizType, setQuizType] = useState(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [showHeader, setShowHeader] = useState(true);
  const [showDock, setShowDock] = useState(true);

  useEffect(() => {
    if (quizType) {
      setShowHeader(false);
      setShowDock(false);
    }
  }, [quizType]);

  const handleQuizStart = (type) => {
    setQuizType(type);
    const questions = animalQuestions
      .filter((q) => q.type === type)
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(questionCount, 20));
    setFilteredQuestions(questions);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) return;

    const isCorrect =
      selectedAnswer === filteredQuestions[currentQuestionIndex].correct_answer;

    if (isCorrect) {
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
    setShowHeader(true);
    setShowDock(true);
  };

  const handleBackToHome = () => {
    window.location.href = "/";
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  return (
    <div className="animal-quiz-container">
      {!quizType ? (
        <div className="wireframe-container">
          <div className="wireframe-box">
            <h1 className="wireframe-title"> Animal Quiz</h1>

            <div className="wireframe-section">
              <h3>Number of questions:</h3>
              <div className="question-input-container">
                <label className="input-label">
                  Questions: {questionCount}
                </label>
                <input
                  type="number"
                  min="5"
                  max="20"
                  value={questionCount}
                  onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                  className="question-count-input"
                />
              </div>
            </div>

            <div className="wireframe-section">
              <h3>Select quiz type:</h3>
              <div className="wireframe-buttons">
                <button
                  className="wireframe-btn"
                  onClick={() => handleQuizStart("multiple")}
                >
                  Multiple Choice
                </button>
                <button
                  className="wireframe-btn"
                  onClick={() => handleQuizStart("boolean")}
                >
                  True/False
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : showScore ? (
        <div className="wireframe-container">
          <div className="wireframe-box">
            <h1 className="wireframe-title">🎉 Quiz Completed!</h1>

            <div className="wireframe-result">
              <h2>
                You scored: {score} out of {filteredQuestions.length}
              </h2>
            </div>

            <div className="wireframe-buttons">
              <button className="wireframe-btn" onClick={handleRestart}>
                Retry Quiz
              </button>
              <button className="wireframe-btn" onClick={handleBackToHome}>
                Back to Home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="wireframe-container">
          <div className="wireframe-box">
            <div className="wireframe-header">
              <span>
                Question {currentQuestionIndex + 1} of{" "}
                {filteredQuestions.length}
              </span>
              <span>Category: Animals</span>
            </div>

            <div className="wireframe-question">
              <h2 className="h2">{currentQuestion?.question || ""}</h2>
            </div>

            <div className="wireframe-answers">
              {quizType === "multiple" ? (
                [
                  ...currentQuestion.incorrect_answers,
                  currentQuestion.correct_answer,
                ]
                  .sort(() => Math.random() - 0.5)
                  .map((option, idx) => (
                    <label key={idx} className="wireframe-option">
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => handleAnswerSelect(option)}
                      />
                      <span>{option}</span>
                    </label>
                  ))
              ) : (
                <>
                  <label className="wireframe-option">
                    <input
                      type="radio"
                      name="answer"
                      value="True"
                      checked={selectedAnswer === "True"}
                      onChange={() => handleAnswerSelect("True")}
                    />
                    <span>True</span>
                  </label>
                  <label className="wireframe-option">
                    <input
                      type="radio"
                      name="answer"
                      value="False"
                      checked={selectedAnswer === "False"}
                      onChange={() => handleAnswerSelect("False")}
                    />
                    <span>False</span>
                  </label>
                </>
              )}
            </div>

            <button
              className={`wireframe-next-btn ${
                !selectedAnswer ? "disabled" : ""
              }`}
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
            >
              {currentQuestionIndex === filteredQuestions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
