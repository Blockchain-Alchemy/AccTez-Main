const Actions = {
  SET_CODE: 'SET_CODE',
  ADD_CONSOLE_LOG: 'ADD_CONSOLE_LOG',
  UPDATE_LESSON_STATE: 'UPDATE_LESSON_STATE',
  SET_SESSION_ID: 'SET_SESSION_ID',
  SET_CONTRACT_NAME: 'SET_CONTRACT_NAME',
  SET_COMPILED_CONTRACT: 'SET_COMPILED_CONTRACT',
  SET_WALLET_ADDRESS: 'SET_WALLET_ADDRESS',
  SET_STRIPE_PUBLIC_KEY: 'SET_STRIPE_PUBLIC_KEY',
  SET_STRIPE_PRIVATE_KEY: 'SET_STRIPE_PRIVATE_KEY',
  SET_TOKEN_CHECKED_STATE: 'SET_TOKEN_CHECKED_STATE',
  SET_TOKEN_TEZOS_PRICE: 'SET_TOKEN_TEZOS_PRICE',
  SET_TOKEN_PRICE: 'SET_TOKEN_PRICE',
}

function setWalletAddressAction(value: string) {
  return {
    type: Actions.SET_WALLET_ADDRESS,
    value,
  };
}

function setStripePublicKeyAction(value: string) {
  return {
    type: Actions.SET_STRIPE_PUBLIC_KEY,
    value,
  };
}

function setStripePrivateKeyAction(value: string) {
  return {
    type: Actions.SET_STRIPE_PRIVATE_KEY,
    value,
  };
}

function setTokenCheckedStateAction(token: string, value: boolean) {
  return {
    type: Actions.SET_TOKEN_CHECKED_STATE,
    token,
    value,
  };
}

function setTokenTezosPriceAction(token: string, value: number) {
  return {
    type: Actions.SET_TOKEN_TEZOS_PRICE,
    token,
    value,
  };
}

function setTokenPriceAction(token: string, value: string) {
  return {
    type: Actions.SET_TOKEN_PRICE,
    token,
    value,
  };
}

function updateLessonStateAction(value: number) {
  return {
    type: Actions.UPDATE_LESSON_STATE,
    value,
  };
}

function setSessionIdAction(sessionId: string) {
  return {
    type: Actions.SET_SESSION_ID,
    sessionId,
  };
}

export {
  Actions,
  setWalletAddressAction,
  setStripePublicKeyAction,
  setStripePrivateKeyAction,
  setTokenCheckedStateAction,
  setTokenTezosPriceAction,
  setTokenPriceAction,
  updateLessonStateAction,
  setSessionIdAction,
}
