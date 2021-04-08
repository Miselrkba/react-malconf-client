/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  FcAbout,
  FcAcceptDatabase,
  FcAdvance,
  FcAlarmClock,
  FcBiohazard,
  FcBiotech,
  FcCableRelease,
  FcCapacitor,
  FcCheckmark,
  FcFile,
  FcKey,
  FcMindMap,
  FcNews,
} from 'react-icons/fc';
import Output from './output';

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
  console.log(data);
  return (
    <div id="results">
      <div className="container">
        <div className="title">
          <h2>Results</h2>
          <span className="byline">Extracted Malware configuration</span>
        </div>
      </div>
      <ul>
        <li>
          <span className="icon-container">
            <FcBiotech />
          </span>
          Campaign: {campaign}
        </li>
        <li>
          <span className="icon-container">
            <FcAdvance />
          </span>
          Connection Delay: {connectionDelay}
        </li>
        <li>
          <span className="icon-container">
            <FcAlarmClock />
          </span>
          Connection Interval: {connectionInterval}
        </li>
        <li>
          <span className="icon-container">
            <FcCheckmark />
          </span>
          Detected: {detected}
        </li>
        <li>
          <span className="icon-container">
            <FcNews />
          </span>
          Running PreProcessor: {runningPreProcessor}
        </li>
        <li>
          <span className="icon-container">
            <FcFile />
          </span>
          Loading File: {loadingFile}
        </li>
        <li>
          <span className="icon-container">
            <FcBiohazard />
          </span>
          Install Name: {installName}
        </li>
        <li>
          <span className="icon-container">
            <FcAcceptDatabase />
          </span>
          Keylog File: {keylogFile}
        </li>
        <li>
          <span className="icon-container">
            <FcMindMap />
          </span>
          IP: {ip}
        </li>
        <li>
          <span className="icon-container">
            <FcKey />
          </span>
          Password: {password}
        </li>
        <li>
          <span className="icon-container">
            <FcCableRelease />
          </span>
          Port: {port}
        </li>
        <li>
          <span className="icon-container">
            <FcCapacitor />
          </span>
          Mutex: {mutex}
        </li>
        <li>
          <span className="icon-container">
            <FcAbout />
          </span>
          Version: {version}
        </li>
        <Output />
      </ul>
    </div>
  );
};

export default Results;
