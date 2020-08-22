// Foncionnalities
import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Parts

// Custom Components
// import ChooseLanguage from './Website/ChooseLanguage'

// Contexts
import LangContext from "./contexts/LangContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  // Language state
  const [language, setLanguage] = useState("fr");
  const contextValue = { language, setLanguage };
  document.documentElement.lang = language;

  return (
    <div className="app">
      <Router>
        <Switch>
          <LangContext.Provider value={contextValue}>
            {/* <ChooseLanguage /> */}

            <Header />
            <div id="container" className="row justify-content-center">
              <section
                id="#view"
                className="col-lg-8 col-sm-12 row justify-content-center "
              >
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </section>
              <Aside />
            </div>

            {/* <Footer /> */}
          </LangContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
