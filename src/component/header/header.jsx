import React, { useState, useEffect, useRef } from "react";
import Dock from "../dock/dock";
import { VscHome, VscInfo, VscMail, VscSettingsGear } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";

function Header({ language, setLanguage, darkMode, setDarkMode }) {
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const settingsRef = useRef(null);
  const settingsDockItemRef = useRef(null);
  const navigate = useNavigate();

  const [isOpaque, setIsOpaque] = useState(false);
  const [isCursorOverHeader, setIsCursorOverHeader] = useState(false);
  const [isCursorOverFooter, setIsCursorOverFooter] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
      document.body.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  useEffect(() => {
    function handleClickOutside(event) {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettingsDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const footerElement = document.querySelector("footer.footer");
    footerRef.current = footerElement;

    function handleScroll() {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerTop <= windowHeight && !isCursorOverHeader) {
        setIsOpaque(true);
      } else {
        setIsOpaque(false);
      }
    }

    function handleMouseMove(event) {
      if (!footerRef.current) return;
      const footerRect = footerRef.current.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;
      if (
        x >= footerRect.left &&
        x <= footerRect.right &&
        y >= footerRect.top &&
        y <= footerRect.bottom
      ) {
        setIsCursorOverFooter(true);
      } else {
        setIsCursorOverFooter(false);
      }
    }

    window.addEventListener("click", handleScroll);
    window.addEventListener("click", handleMouseMove);

    return () => {
      window.removeEventListener("click", handleScroll);
      window.removeEventListener("click", handleMouseMove);
    };
  }, [isCursorOverHeader]);
  function onHeaderMouseEnter() {
    setIsCursorOverHeader(true);
    setIsOpaque(false);
  }

  function onHeaderMouseLeave() {
    setIsCursorOverHeader(false);
    if (footerRef.current) {
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerTop <= windowHeight && !isCursorOverFooter) {
        setIsOpaque(true);
      }
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const dockItems = [
    {
      icon: <VscHome size={24} />,
      label: language === "en" ? "Home" : "Главная",
      onClick: () => {
        navigate("/");
        window.scrollTo(0, 0);
      },
    },
    {
      icon: <VscInfo size={24} />,
      label: language === "en" ? "About" : "О нас",
      onClick: () => {
        navigate("/about");
        window.scrollTo(0, 0);
      },
    },
    {
      icon: <VscMail size={24} />,
      label: language === "en" ? "Contact" : "Контакты",
      onClick: () => {
        navigate("/contact");
        window.scrollTo(0, 0);
      },
    },
    {
      icon: <VscSettingsGear size={24} />,
      label: language === "en" ? "Settings" : "Настройки",
      onClick: () => setShowSettingsDropdown(!showSettingsDropdown),
      className: "settings-dock-item",
      ref: settingsDockItemRef,
    },
  ];

  return (
    <header
      className={`header ${darkMode ? "dark-mode" : ""} ${
        isOpaque ? "opacity" : ""
      }`}
      onMouseEnter={onHeaderMouseEnter}
      onMouseLeave={onHeaderMouseLeave}
    >
      <Dock items={dockItems} darkMode={darkMode} />
      <AnimatePresence>
        {showSettingsDropdown && (
          <motion.div
            className="services-menu"
            ref={settingsRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: settingsDockItemRef.current
                ? settingsDockItemRef.current.getBoundingClientRect().top - 10
                : "auto",
              left: settingsDockItemRef.current
                ? settingsDockItemRef.current.getBoundingClientRect().left
                : "auto",
              zIndex: 1001,
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="settings-label"
          >
            <div className="service-option">
              <button className="theme-toggle-btn" onClick={toggleDarkMode}>
                {darkMode ? (
                  <>
                    <i className="fas fa-sun"></i>
                    <span>
                      {language === "en" ? "Light Mode" : "Светлый режим"}
                    </span>
                  </>
                ) : (
                  <>
                    <i className="fas fa-moon"></i>
                    <span>
                      {language === "en" ? "Dark Mode" : "Темный режим"}
                    </span>
                  </>
                )}
              </button>
            </div>
            <div className="service-option">
              <div className="language-selector">
                <div
                  className={`language-option ${
                    language === "en" ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange("en")}
                >
                  <span>English</span>
                  {language === "en" && <i className="fas fa-check"></i>}
                </div>
                <div
                  className={`language-option ${
                    language === "ru" ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange("ru")}
                >
                  <span>Русский</span>
                  {language === "ru" && <i className="fas fa-check"></i>}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
