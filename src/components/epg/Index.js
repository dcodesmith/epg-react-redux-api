import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import { bindActionCreators } from 'redux';
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

    let offset = initialOffest;
    let abscissa = `${-offset * HOUR_WIDTH}px`;

    this.state = {
      csvFile: undefined,
      label: FILE_CHOOSER_LABEL,
      selectedDateIndex: 0,
      offset: offset,
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

    let style = {
      transform: `translate3d(0, 0, 0)`,
      WebkitTransform: `translate3d(0, 0, 0)`
    };

    this.setState({ selectedDateIndex, style });
  }

  onNavigate(direction) {
    const HOUR_WIDTH = 150;

    let offset = this.state.offset + direction;
    let abscissa = `${-offset * HOUR_WIDTH}px`;
    let style = {
      transform: `translate3d(${abscissa}, 0, 0)`,
      WebkitTransform: `translate3d(${abscissa}, 0, 0)`
    };

    this.setState({ offset, style });
  }

  onUploadCSV(event) {
    let formData = new FormData();

    event.preventDefault();

    if (this.state.csvFile) {
      formData.append('programme', this.state.csvFile);
      this.props.actions.createProgrammes(formData);
    }
  }

  onFileChange(event) {
    let csvFile = event.target.files[0];
    let label = csvFile ? csvFile.name : FILE_CHOOSER_LABEL;

    this.setState({ label, csvFile });
  }

  onClear(){
    this.props.actions.deleteProgrammes();
  }

  render() {
    const { channels, dates, programmes, times } = this.props;
    const isUploading = false;

    let selectedDate = dates[this.state.selectedDateIndex];
    let selectedProgrammes = getSelectedDatesProgrammes({ selectedDate, programmes, channels });

    return (
      <div className="container">

        <CsvUploadForm
          onUpload={this.onUploadCSV}
          isUploading={isUploading}
          label={this.state.label}
          onFileChange={this.onFileChange}/>

        <ProgrammeGuide>
          <DateSelector
            dates={dates}
            selectedDateIndex={this.state.selectedDateIndex}
            onSelect={this.onSelectDate}/>

          <Grid programmes={selectedProgrammes}
            offset={this.state.offset}
            onNavigate={this.onNavigate}
            times={times}
            transformStyle={this.state.style}
            onClear={this.onClear}/>
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

// TODO: Move into selector folder
function mapProgrammeToChannel({ programmes, channels }) {

  return programmes.map((programme) => {
    programme.channel = _.find(channels, { id: programme.channel });

    return programme;
  });

}

// TODO: Move into selector folder
function getProgrammeDates(programmes) {
  let programmeDates = [];
  let dates = programmes.map(programme => {
    return new Date(programme.date);
  });
  let endDate = new Date(Math.max.apply(null, dates));
  let startDate = new Date(Math.min.apply(null, dates));
  let numberOfDays = moment(endDate).diff(moment(startDate), 'days') + 1;
  let i, value;

  const DATE_FORMAT = 'YYYY-MM-DD';

  for (i = 0; i < numberOfDays; i++) {
    value = moment(startDate).add(i, 'days').format(DATE_FORMAT);
    programmeDates[i] = {
      day: i + 1,
      value,
      ISOString: new Date(value).toISOString()
    };
  }

  return programmeDates;
}

// TODO: Move into selector folder
function getSelectedDatesProgrammes({ selectedDate, programmes, channels }) {
  let selectedDateProgrammes = {};
  let todaysProgrammes = [];

  if (!selectedDate || !programmes) {
    return {};
  }

  todaysProgrammes = _.filter(programmes, { date: selectedDate.ISOString });

  todaysProgrammes.forEach((programme, index, programmes) => {
    selectedDateProgrammes[programme.channel.code] = _.filter(programmes, {
      channel: programme.channel
    });
  });

  return selectedDateProgrammes;
}

function mapStateToProps(state, ownProps) {
  const { programmes, channels } = state;

  let dates = getProgrammeDates(programmes);
  let mappedProgrammes = mapProgrammeToChannel({ programmes, channels });
  let times = _.range(0, 24, .5);
  // from reducer/index.js

  return { channels, programmes: mappedProgrammes, dates, times };
}

function mapDispatchToProps(dispatch) {
  return {
    // createCourse: course => dispatch(courseActions.createCourse(course)) for just one action
    actions: bindActionCreators(programmeActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
