import React from 'react';
import Header from './header';
import Banner from './banner';
import Extra from './extra';
import Featured from './featured';
import Page from './page';
import Copyright from './copyright';
import Results from './results';

const App = () => {
  return (
    <div id="wrapper">
      <Header />
      <Banner />
      <Results />
      <Extra />
      <Featured />
      <Page />
      <Copyright />
    </div>
  );
};

export default App;
