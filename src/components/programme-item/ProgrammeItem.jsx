import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { pad, setItemStyle } from '../../utils';

const ProgrammeItem = ({ programme, onModalShow }) => {
  const currentDate = new Date();
  const currentTime = `${pad(currentDate.getHours())}:${currentDate.getMinutes()}`;

  const itemStyle = classNames('schedule__item', {
    highlight: (programme.startTime <= currentTime && programme.endTime >= currentTime)
  });

  return (
    <li className={ itemStyle } style={ setItemStyle(programme) } title={ programme.show } onClick={ () => onModalShow(programme) }>
      <div>
        <span className="schedule__item__title">
          { programme.show }
        </span>
        <span className="schedule__item__time">
          { programme.startTime } - { programme.endTime }
        </span>
      </div>
    </li>
  );
};

ProgrammeItem.propTypes = {
  programme: PropTypes.object.isRequired,
  onModalShow: PropTypes.func.isRequired
};

export default ProgrammeItem;
