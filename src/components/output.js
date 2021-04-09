/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Typed from 'typed.js';

// Component to display an output

const Output = () => {
  useEffect(() => {
    // Options for the Typed object
    const options = {
      strings: [`File uploaded to Malconf server...✔️`],
      typeSpeed: 50,
      backSpeed: 0,
    };

    // New Typed instance
    const typed = new Typed('#output', options);

    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="output" />;
};

export default Output;
