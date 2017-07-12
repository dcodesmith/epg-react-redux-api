import React from 'react';

import CsvUploadFormContainer from './CsvUploadFormContainer';
import DateSelectorContainer from './DateSelectorContainer';
import GridContainer from './GridContainer';
import OverlayContainer from './OverlayContainer';

const App = () => (
  <div className="container">
    <CsvUploadFormContainer />

    <section className="col-md-12">
      <div className="grid">
        <DateSelectorContainer />
        <GridContainer />
      </div>
    </section>
    <OverlayContainer />
  </div>
);

export default App;
