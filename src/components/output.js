/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import Typed from 'typed.js';

// Component to display an output

const Output = ({ text = '' }) => {
  useEffect(() => {
    // Options for the Typed object
    const options = {
      strings: [text],
      typeSpeed: 50,
      backSpeed: 0,
    };

    // New Typed instance
    const typed = new Typed('#output', options);

    // Destroy Typed instance on unmounting the component to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, [text]);

  return <span id="output" />;
};

export default Output;
