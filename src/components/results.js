import React from 'react';

const Results = () => {
  return (
    <div id="results">
      <div className="container">
        <div className="title">
          <h2>Results</h2>
          <span className="byline">Extracted Malware configuration</span>{' '}
        </div>
      </div>
      <ul className="actions">
        <li>Campaign: </li>
        <li>Connection Delay: </li>
        <li>Connection Interval: </li>
        <li>Detected: </li>
        <li>Running PreProcessor: </li>
        <li>Install Name: </li>
        <li>Keylog File: </li>
        <li>Loading File: </li>
        <ul className="actions">
          Domains
          <li>IP: </li>
          <li>Password: </li>
          <li>Port: </li>
        </ul>
        <li>Mutex: </li>
        <li>Version: </li>
      </ul>
    </div>
  );
};

export default Results;
