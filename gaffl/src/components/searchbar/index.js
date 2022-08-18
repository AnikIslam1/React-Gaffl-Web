import React from 'react';
import Stack from 'react-bootstrap/Stack'
import {

SearchField
} from './search';

const Searchbar = () => {
  return (
    <>
      
      <SearchField>
      <Stack direction="horizontal" gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border ms-auto">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
      
      </SearchField> 
      
      
   
    </>
  );
};

export default Searchbar;