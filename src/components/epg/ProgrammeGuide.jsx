import React, { PropTypes } from 'react';
import Grid from './Grid';
import DateSelector from './DateSelector';

const ProgrammeGuide = ({ children }) => (
  <section className="col-md-12">
    <div className="grid">
      {children}
    </div>
  </section>
);

ProgrammeGuide.propTypes = {
  children: PropTypes.array.isRequired // check for element PropTypes
};

export default ProgrammeGuide;
