import React, { useState, useEffect, useContext } from 'react';

// Styles
import '../css/Footer.css';
import imgLogo from '../media/img/logo.png'
import iconTwitter from '../media/icons/twitterB.png'
import iconFacebook from '../media/icons/facebookB.png'
import iconInstagram from '../media/icons/instagramB.png'
// Contexts
import LangContext from "../contexts/LangContext";


function Footer() {





    const { language, setLanguage } = useContext(LangContext);

    // FONCTIONS LANGUES
    const assignLang = () => {
        switch (language) {
            case 'fr':
                return {
                    home: 'Accueil',
                    biology: 'Biologie',
                    physics: 'Physique',
                    chimestry: 'Chimie',
                    math: 'Mathématiques',
                    neuropsycho: 'Neuropsychologie',
                    about: 'À propos',
                    contact: 'Contact',
                    about_title: 'À propos de nous',
                    about_text: 'Le Collectif est un groupe d’étudiants et de journalistes consciencieux dispersés à travers le monde, déterminés à avoir un impact positif sur l’avenir de la culture scientifique. '

                }
                break;
            case 'en':
                return {
                    home: 'Home',
                    biology: 'Biology',
                    physics: 'Physics',
                    chimestry: 'Chemistry',
                    math: 'Mathematics',
                    neuropsycho: 'Neuropsychology',
                    about: 'About',
                    contact: 'Contact',
                    about_title: 'About us',
                    about_text: "The Collective is a group of conscientious students and journalists around the world, determined to have a positive impact on the future of scientific culture."

                }
                break;
            case 'es':
                return {
                    home: 'Bienvenidos',
                    biology: 'Biología',
                    physics: 'Físico',
                    chimestry: 'Química',
                    math: 'Matemáticas',
                    neuropsycho: 'Neuropsicología',
                    about: 'Acerca de',
                    contact: 'Contacto',
                    about_title: 'À propos de nous',
                    about_text: 'El Colectivo es un grupo de estudiantes y periodistas concienzudos repartidos por todo el mundo, decididos a tener un impacto positivo en el futuro de la cultura científica.'

                }
                break;
            default:
                break;
        }
    };

    return (
        <footer class="footer-distributed">

            <div class="footer-left">

                <div style={{ maxWidth: '40em' }}>
                    <img src={imgLogo} style={{ width: '100%' }} alt="" />
                </div>



                <p class="footer-links">
                    <a href="#" class="link-1"><a href="#">{assignLang().home}</a></a>
                    <a href="#">{assignLang().biology}</a>
                    <a href="#">{assignLang().physics}</a>
                    <a href="#">{assignLang().chimestry}</a>
                    <a href="#">{assignLang().math}</a>
                    <a href="#">{assignLang().neuropsycho}</a>
                    <a href="#">{assignLang().about}</a>
                    <a href="#">{assignLang().contact}</a>
                </p>

                <p class="footer-company-name">Scientifacts © 2015</p>
            </div>

            <div class="footer-center">

                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>Possiblement une adresse</span> Pour envoyer des lettres</p>
                </div>

                <div>
                    <i class="fa fa-phone"></i>
                    <p>numéro de telephone ?</p>
                </div>

                <div>

                    <p><a href="" style={{ color: 'white' }} className='footer-email'>la.laborantine.pro@gmail.com</a></p>
                </div>

            </div>

            <div class="footer-right">

                <p class="footer-company-about">
                    <span>{assignLang().about_title}</span>
                    {assignLang().about_text}
                </p>

                <div class="footer-icons">

                    <a href="#">  <img src={iconTwitter} alt="" /></a>
                    <a href="#">  <img src={iconFacebook} alt="" /></a>
                    <a href="#">  <img src={iconInstagram} alt="" /></a>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
