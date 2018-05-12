import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header';
import Body from '../body';
import Controls from '../controls';

import ToolbarContainer from '../../containers/ToolbarContainer';

const Grid = ({ programmes, offset, onNavigate, times, transformStyle, onShowModal }) => (
  <div className="programme-guide">
    <Header times={ times } transformStyle={ transformStyle } />
    <Body programmes={ programmes } transformStyle={ transformStyle } onModalShow={ onShowModal } />
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
  onShowModal: PropTypes.func.isRequired
};

export default Grid;
