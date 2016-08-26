import React, { PropTypes } from 'react';

const CsvUploadForm = ({ onUpload, isUploading, label, onFileChange }) => {
  return (
    <div className="channel-panel col-xs-12 col-sm-6 col-lg-8">
      <form className="form-horizontal" onSubmit={onUpload}>

        <div className="form-group">
          <label className="col-sm-3 control-label" htmlFor="file_selector">Choose CSV File</label>
          <div className="col-sm-9">
            <div className="file-chooser">

              <input
                onChange={onFileChange}
                type="file"
                id="file_selector"
                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>

              <label htmlFor="file_selector" className="control-label">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 17">
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                </svg>
                <span>{label}</span>
              </label>

            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-1 col-sm-11">
            <button type="Submit" disabled={isUploading} className="submit btn btn-primary btn-large">
              Submit
            </button>
          </div>
        </div>

      </form>
    </div>
  );
};

CsvUploadForm.propTypes = {
  onUpload: PropTypes.func.isRequired,
  isUploading: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onFileChange: PropTypes.func.isRequired
};

export default CsvUploadForm;
