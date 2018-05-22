import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  query: PropTypes.string,
};

const defaultProps = {
  onChange: () => {},
  onKeyDown: () => {},
  query: 'google',
};

const formStyle = {
  marginTop: '20px',
  marginBottom: '20px',
};

const SearchBar = ({ query, onChange, onKeyDown }) => (
  <form style={formStyle} >
    <input placeholder="Search..." query={query} onChange={onChange} onKeyDown={onKeyDown} />
  </form>
);

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
