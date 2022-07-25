import React from 'react';
import Sidebar  from '../components/sidebar';

const Discover = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        background: '#c7c3c3'
      }}
    >
    <Sidebar />
      <h1>Discover</h1>
    </div>
    
  );
};

export default Discover;