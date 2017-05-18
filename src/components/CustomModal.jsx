import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import ProgrammeFormContainer from '../containers/ProgrammeFormContainer';

const style = {
  overlay: {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : 10
  },
  content: {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const CustomModal = ({ isOpen, data }) => {
  const props = {
    isOpen, style, contentLabel: 'Example Modal'
  };
  return (
    <Modal { ...props }>
      <ProgrammeFormContainer data={ data } />
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default CustomModal;
