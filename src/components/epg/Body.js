import React, { PropTypes } from 'react';
import classNames from 'classnames';

import ProgrammeItem from './ProgrammeItem';

const Body = ({ programmes, transformStyle }) => {
  let channels = Object.keys(programmes);
  let klass = classNames({
    'programme-guide__body': true,
    'epg-fade': channels.length > 0
  });

  return (
    <div className={klass}>

      {channels.map((channel, index) =>

        // <ChannelRow channel={channel} programmes={programmes}/>

        <div key={index} className="programme-guide__row">

          <div className="programme-guide__row__header">
            {channel}
          </div>

          <div className="programme-guide__row__items" style={transformStyle}>
            <ul className="schedule">
              {programmes[channel].map((programme, id) =>
                <ProgrammeItem programme={programme} key={id}/>
              )}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
};

Body.propTypes = {
  programmes: PropTypes.object.isRequired,
  transformStyle: PropTypes.object
};

export default Body;
