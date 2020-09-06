// Functionalities
import React, {useState, useEffect, useContext} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Parts

// Custom Components
// import ChooseLanguage from './Website/ChooseLanguage'

// Contexts
import LangContext from "./contexts/LangContext";

import {AboutContainer} from "./modules/about";
import {ContactContainer} from "./modules/contact"
import {HomeContainer} from "./modules/home"
import Categories from "./components/Categories";
import Header from "./components/Header";
import Aside from "./components/Aside";

function App() {
  // Language state
  const [language, setLanguage] = useState("fr");
  const contextValue = {language, setLanguage};
  document.documentElement.lang = language;

  return (
    <div className="app">
      <Router>
        <Switch>
          <LangContext.Provider value={contextValue}>
            {/* <ChooseLanguage /> */}

            <Header/>
            <div id="container" className="row justify-content-center">
              <section
                id="#view"
                className="col-lg-8 col-sm-12 row justify-content-center "
              >
                <Route path="/" exact component={HomeContainer}/>
                <Route path="/about" component={AboutContainer}/>
                <Route path="/contact" component={ContactContainer}/>
              </section>
              <Aside/>
            </div>

            {/* <Footer /> */}
          </LangContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
