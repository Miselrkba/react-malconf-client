import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Output = () => {
  useEffect(() => {
    const options = {
      strings: [`File uploaded to Malconf server...✔️`],
      typeSpeed: 50,
      backSpeed: 0,
    };

    const typed = new Typed('#output', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="output" />;
};

export default Output;
