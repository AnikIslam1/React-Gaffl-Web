import React from 'react';
import Sidebar  from '../components/sidebar';
import Searchbar  from '../components/searchbar';

const Discover = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#c7c3c3'
      }}
    >
    <Searchbar />
    <Sidebar />
      <h1>Discover</h1>
    </div>
    
  );
};

export default Discover;