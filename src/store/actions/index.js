const Actions = {
  SET_CODE: 'SET_CODE',
  ADD_CONSOLE_LOG: 'ADD_CONSOLE_LOG',
  UPDATE_LESSON_STATE: 'UPDATE_LESSON_STATE',
  SET_SESSION_ID: 'SET_SESSION_ID',
  SET_CONTRACT_NAME: 'SET_CONTRACT_NAME',
  SET_COMPILED_CONTRACT: 'SET_COMPILED_CONTRACT',
  SET_WALLET_ADDRESS: 'SET_WALLET_ADDRESS',
  SET_STRIPE_KEY: 'SET_STRIPE_KEY',
  SET_TOKEN_CHECKED_STATE: 'SET_TOKEN_CHECKED_STATE',
  SET_TOKEN_TEZOS_PRICE: 'SET_TOKEN_TEZOS_PRICE',
  SET_TOKEN_PRICE: 'SET_TOKEN_PRICE',
}

function setWalletAddressAction(address) {
  return {
    type: Actions.SET_WALLET_ADDRESS,
    address,
  };
}

function setStripeKeyAction(stripeKey) {
  return {
    type: Actions.SET_STRIPE_KEY,
    stripeKey,
  };
}

function setTokenCheckedStateAction(token, value) {
  return {
    type: Actions.SET_TOKEN_CHECKED_STATE,
    token,
    value,
  };
}

function setTokenTezosPriceAction(token, value) {
  return {
    type: Actions.SET_TOKEN_TEZOS_PRICE,
    token,
    value,
  };
}

function setTokenPriceAction(token, value) {
  return {
    type: Actions.SET_TOKEN_PRICE,
    token,
    value,
  };
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
  setWalletAddressAction,
  setStripeKeyAction,
  setTokenCheckedStateAction,
  setTokenTezosPriceAction,
  setTokenPriceAction,
  updateLessonStateAction,
  setSessionIdAction,
}
