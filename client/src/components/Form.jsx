import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  leadershipLevel: PropTypes.string,
  recommend: PropTypes.boolean,
  interruption: PropTypes.boolean,
};

const defaultProps = {
  handleChange: () => {},
  handleSubmit: () => {},
  leadershipLevel: 'entry-level',
  recommend: true,
  interruption: true,
};

const formStyle = {
  lineHeight: '2.2',
};

const Form = ({
  handleChange,
  handleSubmit,
  leadershipLevel,
  recommend,
  interruption,
}) => (
  <form onSubmit={handleSubmit} style={formStyle}>
    <label htmlFor="leadershipLevel">
      Select your leadership level:
      <select name="leadershipLevel" value={leadershipLevel} onChange={handleChange}>
        <option value="entry-level">Entry Level</option>
        <option value="manager">Manager</option>
        <option value="sr-manager-director">Senior Manager/Director</option>
        <option value="vp">VP</option>
        <option value="svp">SVP</option>
        <option value="c-level">C-Suite</option>
      </select>
    </label>
    <br />
    <label htmlFor="recommend">
      Would you recommend your company to another woman:
      <select name="recommend" value={recommend} onChange={handleChange}>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </label>
    <br />
    <label htmlFor="going">
      Are you frequently interrupted in the workplace?
      <input
        name="interruption"
        type="checkbox"
        checked={interruption}
        onChange={handleChange}
      />
    </label>
    <br />
    <input type="submit" value="Submit" />
  </form>
);

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;

export default Form;
