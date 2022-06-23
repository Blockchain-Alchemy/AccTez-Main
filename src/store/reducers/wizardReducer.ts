import { Actions } from "../actions";

const initialState = {
  loading: false,
  timeline: -1,
  walletAddress: "",
  stripePublicKey: "",
  stripePrivateKey: "",
  dayPass: {
    checked: false,
    tezos: 0,
    price: 0,
  },
  weeklyPass: {
    checked: false,
    tezos: 0,
    price: 0,
  },
  yearlyPass: {
    checked: false,
    tezos: 0,
    price: 0,
  },
  specialPass: {
    checked: false,
    tezos: 0,
    price: 0,
  },
};

function WizardState(state = initialState, action: any) {
  switch (action.type) {
    case Actions.UPDATE_LESSON_STATE:
      if (
        action.timeline > state.timeline &&
        action.timeline - state.timeline === 1
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

    default:
      return state;
  }
}

export default WizardState;