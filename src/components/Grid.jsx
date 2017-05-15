import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import Controls from './Controls';

import ToolbarContainer from '../containers/ToolbarContainer';

const Grid = ({ programmes, offset, onNavigate, times, transformStyle }) => (
  <div className="programme-guide">
    <Header times={ times } transformStyle={ transformStyle } />
    <Body programmes={ programmes } transformStyle={ transformStyle } />
    <Controls onNavigate={ onNavigate } offset={ offset } times={ times } />
    <ToolbarContainer />
  </div>
);

Grid.propTypes = {
  programmes: PropTypes.object.isRequired,
  offset: PropTypes.number.isRequired,
  onNavigate: PropTypes.func.isRequired,
  times: PropTypes.array.isRequired,
  transformStyle: PropTypes.object.isRequired,
};

export default Grid;
