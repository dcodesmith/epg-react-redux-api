import React from 'react';

import CsvUploadFormContainer from './CsvUploadFormContainer';
import DateSelectorContainer from './DateSelectorContainer';
import GridContainer from './GridContainer';
import ModalContainer from './ModalContainer';

const App = () => (
  <div className="container">
    <CsvUploadFormContainer />

    <section className="col-md-12">
      <div className="grid">
        <DateSelectorContainer />
        <GridContainer />
      </div>
    </section>
    <ModalContainer />
  </div>
);

export default App;
