import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Toolbar = ({ onDelete }) => {
  console.log('render Toolbar');
  return (
    <div className="programme-guide__toolbar">
      <button className="btn-large btn btn-danger" onClick={ () => onDelete() }>
        Clear EPG
      </button>
    </div>
  )
};

Toolbar.propTypes = {
  onDelete: PropTypes.func.isRequired
};

export default Toolbar;
