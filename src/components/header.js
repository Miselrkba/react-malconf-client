import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div id="header" className="container">
      <div id="logo">
        <h1>
          <a
            href="https://github.com/kevthehermit/RATDecoders"
            target="_blank"
            rel="noreferrer"
          >
            Malconf
          </a>
        </h1>
      </div>
      <div id="menu">
        <ul>
          <li className="current_page_item">
            <Link activeClass="active" to="header" spy smooth duration={500}>
              Homepage
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="extra" spy smooth duration={500}>
              Features
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="featured" spy smooth duration={500}>
              Rats
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="page" spy smooth duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link activeClass="active" to="copyright" spy smooth duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
