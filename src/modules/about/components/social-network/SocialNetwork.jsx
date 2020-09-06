import React from 'react'
import PropTypes from "prop-types";

function SocialNetwork(props) {
  const { name, logo, url } = props;

  return (
    <a className="social-ic" target="_blank" rel="noopener noreferrer" href={url}>
      <div>
        <img src={logo} alt={name}/>
      </div>
    </a>
  )
}

export const SocialNetworkShape = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

SocialNetwork.propTypes = SocialNetworkShape;

export default SocialNetwork;
