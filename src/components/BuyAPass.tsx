import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  PlasmicBuyAPass,
  DefaultBuyAPassProps,
} from "./plasmic/acc_tez_wizard/PlasmicBuyAPass";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { getTokenPrices } from "../service/http";
import useWallet from "../hooks/useWallet";
import {
  alertMessage,
  hideNotification,
  startNotification,
  updateErrorNotification,
} from "./Notification";

export interface BuyAPassProps extends DefaultBuyAPassProps {}

const getTokenFullName = (name: string) => {
  if (name === "dayPass") {
    return "Day Pass Token";
  } else if (name === "weeklyPass") {
    return "Weekly Pass Token";
  } else if (name === "yearlyPass") {
    return "Yearly Pass Token";
  } else if (name === "specialPass") {
    return "Special Pass Token";
  }
  return "";
};

function BuyAPass_(props: BuyAPassProps, ref: HTMLElementRefOf<"div">) {
  const wizardState = useSelector((state: any) => state.WizardState);
  const tokenName = wizardState.checkout;
  const [tokenPrices, setTokenPrices] = useState<any[]>([]);
  const { walletAddress } = useWallet();

  useEffect(() => {
    getTokenPrices().then((res: any) => {
      const prices = res.data;
      console.log("prices", prices);
      prices && setTokenPrices(prices);
    });
  }, []);

  const findToken = (tokenName: string) => {
    return tokenPrices?.find((token) => token.name === tokenName);
  };

  const getTokenPrice = () => {
    const token = findToken(tokenName);
    return token ? token.price : 0;
  };

  const getTokenTezos = () => {
    const token = findToken(tokenName);
    return token ? token.tezos : 0;
  };

  const isConnected = useMemo(() => {
    return walletAddress && walletAddress.length > 0;
  }, [walletAddress]);

  const purchaseWithTezos = () => {
    console.log("purchaseWithTezos");
    if (!isConnected) {
      alertMessage("Wallet", "Please connect your wallet");
      return;
    }
  };

  return (
    <PlasmicBuyAPass
      root={{ ref }}
      {...props}
      tokenName={<>{getTokenFullName(tokenName)}</>}
      priceDollarText={<>${getTokenPrice()}</>}
      priceTezosText={<>{getTokenTezos()} tez</>}
      purchaseWithTezosButton={{
        isDisabled: !isConnected,
        onClick: () => purchaseWithTezos(),
      }}
    />
  );
}

const BuyAPass = React.forwardRef(BuyAPass_);
export default BuyAPass;
