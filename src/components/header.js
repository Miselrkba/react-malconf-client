import React from 'react';

const Header = () => {
  return (
    <div id="header" className="container">
      <div id="logo">
        <h1>
          <a href="/#">Malconf</a>
        </h1>
      </div>
      <div id="menu">
        <ul>
          <li className="current_page_item">
            <a href="#header" title="">
              Homepage
            </a>
          </li>
          <li>
            <a href="#extra" title="">
              Features
            </a>
          </li>
          <li>
            <a href="#featured" title="">
              Rats
            </a>
          </li>
          <li>
            <a href="#page" title="">
              About
            </a>
          </li>
          <li>
            <a href="#copyright" title="">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
