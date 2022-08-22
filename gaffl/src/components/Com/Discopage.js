import React from 'react';
import SearchBar from '../searchbar';
import {

DiscoField

} from './search';

const DisPage = () => {
  return (
    <>
      
      <DiscoField>
        <SearchBar/>
      <div className="bg-light border">First item</div>
      <div className="bg-light border ms-auto">Second item</div>
      </DiscoField> 
    </>
  );
};

export default DisPage;