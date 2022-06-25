import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {
  PlasmicMain,
  DefaultMainProps
} from './plasmic/acc_tez_wizard/PlasmicMain';
import { HTMLElementRefOf } from '@plasmicapp/react-web';
import useWallet from '../hooks/useWallet';
import * as http from '../service/http';
import {
  addTokenToCheckoutAction,
  setTokenPriceListAction
} from '../store/actions';
import * as notification from './Notification';

export interface MainProps extends DefaultMainProps {}

function Main_(props: MainProps, ref: HTMLElementRefOf<'div'>) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { walletAddress, connectWallet } = useWallet();
  const [walletTokens, setWalletTokens] = useState<any[]>([]);

  useEffect(() => {
    http.getTokenPrices().then((res: any) => {
      const prices = res.data;
      console.log('Token Prices', prices);
      dispatch(setTokenPriceListAction(prices));
    });
  }, [dispatch, walletAddress]);

  useEffect(() => {
    if (walletAddress) {
      http.getWalletTokens(walletAddress).then((res: any) => {
        const tokens = res.data;
        console.log('My Tokens', tokens);
        tokens && setWalletTokens(tokens);
      });
    } else {
      connectWallet();
    }
  }, [walletAddress, connectWallet]);

  const buyToken = (tokenName: string) => {
    dispatch(addTokenToCheckoutAction(tokenName));
    history.push('/checkout');
  };

  const navigateTokenCheckPage = (e: any, token: string) => {
    e.preventDefault();
    if (!walletAddress) {
      notification.error('Wallet', 'Please connect your wallet');
      return;
    }
    history.push(token);
  };

  const isOwnToken = (tokenName: string) => {
    const token = walletTokens.find((i) => i.name === tokenName);
    if (token) {
      const expired = moment(token.expired);
      return moment().diff(expired) <= 0;
    }
    return false;
  };

  return (
    <PlasmicMain
      root={{ ref }}
      {...props}
      ownedSpecialPass={{
        isChecked: !!isOwnToken('specialPass')
      }}
      ownedDayPass={{
        isChecked: !!isOwnToken('dayPass')
      }}
      ownedWeeklyPass={{
        isChecked: !!isOwnToken('weeklyPass')
      }}
      ownedYearlyPass={{
        isChecked: !!isOwnToken('yearlyPass')
      }}
      buySpecialPassButton={{
        onClick: () => buyToken('specialPass')
      }}
      buyDayPassButton={{
        onClick: () => buyToken('dayPass')
      }}
      buyWeeklyPassButton={{
        onClick: () => buyToken('weeklyPass')
      }}
      buyYearlyPassButton={{
        onClick: () => buyToken('yearlyPass')
      }}
      dayPassLink={{
        onClick: (e) => navigateTokenCheckPage(e, '/dayPass')
      }}
      weeklyPassLink={{
        onClick: (e) => navigateTokenCheckPage(e, '/weeklyPass')
      }}
      yearlyPassLink={{
        onClick: (e) => navigateTokenCheckPage(e, '/yearlyPass')
      }}
    />
  );
}

const Main = React.forwardRef(Main_);
export default Main;
