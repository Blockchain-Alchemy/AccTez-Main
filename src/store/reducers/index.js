import { combineReducers } from 'redux';
import LessonState from "./lessonReducer";

const rootReducer = combineReducers({
  LessonState,
});

export default rootReducer;
