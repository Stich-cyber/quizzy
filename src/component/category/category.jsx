import "./category.css";
import { useNavigate } from "react-router-dom";
import Sport from "../sportQuestions/sport";
import Music from "../musicQuestions/music";
import GeneralQuestions from "../generalQuestions/general";
import Geography from "../geographyQuestions/geography";
import Animal from "../animalQuestions/animal";
  import Art from "../artQuestions/art";
  import React, { useState } from "react";
  function Category({ language, darkMode }) {
    const [selectedComponent, setSelectedComponent] = useState(null);

  const categories = [
    {
      name: language === "en" ? "Animals Questions " : "Вопросы о животных",
      color: "#cce4ff",
      icon: <i className="fa-solid fa-paw"></i>,
      component: Animal,
      route: "/animal",
    },
    {
      name: language === "en" ? "Art" : "Искусство",
      color: "#ffe6cc",
      icon: <i className="fa-solid fa-palette"></i>,
      component: Art,
      route: "/art",
    },
    {
      name: language === "en" ? "General Knowledge" : "Общие вопросы",
      color: "#ffcccc",
      icon: <i className="fa-solid fa-web-awesome"></i>,
      component: GeneralQuestions,
      route: "/general",
      
    },
    {
      name: language === "en" ? "Geography" : "Географии ",
      color: "#ffcccc",
      icon: <i className="fa-solid fa-earth-asia"></i>,
      component: Geography,
      route: "/geography",
    },
    {
      name: language === "en" ? "Music" : "Музика",
      color: "#e6ccff",
      icon: <i className="fa-solid fa-music"></i>,
      component: Music,
      route: "/music",
    },
    {
      name: language === "en" ? "Sport" : "Спорт",
      color: "#ccffdd",
      icon: <i className="fa-solid fa-futbol"></i>,
      component: Sport,
      route: "/sport",
    },
    {
      name: language === "en" ? "Random" : "Случайный",
      color: "#fff5cc",
      icon: <i className="fa-solid fa-shuffle"></i>,
      component: null,
      route: "/random",
    },
  ];

  const handleBack = () => {
    setSelectedComponent(null);
  };

  const handleCategoryClick = (cat) => {
    if (cat.name === (language === "en" ? "Random" : "Случайный")) {
      const nonRandomCategories = categories.filter(
        (c) => c.name !== (language === "en" ? "Random" : "Случайный")
      );
      const randomIndex = Math.floor(
        Math.random() * nonRandomCategories.length
      );
      const randomComponent = nonRandomCategories[randomIndex].component;
      setSelectedComponent(() => randomComponent);
    } else {
      setSelectedComponent(() => cat.component);
    }
  };

  if (selectedComponent) {
    const SelectedComp = selectedComponent;
    return (
        <SelectedComp />
    );
  }

  return (
    <div className={`category-page ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1 className="category-title">
        {language === "en" ? "Select a Category" : "Выберите категорию"}
      </h1>
      <p className="category-subtitle">
        {language === "en"
          ? "Choose a topic to test your knowledge."
          : "Выберите тему для проверки своих знаний."}
      </p>
      <div className="category-grid">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => handleCategoryClick(cat)}
            style={{ cursor: "pointer" }}
          >
            <div
              className="category-color-indicator"
              style={{
                backgroundColor: cat.color,
                width: "40px",
                height: "6px",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            ></div>
            <div className="category-icon">{cat.icon}</div>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
