import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Toolbar = ({ onClear }) => {

  return (
    <div className="programme-guide__toolbar">
      <button className="btn-large btn btn-danger" onClick={onClear}>Clear EPG</button>
    </div>
  );
};

Toolbar.propTypes = {
  onClear: PropTypes.func.isRequired
};

export default Toolbar;
