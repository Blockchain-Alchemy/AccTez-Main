import { combineReducers } from 'redux';
import WizardState from "./wizardReducer";

const rootReducer = combineReducers({
  WizardState,
});

export default rootReducer;
