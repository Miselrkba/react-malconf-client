/* eslint-disable arrow-body-style */
import React from 'react';
import Output from './output';

// eslint-disable-next-line react/prop-types
const Banner = ({ extractConfig }) => {
  return (
    <div id="banner">
      <div className="container">
        <div className="title">
          <h2>Malware Configuration Parser</h2>
          <span className="byline">
            <Output text="✔️ File uploaded to Malconf server. Press button to analyze Malware" />
          </span>{' '}
        </div>
        <ul className="actions">
          <li>
            <a
              href="#results"
              className="button"
              onClick={() => extractConfig()}
            >
              Extract config
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
