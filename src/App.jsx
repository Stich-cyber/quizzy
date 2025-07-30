import React, { useState } from "react";
import "./App.css";
import Container from "./component/container/container";
import Section1 from "./component/section1/section1";
import Section2 from "./component/section2/section2";
import Section3 from "./component/section3/section3";
import Footer from "./component/footer/footer";
import { Routes, Route } from "react-router-dom";
import Category from "./component/category/category.jsx";
import About from "./component/aboutMe/about.jsx";
import Contact from "./component/contactMe/contact.jsx";
import Header from "./component/header/header.jsx";

function App() {
  const [language, setLanguage] = useState("en");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container>
      <Header
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Section1 language={language} />
                <Section2 language={language} />
                <Section3 language={language} />
              </>
            }
          />
          <Route
            path="/category"
            element={<Category language={language} darkMode={darkMode} />}
          />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/contact" element={<Contact language={language} />} />
        </Routes>
      </main>
      <Footer darkMode={darkMode} language={language} />
    </Container>
  );
}

export default App;
