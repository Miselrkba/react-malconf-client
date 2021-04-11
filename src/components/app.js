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
  const [data, setData] = useState([]);

  const initialState = {
    loadingFile: 'extracting...',
    campaign: 'extracting...',
    connectionDelay: 'extracting...',
    connectionInterval: 'extracting...',
    detected: 'extracting...',
    runningPreProcessor: 'extracting...',
    version: 'extracting...',
    installName: 'extracting...',
    keylogFile: 'extracting...',
    mutex: 'extracting...',
    ip: 'extracting...',
    password: 'extracting...',
    port: 'extracting...',
  };

  const extractConfig = async () => {
    setData(initialState);
    const response = await axios.get(
      'https://malconf-server-node.herokuapp.com/'
    );
    try {
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);
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
