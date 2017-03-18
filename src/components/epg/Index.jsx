import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { range } from 'lodash';

import { getProgrammeDates, getSelectedDatesProgrammes } from '../../utils';

import * as programmeActions from '../../actions/programmeActions';

import CsvUploadForm from './CsvUploadForm';
import ProgrammeGuide from './ProgrammeGuide';
import DateSelector from './DateSelector';
import Grid from './Grid';

const FILE_CHOOSER_LABEL = 'No File Chosen';

class Index extends Component {
  constructor(props, context) {
    super(props, context);
    let initialOffest;
    const HOUR_WIDTH = 150;
    const currentHour = (new Date()).getHours();

    if (currentHour >= 21) {
      initialOffest = 18;
    } else if (currentHour <= 6) {
      initialOffest = 0;
    } else {
      initialOffest = currentHour - 3;
    }

    // on load, offset should be set by getting the hour in the day

    const offset = initialOffest;
    const abscissa = `${-offset * HOUR_WIDTH}px`;

    this.state = {
      csvFile: undefined,
      label: FILE_CHOOSER_LABEL,
      selectedDateIndex: 0,
      offset,
      style: {
        transform: `translate3d(${abscissa}, 0, 0)`,
        WebkitTransform: `translate3d(${abscissa}, 0, 0)`
      }
    };

    this.onSelectDate = this.onSelectDate.bind(this);
    this.onNavigate = this.onNavigate.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onUploadCSV = this.onUploadCSV.bind(this);
    this.onClear = this.onClear.bind(this);
  }

  onSelectDate(selectedDateIndex) {
    // TODO: reset position navigate

    const style = {
      transform: `translate3d(0, 0, 0)`,
      WebkitTransform: `translate3d(0, 0, 0)`
    };

    this.setState({ selectedDateIndex, style });
  }

  onNavigate(direction) {
    const HOUR_WIDTH = 150;
    const offset = this.state.offset + direction;
    const abscissa = `${-offset * HOUR_WIDTH}px`;
    const style = {
      transform: `translate3d(${abscissa}, 0, 0)`,
      WebkitTransform: `translate3d(${abscissa}, 0, 0)`
    };

    this.setState({ offset, style });
  }

  onUploadCSV(event) {
    const formData = new FormData();

    event.preventDefault();

    if (this.state.csvFile) {
      formData.append('programme', this.state.csvFile);
      this.props.actions.createProgrammes(formData);
    }
  }

  onFileChange(event) {
    const csvFile = event.target.files[0];
    const label = csvFile ? csvFile.name : FILE_CHOOSER_LABEL;

    this.setState({ label, csvFile });
  }

  onClear() {
    this.props.actions.deleteProgrammes();
  }

  render() {
    const { channels, dates, programmes, times } = this.props;
    const selectedDate = dates[this.state.selectedDateIndex];
    const selectedProgrammes = getSelectedDatesProgrammes({ selectedDate, programmes, channels });
    const isUploading = false;

    return (
      <div className="container">
        <CsvUploadForm
          onUpload={this.onUploadCSV}
          isUploading={isUploading}
          label={this.state.label}
          onFileChange={this.onFileChange} />

        <ProgrammeGuide>
          <DateSelector
            dates={dates}
            selectedDateIndex={this.state.selectedDateIndex}
            onSelect={this.onSelectDate} />

          <Grid
            programmes={selectedProgrammes}
            offset={this.state.offset}
            onNavigate={this.onNavigate}
            times={times}
            transformStyle={this.state.style}
            onClear={this.onClear} />
        </ProgrammeGuide>
      </div>
    );
  }
}

Index.propTypes = {
  channels: PropTypes.array.isRequired,
  programmes: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  times: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  const { programmes, channels } = state;
  const dates = getProgrammeDates(programmes);
  const times = range(0, 24, 0.5);
  // from reducer/index.js

  return { channels, programmes, dates, times };
};

const mapDispatchToProps = dispatch => ({
    // createCourse: course => dispatch(courseActions.createCourse(course)) for just one action
  actions: bindActionCreators(programmeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
