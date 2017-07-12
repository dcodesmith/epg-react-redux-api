import React from 'react';
import PropTypes from 'prop-types';

const ProgrammeGuide = ({ children }) => (
  <section className="col-md-12">
    <div className="grid">
      { children }
    </div>
  </section>
);

ProgrammeGuide.propTypes = {
  children: PropTypes.element.isRequired // check for element PropTypes
};

export default ProgrammeGuide;
