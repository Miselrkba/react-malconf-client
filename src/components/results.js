/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

const Results = ({ data }) => {
  const {
    loadingFile,
    campaign,
    connectionDelay,
    connectionInterval,
    detected,
    runningPreProcessor,
    version,
    installName,
    keylogFile,
    mutex,
    ip,
    password,
    port,
  } = data;

  return (
    <div id="results">
      <div className="container">
        <div className="title">
          <h2>Results</h2>
          <span className="byline">Extracted Malware configuration</span>{' '}
        </div>
      </div>
      <ul className="actions">
        <li>Campaign: {campaign}</li>
        <li>Connection Delay: {connectionDelay} </li>
        <li>Connection Interval: {connectionInterval} </li>
        <li>Detected: {detected}</li>
        <li>Running PreProcessor: {runningPreProcessor}</li>
        <li>Loading File: {loadingFile}</li>
        <li>Install Name: {installName}</li>
        <li>Keylog File: {keylogFile}</li>
        Domains
        <li>IP: {ip}</li>
        <li>Password: {password}</li>
        <li>Port: {port}</li>
        <li>Mutex: {mutex}</li>
        <li>Version: {version}</li>
      </ul>
    </div>
  );
};

export default Results;
