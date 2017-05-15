import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Toolbar = ({ deleteProgrammes }) => {
  console.log('render Toolbar');
  return (
    <div className="programme-guide__toolbar">
      <button className="btn-large btn btn-danger" onClick={ () => deleteProgrammes() }>
        Clear EPG
      </button>
    </div>
  )
};

Toolbar.propTypes = {
  deleteProgrammes: PropTypes.func.isRequired
};

export default Toolbar;
