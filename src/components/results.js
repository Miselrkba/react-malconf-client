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
          <span className="byline">Extracted Malware configuration</span>
        </div>
      </div>
      <ul>
        <div className="ul-split">
          <li>
            <span className="icon-container">
              <FcBiotech />
            </span>
            Campaign: <span className="output"> {campaign}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcAdvance />
            </span>
            Connection Delay: <span className="output">{connectionDelay}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcAlarmClock />
            </span>
            Connection Interval:
            <span className="output">{connectionInterval}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcCheckmark />
            </span>
            Detected: <span className="output"> {detected}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcNews />
            </span>
            Running PreProcessor:
            <span className="output"> {runningPreProcessor} </span>
          </li>
          <li>
            <span className="icon-container">
              <FcFile />
            </span>
            Loading File: <span className="output"> {loadingFile}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcBiohazard />
            </span>
            Install Name: <span className="output"> {installName}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcAcceptDatabase />
            </span>
            Keylog File: <span className="output"> {keylogFile}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcMindMap />
            </span>
            IP: <span className="output"> {ip}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcKey />
            </span>
            Password:
            <span className="output"> {password ? `${password}` : `" "`}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcCableRelease />
            </span>
            Port: <span className="output"> {port}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcCapacitor />
            </span>
            Mutex: <span className="output"> {mutex}</span>
          </li>
          <li>
            <span className="icon-container">
              <FcAbout />
            </span>
            Version: <span className="output"> {version}</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Results;
