import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import ProgrammeDetails from './ProgrammeDetails';

// @FIXME - move into less file
const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    zIndex: 10
  },
  content: {
    top: '48%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',

    width: '400px',
    border: 'none',
    height: '600px',
    borderRadius: '0',
    padding: '0',
    borderTop: '2px solid #4AC4F1'
  }
};

const Overlay = ({ isOpen, data, onHideModal }) => {
  const props = {
    isOpen, style, contentLabel: 'Example Modal'
  };

  return (
    <Modal { ...props }>
      <ProgrammeDetails data={ data } />
    </Modal>
  );
};

Overlay.propTypes = {
  data: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onHideModal: PropTypes.func.isRequired
};

export default Overlay;
