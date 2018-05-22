import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  companies: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  companies: [],
};

const CompanyReviews = ({ companies }) => {
  const data = companies.map(company =>
    <li key={company}>{company}</li>);

  return (
    <div>
      <h4>Best Companies for Women</h4>
      <ul>{data}</ul>
    </div>
  );
};

CompanyReviews.propTypes = propTypes;
CompanyReviews.defaultProps = defaultProps;

export default CompanyReviews;
