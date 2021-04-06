/* eslint-disable arrow-body-style */
import React from 'react';

// eslint-disable-next-line react/prop-types
const Banner = ({ extractConfig }) => {
  return (
    <div id="banner">
      <div className="container">
        <div className="title">
          <h2>Malware Configuration Parser</h2>
          <span className="byline">Analyze Malware</span>{' '}
        </div>
        <ul className="actions">
          <li>
            <a href="/#" className="button" onClick={() => extractConfig()}>
              Extract config
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
