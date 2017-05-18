import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sortBy } from 'lodash';

import ProgrammeItem from './ProgrammeItem';

const Body = ({ programmes, transformStyle }) => {
  const channels = Object.keys(programmes);
  const bodyClasses = classNames('programme-guide__body', {
    'epg-fade': channels.length > 0
  });

  const getProgrammesNodes = (channel) => {
    const sortedProgramme = sortBy(programmes[channel], 'startTime');

    return sortedProgramme.map((programme, index) => (
      <ProgrammeItem programme={ programme } key={ programme.id } />
    ));
  };

  const channelsNodes = channels.map(channel =>
    <div key={ channel } className={ `${channel} programme-guide__row` }>
      { /* <div className="indicator">Afees Adedamola Kolawole</div>*/ }

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
  transformStyle: PropTypes.object.isRequired
};

export default Body;
