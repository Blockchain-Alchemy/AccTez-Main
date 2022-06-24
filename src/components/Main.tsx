import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  PlasmicMain,
  DefaultMainProps,
} from "./plasmic/acc_tez_wizard/PlasmicMain";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import useWallet from "../hooks/useWallet";
import { getWalletTokens } from "../service/http";
import { addTokenToCheckoutAction } from "../store/actions";
import { alertMessage } from "./Notification";

export interface MainProps extends DefaultMainProps {}

function Main_(props: MainProps, ref: HTMLElementRefOf<"div">) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { walletAddress } = useWallet();
  const [walletTokens, setWalletTokens] = useState<any[]>([]);

  useEffect(() => {
    if (walletAddress) {
      getWalletTokens(walletAddress).then((res: any) => {
        const tokens = res.data;
        console.log("tokens", tokens);
        tokens && setWalletTokens(tokens);
      });
    }
  }, [walletAddress]);

  const buyToken = (tokenName: string) => {
    dispatch(addTokenToCheckoutAction(tokenName));
    history.push("/checkout");
  };

  const navigateTokenCheckPage = (e: any, token: string) => {
    e.preventDefault();
    if (!walletAddress) {
      alertMessage("Wallet", "Please connect your wallet");
      return;
    }
    history.push(token);
  };

  return (
    <PlasmicMain
      root={{ ref }}
      {...props}
      ownedSpecialPass={{
        isChecked: !!walletTokens.find((i) => i.name === "specialPass"),
      }}
      ownedDayPass={{
        isChecked: !!walletTokens.find((i) => i.name === "dayPass"),
      }}
      ownedWeeklyPass={{
        isChecked: !!walletTokens.find((i) => i.name === "weeklyPass"),
      }}
      ownedYearlyPass={{
        isChecked: !!walletTokens.find((i) => i.name === "yearlyPass"),
      }}
      buySpecialPassButton={{
        onClick: () => buyToken("specialPass"),
      }}
      buyDayPassButton={{
        onClick: () => buyToken("dayPass"),
      }}
      buyWeeklyPassButton={{
        onClick: () => buyToken("weeklyPass"),
      }}
      buyYearlyPassButton={{
        onClick: () => buyToken("yearlyPass"),
      }}
      dayPassLink={{
        onClick: (e) => navigateTokenCheckPage(e, "/dayPass"),
      }}
      weeklyPassLink={{
        onClick: (e) => navigateTokenCheckPage(e, "/weeklyPass"),
      }}
      yearlyPassLink={{
        onClick: (e) => navigateTokenCheckPage(e, "/yearlyPass"),
      }}
    />
  );
}

const Main = React.forwardRef(Main_);
export default Main;
