import { combineReducers } from 'redux';

import { reduce as UiPathAgentConsoleReducer } from './UiPathAgentConsoleState';

// Register your redux store under a unique namespace
export const namespace = 'uipath';

// Combine the reducers
export default combineReducers({
  uiPathAgentConsole: UiPathAgentConsoleReducer
});
