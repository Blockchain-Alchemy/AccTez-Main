import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  PlasmicBuyAPass,
  DefaultBuyAPassProps,
} from "./plasmic/acc_tez_wizard/PlasmicBuyAPass";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import * as http from "../service/http";
import useWallet from "../hooks/useWallet";
import {
  alertMessage,
  startNotification,
  updateSuccessNotification,
  updateErrorNotification,
} from "./Notification";
import useDayPass from "../hooks/useDayPass";
import { getTokenFullName, getTokenId } from "../utils";

export interface BuyAPassProps extends DefaultBuyAPassProps {}

function BuyAPass_(props: BuyAPassProps, ref: HTMLElementRefOf<"div">) {
  const history = useHistory();
  const wizardState = useSelector((state: any) => state.WizardState);
  const { checkout: tokenName, tokenPrices } = wizardState;
  const { walletAddress } = useWallet();
  const { mintToken } = useDayPass();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('tokenName', tokenName)
    if (!tokenName) {
      history.push("/");
    }
  }, [history, tokenName])

  const findToken = (tokenName: string) => {
    return tokenPrices?.find((token: any) => token.name === tokenName);
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

    const price = getTokenTezos();
    if (price <= 0) {
      alertMessage("Wallet", "Invalid Token Price");
      return;
    }

    if (walletAddress) {
      setLoading(true);
      startNotification("mintToken", "Purchase", "Purchase token with tezos...");

      const tokenId = getTokenId(tokenName);
      mintToken(tokenId, price)
        .then(() => {
          return http.createWalletToken(walletAddress, tokenName, new Date());
        })
        .then(() => {
          updateSuccessNotification("mintToken", "Success to purchase token");
          history.push('/');
        })
        .catch((e) => {
          console.error(e);
          updateErrorNotification("mintToken", "Failed to purchase token!");
        })
        .finally(() => setLoading(false))
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
        isDisabled: !isConnected || loading,
        onClick: () => purchaseWithTezos(),
      }}
      purchaseWithStripeButton={{
        isDisabled: loading,
      }}
    />
  );
}

const BuyAPass = React.forwardRef(BuyAPass_);
export default BuyAPass;
