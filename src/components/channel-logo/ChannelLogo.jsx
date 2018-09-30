import React from 'react';
import PropTypes from 'prop-types';

const ChannelLogo = ({ channel }) => (
  <div className={channel}>
    <img className="channel-logo" alt="alt" src={require(`../../images/${channel}.svg`)} />
  </div>
);

ChannelLogo.propTypes = {
  channel: PropTypes.string.isRequired
};

export default ChannelLogo;
