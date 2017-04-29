import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Body from './Body';
import Controls from './Controls';
import Toolbar from './Toolbar';


const Grid = ({ programmes, offset, onNavigate, times, transformStyle, onClear }) => (
  <div className="programme-guide">
    <Header times={ times } transformStyle={ transformStyle } />
    <Body programmes={ programmes } transformStyle={ transformStyle } />
    <Controls onNavigate={ onNavigate } offset={ offset } times={ times } />
    <Toolbar onClear={ onClear } />
  </div>
);

Grid.propTypes = {
  programmes: PropTypes.object.isRequired,
  offset: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired,
  times: PropTypes.array.isRequired,
  transformStyle: PropTypes.object.isRequired,
  onClear: PropTypes.func.isRequired
};

export default Grid;
