import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sortBy } from 'lodash';

import ProgrammeItem from './ProgrammeItem';

import { pad } from '../utils';
import { ITEM_WIDTH, TIME_FORMAT, ONE_MINUTE, TRACK_WIDTH } from '../constants';

const Body = ({ programmes, transformStyle, onModalShow }) => {
  const currentDate = new Date();
  const currentTime = `${pad(currentDate.getHours())}:${currentDate.getMinutes()}`;

  const hrs = currentDate.getHours();
  const minutes = (currentDate.getMinutes() / ONE_MINUTE);
  console.log(hrs, minutes);
  const time = hrs + minutes; // parseFloat(`${hrs}.${minutes}`);

  const channels = Object.keys(programmes);
  const bodyClasses = classNames('programme-guide__body', {
    'epg-fade': channels.length > 0
  });

  console.log('time', time * TRACK_WIDTH, transformStyle);
  // console.log(currentDate.getMinutes(), ONE_MINUTE, ITEM_WIDTH);

  const getProgrammesNodes = (channel) => {
    const sortedProgramme = sortBy(programmes[channel], 'startTime');

    return sortedProgramme.map((programme, index) => (
      <ProgrammeItem programme={ programme } key={ programme.id } onModalShow={ onModalShow } />
    ));
  };

  const channelsNodes = channels.map(channel =>
    <div key={ channel } className={ `${channel} programme-guide__row` }>
      <div className="indicator" style={ transformStyle }>Afees Adedamola Kolawole</div>
      <div className="programme-guide__row__header">
        { channel }
      </div>

      <div className="programme-guide__row__items" style={ transformStyle }>
        <ul className="schedule">
          { getProgrammesNodes(channel) }
        </ul>
      </div>
    </div>
  );

  return (
    <div className={ bodyClasses }>
      { channelsNodes }
    </div>
  );
};

Body.propTypes = {
  programmes: PropTypes.object.isRequired,
  transformStyle: PropTypes.object.isRequired,
  onModalShow: PropTypes.func.isRequired
};

export default Body;
