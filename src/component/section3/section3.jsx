import React from "react";
import "./section3.css";

function Section3({ language, lastScore = 75 }) {
  return (
    <section className="section3">
      <h2 className="section3-title">
        {language === "en" ? "Leaderboard" : "Таблица лидеров"}
      </h2>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>{language === "en" ? "Rank" : "Место"}</th>
            <th>{language === "en" ? "Player" : "Игрок"}</th>
            <th>{language === "en" ? "Score" : "Очки"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ethan Carter</td>
            <td>95</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Olivia Bennett</td>
            <td>92</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Noah Thompson</td>
            <td>88</td>
          </tr>
        </tbody>
      </table>

      <div className="last-score">
        <h3>
          {language === "en" ? "Your Last Score" : "Ваш последний результат"}
        </h3>
        <p className="score-number">{lastScore}</p>
        <p className="score-tip">
          {language === "en"
            ? "Keep playing to improve your score and climb the ranks!"
            : "Продолжайте играть, чтобы улучшить результат и подняться в таблице!"}
        </p>
      </div>
    </section>
  );
}

export default Section3;
