import React from 'react';

const Page = () => {
  return (
    <div id="page" className="container">
      <div className="title">
        <h2>Nulla luctus eleifend</h2>
        <span className="byline">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit
        </span>{' '}
      </div>
      <p>
        {' '}
        Vivamus fermentum nibh in augue. Praesent a lacus at urna congue rutrum.
        Nulla enim eros nibh. Duis enim nulla, luctus eu, dapibus lacinia,
        venenatis id, quam. Vestibulum imperdiet, magna nec eleifend rutrum,
        nunc lectus vestibulum velit, euismod lacinia quam nisl id lorem.
        Quisque erat. Vestibulum pellentesque, justo mollis pretium suscipit,
        justo nulla blandit libero, in blandit augue justo quis nisl. Fusce
        mattis viverra elit. Fusce quis tortor.
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
