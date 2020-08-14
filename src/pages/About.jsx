import React from 'react';


import '../css/About.css'
import imgAbout from '../media/img/about.jpg'
// Styles
// import { Button } from 'react-bootstrap';
import Card_team from '../component_sub/Card_team'
import Card_team2 from '../component_sub/Card_team2'

function About() {
    return (
        <div className='col-12' style={{ flexWrap: 'wrap' }}>

            <div className='col-12' style={{ display: 'flex', flexWrap: 'wrap', marginTop: '6em', marginBottom: '8em', justifyContent: 'center' }}>
                <div className='col-lg-5 col-sm-8 mb-5 d-flex justify-content-center align-items-center'>
                    <img src={imgAbout} alt="" style={{ borderRadius: '50%', width: '80%' }} />
                </div>
                <div className='col-lg-6 col-sm-12 d-flex justify-content-center align-items-center'>
                    <p style={{ fontSize: '1.5em', textAlign: 'center' }}>  Le Collectif est un groupe d’étudiants et de journalistes consciencieux dispersés à travers le monde, déterminés à avoir un impact positif sur l’avenir de la culture scientifique. L’adhésion est gratuite et ouverte à toutes les personnes désireuses de partager leurs connaissances : étudiant(e)s, doctorant(e)s, chercheurs(euses), médiateurs(trices) scientifiques, journalistes, artistes, et passionnés de sciences</p>
                </div>

            </div>

            <div className='col-12 d-flex' style={{ flexWrap: 'wrap' }}>
                <Card_team />
                <Card_team2 />
                <Card_team />
            </div>
            <div className='col-12 d-flex mt-5' style={{ flexWrap: 'wrap' }}>
                <Card_team2 />
                <Card_team />
                <Card_team2 />
            </div>


        </div>

    );
}

export default About;
