// Functionalities
import React, {useState} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Parts

// Custom Components
// import ChooseLanguage from './Website/ChooseLanguage'

// Contexts
import LangContext from "../contexts/LangContext";

import {AboutContainer} from "../../about";
import {ContactContainer} from "../../contact"
import {HomeContainer} from "../../home"
import Categories from "../../../components/Categories";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Aside from "../../home/components/aside/Aside";

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
            <Footer/>
          </LangContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
