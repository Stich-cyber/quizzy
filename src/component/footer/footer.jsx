import React from "react";
import "./footer.css";

function Footer({ language, darkMode }) {
  const logoSrc = darkMode ? "/light_logo.png" : "/dark_logo.png";

  return (
    <footer className={`footer ${darkMode ? "dark-mode" : ""}`}>
      <div className="footer-container">
        <div className="footer-brand">
          <img src={logoSrc} alt="Логотип" className="footer-logo" />
          <p>
            © 2024{" "}
            {language === "en"
              ? "QuickQuiz. All rights reserved."
              : "КвикКвиз. Все права защищены."}
          </p>
        </div>

        <div className="footer-links">
          <h4>{language === "en" ? "Quick Links" : "Быстрые ссылки"}</h4>
          <ul>
            <li>
              <a href="#">{language === "en" ? "Home" : "Главная"}</a>
            </li>
            <li>
              <a href="#">{language === "en" ? "About" : "О нас"}</a>
            </li>
            <li>
              <a href="#">
                {language === "en"
                  ? "Privacy Policy"
                  : "Политика конфиденциальности"}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>{language === "en" ? "Follow Us" : "Следите за нами"}</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/Stich-cyber">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
