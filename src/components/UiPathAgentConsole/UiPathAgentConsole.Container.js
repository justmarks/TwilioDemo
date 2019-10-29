import { connect } from 'react-redux';

import UiPathAgentConsole from './UiPathAgentConsole';

const mapStateToProps = (state) => ({
    isOpen: state['uipath'].uiPathAgentConsole.isOpen,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(UiPathAgentConsole);
