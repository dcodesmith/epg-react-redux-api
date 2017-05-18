import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = ({ deleteProgrammes }) => (
  <div className="programme-guide__toolbar">
    <button className="btn-large btn btn-danger" onClick={ () => deleteProgrammes() }>
      Clear EPG
    </button>
  </div>
);

Toolbar.propTypes = {
  deleteProgrammes: PropTypes.func.isRequired
};

export default Toolbar;
