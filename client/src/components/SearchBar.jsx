import React from 'react';

const formStyle = {
  marginTop: '20px',
  marginBottom: '20px',
};

const SearchBar = () => (
  <form style={formStyle} >
    <input placeholder="Search..." />
    <input type="submit" value="Submit" />
  </form>
);

export default SearchBar;
