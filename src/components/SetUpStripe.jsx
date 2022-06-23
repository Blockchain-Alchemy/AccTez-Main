import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PlasmicSetUpStripe } from "./plasmic/acc_tez_wizard/PlasmicSetUpStripe";
import { alertMessage } from "./Notification";
import { setStripeKeyAction, updateLessonStateAction } from "../store/actions";

function SetUpStripe_(props, ref) {
  const dispatch = useDispatch();
  const history = useHistory();
  const wizardState = useSelector((state) => state.WizardState);

  const setStripeKey = (stripeKey) => {
    dispatch(setStripeKeyAction(stripeKey));
  };

  const onClickNextButton = () => {
    if (wizardState.stripeKey.length <= 0) {
      alertMessage("Please input your wallet address");
      return;
    }

    dispatch(updateLessonStateAction(1));
    history.push("/choosePasses");
  };

  return (
    <PlasmicSetUpStripe
      root={{ ref }}
      {...props}
      stripeKeyText={{
        value: wizardState.stripeKey,
        onChange: (e) => setStripeKey(e.target.value),
      }}
      skipButton={{ onClick: () => history.push("/choosePasses") }}
      backButton={{ onClick: () => history.push("/wallet") }}
      nextButton={{ onClick: () => onClickNextButton() }}
    />
  );
}

const SetUpStripe = React.forwardRef(SetUpStripe_);

export default SetUpStripe;
