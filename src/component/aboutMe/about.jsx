import React from "react";
import "./about.css";

const About = ({ language }) => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="about-title">
          {language === "en" ? "About Me" : "Обо мне"}
        </h2>
        <p className="about-description">
          {language === "en"
            ? `QuickQuiz is a fun, interactive quiz platform to challenge your knowledge every day. Play solo or with friends! Quizzy ❤️ for quiz lovers. Made by Stich`
            : `QuickQuiz — это увлекательная интерактивная платформа для викторин, которая позволяет ежедневно проверять свои знания. Играйте в одиночку или с друзьями! Quizzy ❤️ для любителей викторин. Сделано Stich`}
        </p>
      </div>
    </div>
  );
};

export default About;
