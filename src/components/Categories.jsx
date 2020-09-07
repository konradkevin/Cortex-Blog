import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

// Styles

import LangContext from "../modules/app/contexts/LangContext";

import '../css/Categories.css';

function Categories() {
  const {language, setLanguage} = useContext(LangContext);

  // FONCTIONS LANGUES
  const assignLang = () => {
    switch (language) {
      case 'fr':
        return {
          biology: 'Biologie',
          physics: 'Physique',
          chimestry: 'Chimie',
          math: 'Mathématiques',
          neuropsycho: 'Neuropsychologie',
          about: 'À propos',
          contact: 'Contact',
          discover: 'Découvrir',
          cit_biology: 'Biologie',
          cit_physics: 'Rien ne se perd, rien ne se crée, tout se transforme .',
          cit_chimestry: 'Chimie',
          cit_math: 'Mathématiques',
          cit_neuropsycho: 'Neuropsychologie',
        }
      case 'en':
        return {
          biology: 'Biology',
          physics: 'Physics',
          chimestry: 'Chemistry',
          math: 'Mathematics',
          neuropsycho: 'Neuropsychology',
          about: 'About',
          contact: 'Contact',
          discover: 'Discover',
          citation: "On attend de la biologie qu'elle rende intelligible l'aventure de l'espèce. ",
          cit_biology: 'Biologie',
          cit_physics: 'Nothing is lost, nothing is created, everything is transformed .',
          cit_chimestry: 'Chimie',
          cit_math: 'Mathématiques',
          cit_neuropsycho: 'Neuropsychologie',
        }
      case 'es':
        return {
          biology: 'Biología',
          physics: 'Físico',
          chimestry: 'Química',
          math: 'Matemáticas',
          neuropsycho: 'Neuropsicología',
          about: 'Acerca de',
          contact: 'Contacto',
          discover: 'Descubrir',
          citation: "On attend de la biologie qu'elle rende intelligible l'aventure de l'espèce .",
          cit_biology: 'Biologie',
          cit_physics: 'Nada se pierde, nada se crea, todo se transforma .',
          cit_chimestry: 'Chimie',
          cit_math: 'Mathématiques',
          cit_neuropsycho: 'Neuropsychologie',
        }
      default:
        break;
    }
  };

  return (
    <section className='col-12'>
      <main class="page-content-categories">
        <div class="card-categories">
          <div class="content-categories">
            <h2 class="title-categories">{assignLang().biology}</h2>
            <p class="copy">" {assignLang().cit_biology} "</p>
            <button class="btn-categories">{assignLang().discover}</button>
          </div>
        </div>
        <div class="card-categories">
          <div class="content-categories">
            <h2 class="title-categories">{assignLang().physics}</h2>
            <p class="copy">" {assignLang().cit_physics} "</p>
            <button class="btn-categories">{assignLang().discover}</button>
          </div>
        </div>
        <div class="card-categories">
          <div class="content-categories">
            <h2 class="title-categories">{assignLang().chimestry}</h2>
            <p class="copy">" {assignLang().cit_chimestry} "</p>
            <button class="btn-categories">{assignLang().discover}</button>
          </div>
        </div>
        <div class="card-categories">
          <div class="content-categories">
            <h2 class="title-categories">{assignLang().math}</h2>
            <p class="copy">" {assignLang().cit_math} "</p>
            <button class="btn-categories">{assignLang().discover}</button>
          </div>
        </div>
        <div class="card-categories">
          <div class="content-categories">
            <h2 class="title-categories">{assignLang().neuropsycho}</h2>
            <p class="copy">" {assignLang().cit_neuropsycho} "</p>
            <button class="btn-categories">{assignLang().discover}</button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Categories;
