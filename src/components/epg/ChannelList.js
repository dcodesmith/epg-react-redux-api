import React, { PropTypes } from 'react';

const ChannelList = ({ channels }) => {

  const channelNodes = channels.map(channel =>
    <li className="channel__list__item" key={channel.id}>
      <span className="channel__name">{channel.name}</span>
      <span className="channel__code">{channel.code}</span>
    </li>
  );

  return (
    <ul className="channel__list">
      {channelNodes}
    </ul>
  );
};

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired
};

export default ChannelList;
