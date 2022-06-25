import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  PlasmicBuyAPass,
  DefaultBuyAPassProps
} from './plasmic/acc_tez_wizard/PlasmicBuyAPass';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import * as http from '../service/http';
import useWallet from '../hooks/useWallet';
import * as notification from './Notification';
import useDayPass from '../hooks/useDayPass';
import { getTokenFullName, getTokenId } from '../utils';

export interface BuyAPassProps extends DefaultBuyAPassProps {}

function BuyAPass_(props: BuyAPassProps, ref: HTMLElementRefOf<'div'>) {
  const history = useHistory();
  const mainState = useSelector((state: any) => state.MainState);
  const { checkout: tokenName, tokenPrices } = mainState;
  const { walletAddress } = useWallet();
  const { mintToken } = useDayPass();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('tokenName', tokenName);
    if (!tokenName) {
      history.push('/');
    }
  }, [history, tokenName]);

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
    console.log('purchaseWithTezos');
    if (!isConnected) {
      notification.error('Wallet', 'Please connect your wallet');
      return;
    }

    const price = getTokenTezos();
    if (price <= 0) {
      notification.error('Wallet', 'Invalid Token Price');
      return;
    }

    if (walletAddress) {
      setLoading(true);
      notification.start('mint', 'Purchase', 'Purchase token with tezos...');

      const tokenId = getTokenId(tokenName);
      mintToken(tokenId, price)
        .then(() => {
          return http.createWalletToken(walletAddress, tokenName, new Date());
        })
        .then(() => {
          notification.success('mint', 'Success to purchase token');
          history.push('/');
        })
        .catch((e) => {
          console.error(e);
          notification.fail('mint', 'Failed to purchase token!');
        })
        .finally(() => setLoading(false));
    }
  };

  const purchaseWithStripe = () => {
    console.log('purchaseWithStripe');
    history.push('/stripe');
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
        onClick: () => purchaseWithTezos()
      }}
      purchaseWithStripeButton={{
        isDisabled: loading,
        onClick: () => purchaseWithStripe()
      }}
    />
  );
}

const BuyAPass = React.forwardRef(BuyAPass_);
export default BuyAPass;
