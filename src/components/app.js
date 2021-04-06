/* eslint-disable no-console */
import React, { useState } from 'react';
import axios from 'axios';
import Header from './header';
import Banner from './banner';
import Extra from './extra';
import Featured from './featured';
import Page from './page';
import Copyright from './copyright';
import Results from './results';

const App = () => {
  const [data, setData] = useState('');

  const extractConfig = () => {
    axios
      .get('http://localhost:4000/')
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="wrapper">
      <Header />
      <Banner extractConfig={extractConfig} />
      <Results data={data} />
      <Extra />
      <Featured />
      <Page />
      <Copyright />
    </div>
  );
};

export default App;
