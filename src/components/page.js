import React from 'react';

const Page = () => {
  return (
    <div id="page" className="container">
      <div className="title">
        <h2>About Malconf</h2>
        <span className="byline">
          Python Decoder for Common Remote Access Trojans
        </span>{' '}
      </div>
      <p>
        Every day, new types of malware are discovered. However, many of them
        are actually variants of existing malware — they share most of the code
        and there is a slight difference in configurations. In most cases,
        malware analysis begins with unpacking the malware to extract its
        configuration. Malconf is python3 library which extracts configurations
        from executable files .
      </p>
      <ul className="actions">
        <li>
          <a href="/#" className="button">
            Etiam posuere
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Page;
