import { connect } from 'react-redux';

import { hideModal } from '../actions/modalActions';

import Overlay from '../components/Overlay';

const mapStateToProps = ({ modal: { isOpen, data } }) => ({ isOpen, data });

export default connect(mapStateToProps, { onHideModal: hideModal })(Overlay);
