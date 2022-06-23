import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  PlasmicSetUpStripe,
  DefaultSetUpStripeProps,
} from "./plasmic/acc_tez_wizard/PlasmicSetUpStripe";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { alertMessage } from "./Notification";
import { setStripeKeyAction, updateLessonStateAction } from "../store/actions";

export interface SetUpStripeProps extends DefaultSetUpStripeProps {}

function SetUpStripe_(props: SetUpStripeProps, ref: HTMLElementRefOf<"div">) {
  const dispatch = useDispatch();
  const history = useHistory();
  const wizardState = useSelector((state: any) => state.WizardState);

  const setStripeKey = (stripeKey: string) => {
    dispatch(setStripeKeyAction(stripeKey));
  };

  const onNextButtonClicked = () => {
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
      nextButton={{ onClick: () => onNextButtonClicked() }}
    />
  );
}

const SetUpStripe = React.forwardRef(SetUpStripe_);
export default SetUpStripe;
