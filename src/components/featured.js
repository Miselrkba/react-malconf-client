import React from 'react';

const Featured = () => {
  return (
    <div id="featured">
      <div className="container">
        <div className="title">
          <h2>Current Rats</h2>
          <span className="byline">
            Here is a list of the currently supported RATS:
          </span>{' '}
        </div>
        <p>
          LostDoor - Xtreme - AAR - AdWind - Adzok - AlienSpy - Alina - Arcom -
          BlackNix - BlackShades - BlueBanana - Bozok - ClientMesh - CyberGate -
          DarkComet - DarkRAT - HawkEye - Hrat - hworm - WSH - Jbifrost - JRat -
          LuminosityLink - LuxNet - NanoCore - NetWire - njRat - Plasma - Remcos
          - Saefko - Sakula - SpyNote - Mobihook
        </p>
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

export default Featured;
