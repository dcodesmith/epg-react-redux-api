import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ onDelete }) => (
  <div className="programme-guide__toolbar">
    <button className="btn-large btn btn-danger" onClick={ () => onDelete() }>
      Clear EPG
    </button>
  </div>
);

Toolbar.propTypes = {
  onDelete: PropTypes.func.isRequired
};

export default Toolbar;
