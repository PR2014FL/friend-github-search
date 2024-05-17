import React, { useState, useContext } from 'react';
import { GithubContext } from '../App';

function SearchBar({ searchVal, placeHolder }) {
  const { searchTerm, setSearchTerm } = useContext(GithubContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  const handleSubmit = (event) => {
    console.log("attempting submit");
    event.preventDefault();
    console.log();
    searchVal(searchTerm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchTerm" onChange={handleChange} value={searchTerm} placeholder={placeHolder} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default SearchBar;
