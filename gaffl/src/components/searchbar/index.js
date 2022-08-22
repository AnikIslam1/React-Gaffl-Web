import React from "react";
import {searchInputs,searchput,searchIcon} from './search';
function SearchBar({placeholder,data})
{
    return(
        <searchInputs className="search">
            <searchput className="searchImput">
                <searchIcon/>
                <input  placeholder="placeholder"/>
                <div className="searchIcon"></div>
            </searchput>
            <div className="dataresult"></div>
        </searchInputs>
    );
}
export default SearchBar