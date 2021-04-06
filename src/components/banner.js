/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React from 'react';
import axios from 'axios';

const Banner = () => {
  const fetchData = () => {
    axios
      .get('http://localhost:4000/')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="banner">
      <div className="container">
        <div className="title">
          <h2>Malware Configuration Parser</h2>
          <span className="byline">Analyze Malware</span>{' '}
        </div>
        <ul className="actions">
          <li>
            <a href="/#" className="button" onClick={fetchData}>
              Extract config
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
