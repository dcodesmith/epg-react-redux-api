import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Toolbar = ({ onClear }) => {
  console.log('Toolbar rendered');

  return (
    <div className="programme-guide__toolbar">
      <button className="btn-large btn btn-danger" onClick={ onClear }>
        Clear EPG
      </button>
    </div>
  );
};

Toolbar.propTypes = {
  onClear: PropTypes.func.isRequired
};

export default Toolbar;
