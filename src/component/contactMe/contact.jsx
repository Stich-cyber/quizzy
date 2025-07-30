import React from "react";
import "./contact.css";
const Contact = ({ language }) => {
  return (
    <div className="contact-page">
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <h3>{language === "en" ? "Contact Form" : "Контактная форма"}</h3>
        <input
          type="text"
          placeholder={language === "en" ? "Your Name" : "Ваше имя"}
          required
        />
        <input
          type="email"
          placeholder={
            language === "en" ? "Your Email" : "Ваш адрес электронной почты"
          }
          required
        />
        <textarea
          placeholder={language === "en" ? "Your Message" : "Ваше сообщение"}
          required
        ></textarea>
        <button type="submit">
          {language === "en" ? "Send Message" : "Отправить сообщение"}
        </button>
      </form>

      <div className="social-media">
        <h3>{language === "en" ? "Follow Me" : "Подписывайтесь на меня"}</h3>
        <div className="social-icons">
          {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
            <a
              key={social}
              href={`https://${social}.com`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social}
              className={`icon-${social}`}
            >
              <i className={`fab fa-${social}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
