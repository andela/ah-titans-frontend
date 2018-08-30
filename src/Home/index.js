import React from 'react';
import Loader from '../views/Loader';

import './index.scss';

const Home = () => (
  <div className="app">
    <Loader />
    <h1>Welcome to Authors  Haven!</h1>
  </div>
);

export default Home;
