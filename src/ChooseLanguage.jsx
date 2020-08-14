import React, { useContext } from 'react';

// Styles
import '../css/choose_language.css';
import { OverlayTrigger } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';

// Contexts
import LangContext from "../contexts/LangContext";


// Paths
import path_logo_fr from '../media/icons/fr.svg';
import path_logo_en from '../media/icons/en.svg';
import path_logo_es from '../media/icons/es.svg';



function ChooseLanguage() {
    const { language, setLanguage } = useContext(LangContext);

    return (
        <>
            <div className='lang-fixed'>
                <OverlayTrigger
                    placement={'right'}
                    overlay={<Tooltip>Français</Tooltip>} >
                    <div className='lang-picker lang-fr' onClick={() => { setLanguage('fr') }}><img src={path_logo_fr} alt='logo fr' /></div>
                </OverlayTrigger>
                <OverlayTrigger
                    placement={'right'}
                    overlay={<Tooltip>English</Tooltip>} >
                    <div className='lang-picker lang-en' onClick={() => { setLanguage('en') }}><img src={path_logo_en} alt='logo en' /></div>
                </OverlayTrigger>
                <OverlayTrigger
                    placement={'right'}
                    overlay={<Tooltip>Español</Tooltip>} >
                    <div className='lang-picker lang-es' onClick={() => { setLanguage('es') }}><img src={path_logo_es} alt='logo es' /></div>
                </OverlayTrigger>
            </div>
        </>
    );
}

export default ChooseLanguage;
