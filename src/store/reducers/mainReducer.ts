import { Actions } from "../actions";

const initialState = {
  loading: false,
  wizard: {},
  checkout: "",
  tokenPrices: [],
  walletTokens: [],
};

function MainState(state = initialState, action: any) {
  switch (action.type) {
    case Actions.SET_WIZARD_SETTING:
      return {
        ...state,
        wizard: action.payload,
      }

    case Actions.SET_TOKEN_PRICE_LIST:
      return {
        ...state,
        tokenPrices: action.payload
      }

    case Actions.SET_WALLET_TOKEN_LIST:
      return {
        ...state,
        walletTokens: action.payload || []
      }

    case Actions.ADD_TOKEN_TO_CHECKOUT:
      return {
        ...state,
        checkout: action.payload,
      }

    default:
      return state;
  }
}

export default MainState;
