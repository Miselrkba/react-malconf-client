import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Extra = () => {
  return (
    <div id="extra" className="container">
      <div className="title">
        <h2>Praesent scelerisquet</h2>
        <span className="byline">
          Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna
          congue
        </span>{' '}
      </div>
      <div id="three-column">
        <div className="boxA">
          <div className="box">
            {' '}
            <span className="fa">
              <FaCloudDownloadAlt />
            </span>
            <p>
              Praesent pellentesque facilisis elit. className aptent taciti
              sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
        </div>
        <div className="boxB">
          <div className="box">
            {' '}
            <span className="fa">
              <FaCloudDownloadAlt />
            </span>
            <p>
              Etiam neque. Vivamus consequat lorem at nisl. Nullam non wisi a
              sem semper eleifend. Donec mattis.
            </p>
          </div>
        </div>
        <div className="boxC">
          <div className="box">
            {' '}
            <span className="fa">
              <FaCloudDownloadAlt />
            </span>
            <p>
              {' '}
              Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi.
              Pellentesque adipiscing purus.
            </p>
          </div>
        </div>
      </div>
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

export default Extra;
