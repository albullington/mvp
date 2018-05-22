import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleClick: PropTypes.func,
};

const defaultProps = {
  handleClick: () => {},
};

const spanStyle = {
  marginRight: '30px',
};

const buttonStyle = {
  background: 'none!important',
  color: 'blue',
  border: 'none',
  padding: '0!important',
  font: 'inherit',
  borderBottom: '1px solid',
  cursor: 'pointer',
};

const NavBar = ({ handleClick }) => (
  <div>
    <span style={spanStyle}>
      <button
        onClick={handleClick}
        style={buttonStyle}
      >
      Company Reviews
      </button>
    </span>
    <span style={spanStyle}>
      <button
        onClick={handleClick}
        style={buttonStyle}
      >
      Review Your Company
      </button>
    </span>
  </div>
);

NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;

export default NavBar;
