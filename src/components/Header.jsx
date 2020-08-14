import React, { useContext } from 'react';
import { Link } from 'react-router-dom'


// Styles
import '../css/header.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


// Paths
import path_video from '../media/video/dnavideo.mp4';
import path_logo_home from '../media/icons/home.png'

// Contexts
import LangContext from "../contexts/LangContext";


function Header() {

    const { language, setLanguage } = useContext(LangContext);

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
                    contact: 'Contact'
                }
                break;
            case 'en':
                return {
                    biology: 'Biology',
                    physics: 'Physics',
                    chimestry: 'Chemistry',
                    math: 'Mathematics',
                    neuropsycho: 'Neuropsychology',
                    about: 'About',
                    contact: 'Contact'
                }
                break;
            case 'es':
                return {
                    biology: 'Biología',
                    physics: 'Físico',
                    chimestry: 'Química',
                    math: 'Matemáticas',
                    neuropsycho: 'Neuropsicología',
                    about: 'About',
                    contact: 'Contact'
                }
                break;
            default:
                break;
        }
    };





    return (
        <header>

            <div className='video'>
                <video autoPlay loop muted>
                    <source type="video/mp4" src={path_video} />
                </video>
            </div>

            <div className='video_layer'></div>


            <div className='nav-container'>
                <Navbar collapseOnSelect expand="lg" className='navbar col-11' >
                    <Link className='link-img' to='/'><img src={path_logo_home} alt="" /> </Link>
                    <Navbar.Toggle bg='light' />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className='link' to='/about'>{assignLang().biology}</Link>
                            <Link className='link' to='/about'>{assignLang().physics}</Link>
                            <Link className='link' to='/about'>{assignLang().chimestry}</Link>
                            <Link className='link' to='/about'>{assignLang().math}</Link>
                            <Link className='link' to='/about'>{assignLang().neuropsycho}</Link>
                            <Link className='link' to='/about'>{assignLang().about}</Link>
                            <Link className='link' to='/contact'>{assignLang().contact}</Link>
                            {/* <NavDropdown className='link' title={assignLang().articles} id="collasible-nav-dropdown">
                                <Link to='/articles?'>{assignLang().contact}</Link>
                                <Link to='/contact'>{assignLang().contact}</Link>
                                <Link to='/contact'>{assignLang().contact}</Link>
                                <Link to='/contact'>{assignLang().contact}</Link>
                            </NavDropdown> */}
                        </Nav>
                        {/* <Form inline>
                            <FormControl type="text" placeholder="" className="mr-sm-2" />
                            <Button variant="outline-light">Search</Button>
                        </Form> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>

            <div className=' d-flex justify-content-center align-items-center h-100'>
                <div class="concept concept-two d-inline-flex justify-content-center">
                    <div class="hover"><h1>S</h1></div>
                    <div class="hover"><h1>C</h1></div>
                    <div class="hover"><h1>I</h1></div>
                    <div class="hover"><h1>E</h1></div>
                    <div class="hover"><h1>N</h1></div>
                    <div class="hover"><h1>T</h1></div>
                    <div class="hover"><h1>I</h1></div>
                    <div class="hover"><h1>F</h1></div>
                    <div class="hover"><h1>A</h1></div>
                    <div class="hover"><h1>C</h1></div>
                    <div class="hover"><h1>T</h1></div>
                    <div class="hover"><h1>S</h1></div>
                </div>

            </div>
        </header>
    );
}

export default Header;
