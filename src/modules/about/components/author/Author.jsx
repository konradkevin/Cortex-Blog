import React from 'react'
import PropTypes from 'prop-types'

import './Author.css'
import imgPlus from '../../../../media/icons/plus.png'
import {SocialNetworkComponent, SocialNetworkShape} from "../social-network";
// Styles
// import { Button } from 'react-bootstrap';

function Author(props) {
  const {name, picture, interests, bio, networks} = props;

  return (
    <div class="col-12">
      <div class="image-flip">
        <div class="mainflip flip-0">
          <div class="frontside">
            <div class="card-team">
              <div class="card-team-body text-center">
                <p style={{display: 'flex', justifyContent: 'center'}}>
                  <img class=" img-fluid mt-4" src={picture} style={{objectFit: 'cover', borderRadius: '50%', width: '200px', height: '200px'}} alt="about"/>
                </p>
                <h4 class="card-team-title">{name}</h4>
                <p class="card-team-text">{interests}</p>
                <div className='card-team-plus'>
                  <img src={imgPlus} alt=""/>
                </div>
              </div>
            </div>
          </div>
          <div class="backside">
            <div class="card-team">
              <div class="card-team-body text-center mt-4">
                <h4 class="card-team-title">{name}</h4>
                <p class="card-team-text card-text2">{bio}</p>
                <ul class="list-inline">{networks.map(SocialNetworkComponent)}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const AuthorShape = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  interests: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  networks: PropTypes.arrayOf(PropTypes.shape(SocialNetworkShape))
};

Author.propTypes = AuthorShape;

export default Author;
