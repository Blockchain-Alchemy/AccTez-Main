import { combineReducers } from 'redux';
import WizardState from "./wizardReducer";
import MainState from "./mainReducer";

const rootReducer = combineReducers({
  WizardState,
  MainState,
});

export default rootReducer;
