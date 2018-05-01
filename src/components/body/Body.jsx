import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sortBy } from 'lodash';

import ChannelLogo from '../channel-logo';
import ProgrammeItem from '../programme-item';

const Body = ({ programmes, transformStyle, onModalShow }) => {
  const channels = Object.keys(programmes);
  const bodyClasses = classNames('programme-guide__body', {
    'epg-fade': channels.length > 0
  });

  const getProgrammesNodes = (channel) => {
    const sortedProgramme = sortBy(programmes[channel], 'startTime');

    return sortedProgramme.map((programme, index) => (
      <ProgrammeItem programme={ programme } key={ programme.id } onModalShow={ onModalShow } />
    ));
  };

  const channelsNodes = channels.map(channel =>
    <div key={ channel } className={ `${channel} programme-guide__row` }>
      <div className="programme-guide__row__header">
        <ChannelLogo channel={ channel } />
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
