import React from 'react';

const Banner = () => {
  return (
    <div id="banner">
      <div className="container">
        <div className="title">
          <h2>Etiam rhoncus volutpat</h2>
          <span className="byline">Proin gravida porttitor accumsan</span>{' '}
        </div>
        <ul className="actions">
          <li>
            <a href="/#" className="button">
              Etiam posuere
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
