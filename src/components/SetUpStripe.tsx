import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  PlasmicSetUpStripe,
  DefaultSetUpStripeProps,
} from "./plasmic/acc_tez_wizard/PlasmicSetUpStripe";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { alertMessage } from "./Notification";
import {
  setStripePublicKeyAction,
  setStripePrivateKeyAction,
  updateLessonStateAction,
} from "../store/actions";

export interface SetUpStripeProps extends DefaultSetUpStripeProps {}

function SetUpStripe_(props: SetUpStripeProps, ref: HTMLElementRefOf<"div">) {
  const dispatch = useDispatch();
  const history = useHistory();
  const wizardState = useSelector((state: any) => state.WizardState);

  const onNextButtonClicked = () => {
    if (wizardState.stripePublicKey.length <= 0) {
      alertMessage("Please input your stripe public key");
      return;
    }
    if (wizardState.stripePrivateKey.length <= 0) {
      alertMessage("Please input your stripe private key");
      return;
    }

    dispatch(updateLessonStateAction(1));
    history.push("/choosePasses");
  };

  return (
    <PlasmicSetUpStripe
      root={{ ref }}
      {...props}
      stripePublicKey={{
        value: wizardState.stripePublicKey,
        onChange: (e) => dispatch(setStripePublicKeyAction(e.target.value)),
      }}
      stripePrivateKey={{
        value: wizardState.stripePrivateKey,
        onChange: (e) => dispatch(setStripePrivateKeyAction(e.target.value)),
      }}
      skipButton={{ onClick: () => history.push("/choosePasses") }}
      backButton={{ onClick: () => history.push("/wallet") }}
      nextButton={{ onClick: () => onNextButtonClicked() }}
    />
  );
}

const SetUpStripe = React.forwardRef(SetUpStripe_);
export default SetUpStripe;
