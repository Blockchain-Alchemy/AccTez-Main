import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { PlasmicYourWallet } from "./plasmic/blank_project/PlasmicYourWallet";
import { alertMessage } from "./Notification";
import {
  setWalletAddressAction,
  updateLessonStateAction,
} from "../store/actions";

function YourWallet_(props, ref) {
  const dispatch = useDispatch();
  const history = useHistory();
  const wizardState = useSelector((state) => state.WizardState);

  const setWalletAddress = (address) => {
    dispatch(setWalletAddressAction(address));
  };

  const onNextButtonClicked = () => {
    if (wizardState.walletAddress.length <= 0) {
      alertMessage("Please input your wallet address");
      return;
    }

    dispatch(updateLessonStateAction(0));
    history.push("/setupStripe");
  };

  return (
    <PlasmicYourWallet
      root={{ ref }}
      {...props}
      walletAddress={{
        value: wizardState.walletAddress,
        onChange: (e) => setWalletAddress(e.target.value),
      }}
      backButton={{ onClick: () => history.push("/") }}
      nextButton={{ onClick: () => onNextButtonClicked() }}
    />
  );
}

const YourWallet = React.forwardRef(YourWallet_);

export default YourWallet;
