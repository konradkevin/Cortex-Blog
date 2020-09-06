import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

// Styles
import './About.css'
// import { Button } from 'react-bootstrap';
import {AboutImage, AboutSelectors} from '../'
import {AuthorShape, AuthorComponent} from "../components/author";
import {Statuses} from "../state/reducers";

function About(props) {
  const {authors} = props

  return (
    <div className='col-12' style={{flexWrap: 'wrap'}}>
      <div className='col-12' style={{display: 'flex', flexWrap: 'wrap', marginTop: '6em', marginBottom: '8em', justifyContent: 'center'}}>
        <div className='col-lg-5 col-sm-8 mb-5 d-flex justify-content-center align-items-center'>
          <img src={AboutImage} alt="" style={{borderRadius: '50%', width: '80%'}}/>
        </div>

        <div className='col-lg-6 col-sm-12 d-flex justify-content-center align-items-center'>
          <p style={{fontSize: '1.5em', textAlign: 'center'}}>
            Le Collectif est un groupe d’étudiants et de journalistes
            consciencieux dispersés à travers le monde, déterminés à avoir un impact positif sur l’avenir de la culture
            scientifique. L’adhésion est gratuite et ouverte à toutes les personnes désireuses de partager leurs
            connaissances : étudiant(e)s, doctorant(e)s, chercheurs(euses), médiateurs(trices) scientifiques,
            journalistes, artistes, et passionnés de sciences
          </p>
        </div>
      </div>

      <div className='col-12 d-flex' style={{ flexWrap: 'wrap' }}>
        { authors && authors.map(AuthorComponent) }
      </div>
    </div>
  );
};

About.propTypes = {
  status: PropTypes.oneOf(Object.values(Statuses)),
  authors: PropTypes.arrayOf(PropTypes.shape(AuthorShape)),
};

const mapStateToProps = state => ({
  status: AboutSelectors.status(state),
  authors: AboutSelectors.allAuthors(state),
});

export default connect(mapStateToProps)(About);
