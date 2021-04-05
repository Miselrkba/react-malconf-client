import React from 'react';

const Featured = () => {
  return (
    <div id="featured">
      <div className="container">
        <div className="title">
          <h2>Fusce ultrices fringilla metus</h2>
          <span className="byline">
            Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna
            congue
          </span>{' '}
        </div>
        <p>
          This is <strong>Malconf</strong>, Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Rem aspernatur vitae consequatur!
          Explicabo quibusdam nobis, pariatur exercitationem mollitia odit
          molestias. Have fun :){' '}
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
