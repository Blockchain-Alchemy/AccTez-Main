import { Actions } from "../actions";

const initialState = {
  loading: false,
  timeline: -1,
  walletAddress: "",
  stripeKey: "",
};

function WizardState(state = initialState, action) {
  switch (action.type) {
    case Actions.UPDATE_LESSON_STATE:
      if (
        action.timeline > state.timeline &&
        action.timeline - state.timeline === 1
      ) {
        return { ...state, timeline: action.timeline };
      }
      return state;

    case Actions.SET_WALLET_ADDRESS:
      return { ...state, walletAddress: action.address };

    case Actions.SET_STRIPE_KEY:
      return { ...state, stripeKey: action.stripeKey };

    default:
      return state;
  }
}

export default WizardState;
