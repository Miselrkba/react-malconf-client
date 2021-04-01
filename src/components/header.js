import React from 'react';

const Header = () => {
  return (
    <div id="header" className="container">
      <div id="logo">
        <h1>
          <a href="/#">Effeminate</a>
        </h1>
      </div>
      <div id="menu">
        <ul>
          <li className="current_page_item">
            <a href="/#" title="">
              Homepage
            </a>
          </li>
          <li>
            <a href="/#" title="">
              Our Clients
            </a>
          </li>
          <li>
            <a href="/#" title="">
              About Us
            </a>
          </li>
          <li>
            <a href="/#" title="">
              Careers
            </a>
          </li>
          <li>
            <a href="/#" title="">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
