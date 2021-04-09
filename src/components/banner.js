/* eslint-disable arrow-body-style */
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import Output from './output';

// eslint-disable-next-line react/prop-types
const Banner = ({ extractConfig }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div id="banner" className="animate__animated animate__bounceInRight">
      <div className="container">
        <div className="title">
          <h2>Malware Configuration Parser</h2>
          <span className="byline">
            <Output />
          </span>{' '}
        </div>
        <ul className="actions">
          <li>
            <Link
              className="button animate__animated animate__bounce"
              activeClass="active"
              to="results"
              smooth
              duration={1500}
              onClick={() => extractConfig() && scrollToTop}
            >
              Extract config now
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
