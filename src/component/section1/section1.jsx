import React, { useState, useEffect } from "react";
import "./section1.css";
import { useNavigate } from "react-router-dom";

function Section1({ language }) {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    navigate("/category");
  };

  return (
    <>
      <section className="section1">
        <h1 className="title">
          {language === "en"
            ? "Test Your Knowledge!"
            : "Проверьте свои знания!"}
        </h1>
        <p className="title-p">
          {language === "en"
            ? "Quizzy is your daily dose of fun and knowledge.Challange yourself andclimb the leaderboard"
            : "Quizzy — это ваша ежедневная доза веселья и знаний. Испытайте себя и поднимитесь в таблице лидеров."}
        </p>
        <button className="title-btn" onClick={handleStartQuiz}>
          {language === "en" ? "Start Quiz" : "Начать викторину"}
        </button>
      </section>
    </>
  );
}

export default Section1;
