import React from 'react';
import { Link } from 'react-scroll';

const Page = () => {
  return (
    <div id="page" className="container">
      <div className="title">
        <h2>About Malconf</h2>
        <span className="byline">
          Python Decoder for Common Remote Access Trojans
        </span>{' '}
      </div>
      <section className="restricted-container">
        <p>
          Every day, new types of malware are discovered. However, many of them
          are actually variants of existing malware — they share most of the
          code and there is a slight difference in configurations. In most
          cases, malware analysis begins with unpacking the malware to extract
          its configuration. Malconf is python3 library which extracts
          configurations from executable files .
        </p>
      </section>
      <ul className="actions">
        <li>
          <Link
            activeClass="active"
            to="header"
            spy
            smooth
            duration={500}
            className="button"
          >
            to the top!
          </Link>{' '}
        </li>
      </ul>
    </div>
  );
};

export default Page;
