import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  PlasmicYourWallet,
  DefaultYourWalletProps,
} from "./plasmic/acc_tez_wizard/PlasmicYourWallet";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { alertMessage } from "./Notification";
import {
  setWalletAddressAction,
  updateLessonStateAction,
} from "../store/actions";
import useWallet from "../hooks/useWallet";

export interface YourWalletProps extends DefaultYourWalletProps {}

function YourWallet_(props: YourWalletProps, ref: HTMLElementRefOf<"div">) {
  const dispatch = useDispatch();
  const history = useHistory();
  const wizardState = useSelector((state: any) => state.WizardState);
  const { walletAddress } = useWallet();

  useEffect(() => {
    if (walletAddress && wizardState.walletAddress.length <= 0) {
      dispatch(setWalletAddressAction(walletAddress));
    }
  }, [dispatch, walletAddress, wizardState])

  const setWalletAddress = (address: string) => {
    dispatch(setWalletAddressAction(address));
  };

  const onNextButtonClicked = () => {
    if (wizardState.walletAddress.length <= 0) {
      alertMessage("Wallet", "Please input your wallet address");
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
