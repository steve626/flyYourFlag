import React from 'react';
import './Jumbotron.css';

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 100, textAlign: 'center' }}
    className='jumbotron'
  >
    {children}
  </div>
);

export default Jumbotron;
