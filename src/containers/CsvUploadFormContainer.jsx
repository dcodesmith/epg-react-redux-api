import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createProgrammes } from '../actions/programmeActions';
import CsvUploadForm from '../components/csv-upload-form';

const FILE_CHOOSER_LABEL = 'No File Chosen';

class CsvUploadFormContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      csvFile: undefined,
      label: FILE_CHOOSER_LABEL
    };

    this.onFileChange = this.onFileChange.bind(this);
    this.onUploadCSV = this.onUploadCSV.bind(this);
  }

  onUploadCSV(event) {
    const formData = new FormData();

    event.preventDefault();

    if (this.state.csvFile) {
      formData.append('programme', this.state.csvFile);
      this.props.createProgrammes(formData);
    }
  }

  onFileChange(event) {
    const csvFile = event.target.files[0];
    const label = csvFile ? csvFile.name : FILE_CHOOSER_LABEL;

    this.setState({ label, csvFile });
  }

  render() {
    const isUploading = false;

    return (
      <CsvUploadForm
        onUpload={ this.onUploadCSV }
        isUploading={ isUploading }
        label={ this.state.label }
        onFileChange={ this.onFileChange } />
    );
  }
}

CsvUploadFormContainer.propTypes = {
  createProgrammes: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProgrammes }
)(CsvUploadFormContainer);
