import React from "react";
import "./section2.css";

function Section2({ language }) {
  return (
    <section className="section2">
      <h2 className="section2-title">
        {language === "en" ? "How It Works" : "Как это работает"}
      </h2>
      <p className="section2-subtitle">
        {language === "en"
          ? "Getting started is simple. Follow these three easy steps to join the fun."
          : "Начать просто. Следуйте этим трем простым шагам, чтобы присоединиться к веселью."}
      </p>
      <div className="cards-container">
        <div className="card">
          <i className="fas fa-list-ul"></i>
          <h3 className="card-title">
            {language === "en" ? "1. Pick a Category" : "1. Выберите категорию"}
          </h3>
          <p className="card-description">
            {language === "en"
              ? "Choose from a wide range of topics that pique your interest."
              : "Выбирайте из широкого спектра тем, которые вас заинтересуют."}
          </p>
        </div>
        <div className="card">
          <i className="fas fa-question-circle"></i>
          <h3 className="card-title">
            {language === "en"
              ? "2. Answer Questions"
              : "2. Ответьте на вопросы"}
          </h3>
          <p className="card-description">
            {language === "en"
              ? "Put your knowledge to the test with engaging and challenging questions."
              : "Проверьте свои знания с помощью увлекательных и сложных вопросов."}
          </p>
        </div>
        <div className="card">
          <i className="fas fa-trophy"></i>
          <h3 className="card-title">
            {language === "en"
              ? "3. Get Your Score"
              : "3. Получите свой результат"}
          </h3>
          <p className="card-description">
            {language === "en"
              ? "See your results instantly and compare with others on the leaderboard."
              : "Смотрите результаты мгновенно и сравнивайте с другими в таблице лидеров."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
