const Actions = {
  SET_CODE: 'SET_CODE',
  ADD_CONSOLE_LOG: 'ADD_CONSOLE_LOG',
  UPDATE_LESSON_STATE: 'UPDATE_LESSON_STATE',
  SET_SESSION_ID: 'SET_SESSION_ID',
  SET_CONTRACT_NAME: 'SET_CONTRACT_NAME',
  SET_COMPILED_CONTRACT: 'SET_COMPILED_CONTRACT',
}

function updateLessonStateAction(timeline) {
  return {
    type: Actions.UPDATE_LESSON_STATE,
    timeline,
  };
}

function setSessionIdAction(sessionId) {
  return {
    type: Actions.SET_SESSION_ID,
    sessionId,
  };
}

export {
  Actions,
  updateLessonStateAction,
  setSessionIdAction,
}
