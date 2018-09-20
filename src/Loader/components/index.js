import React from 'react';
import loader from '../../assets/Loader.gif';
import './index.scss';

const Loader = () => (
  <div className="loader">
    <img src={loader} alt="Loading ..." />
  </div>
);

export default Loader;
