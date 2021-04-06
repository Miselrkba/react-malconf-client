import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Extra = () => {
  return (
    <div id="extra" className="container">
      <div className="title">
        <h2>RATDecoders</h2>
        <span className="byline">
          Malconf is a python3 library that can be used to staticly analyse
          specific malware families and extract the Configuration data that can
          be used by Incident Responders during an incident.
        </span>{' '}
      </div>
      <div id="three-column">
        <div className="boxA">
          <div className="box">
            {' '}
            <span className="fa">
              <FaCloudDownloadAlt />
            </span>
            <p>Can be installed into automated malware analysis pipelines.</p>
          </div>
        </div>
        <div className="boxB">
          <div className="box">
            <span className="fa">
              <FaCloudDownloadAlt />
            </span>
            <p>Automagically detect the family and extract any config.</p>
          </div>
        </div>
        <div className="boxC">
          <div className="box">
            <span className="fa">
              <FaCloudDownloadAlt />
            </span>
            <p>You can pass in a single file or a directory.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
