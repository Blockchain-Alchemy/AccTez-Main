import { Actions } from "../actions";

const initialState = {
  loading: false,
  timeline: -1,
  walletAddress: "",
  stripePublicKey: "",
  stripePrivateKey: "",
  dayPass: {
    name: "dayPass",
    checked: false,
    tezos: 0,
    price: 0,
  },
  weeklyPass: {
    name: "weeklyPass",
    checked: false,
    tezos: 0,
    price: 0,
  },
  yearlyPass: {
    name: "yearlyPass",
    checked: false,
    tezos: 0,
    price: 0,
  },
  specialPass: {
    name: "specialPass",
    checked: false,
    tezos: 0,
    price: 0,
  },
  checkout: "",
  tokenPrices: [],
};

function WizardState(state = initialState, action: any) {
  switch (action.type) {
    case Actions.UPDATE_LESSON_STATE:
      if (
        action.value > state.timeline &&
        action.value - state.timeline === 1
      ) {
        return { ...state, timeline: action.value };
      }
      return state;

    case Actions.SET_WALLET_ADDRESS:
      return { ...state, walletAddress: action.value };

    case Actions.SET_STRIPE_PUBLIC_KEY:
      return { ...state, stripePublicKey: action.value };

    case Actions.SET_STRIPE_PRIVATE_KEY:
      return { ...state, stripePrivateKey: action.value };

    case Actions.SET_TOKEN_CHECKED_STATE: {
      const token: any = { ...(state as any)[action.token] };
      if (token) {
        token.checked = action.value;
        return {
          ...state,
          [action.token]: token,
        };
      }
      return state;
    }

    case Actions.SET_TOKEN_TEZOS_PRICE: {
      const token: any = { ...(state as any)[action.token] };
      if (token) {
        token.tezos = action.value;
        return {
          ...state,
          [action.token]: token,
        };
      }
      return state;
    }

    case Actions.SET_TOKEN_PRICE: {
      const token: any = { ...(state as any)[action.token] };
      if (token) {
        token.price = action.value;
        return {
          ...state,
          [action.token]: token,
        };
      }
      return state;
    }

    case Actions.SET_TOKEN_PRICE_LIST: {
      return {
        ...state, tokenPrices: action.value
      }
    }

    case Actions.ADD_TOKEN_TO_CHECKOUT:
      return {
        ...state,
        checkout: action.value,
      }

    default:
      return state;
  }
}

export default WizardState;
