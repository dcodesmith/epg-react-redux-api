import React from 'react';
import PropTypes from 'prop-types';
import Grid from './Grid';

const ProgrammeForm = ({ onHideModal, data }) => (
  <section>
    { JSON.stringify(data) }
    <button onClick={ onHideModal }> Close </button>
  </section>
);

ProgrammeForm.propTypes = {
  onHideModal: PropTypes.func.isRequired // check for element PropTypes
};

export default ProgrammeForm;
