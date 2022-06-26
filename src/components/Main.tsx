import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { saveAs } from 'file-saver';

//import * as notification from './Notification';

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

  const isOwnToken = useCallback((tokenName: string) => {
    const token = walletTokens.find((i) => i.name === tokenName);
    if (token) {
      const expired = moment(token.expired);
      return moment().diff(expired) <= 0;
    }
    return false;
  }, [walletTokens]);

  const hasToken = useMemo(() => {
    return (
      isOwnToken('dayPass') ||
      isOwnToken('weeklyPass') ||
      isOwnToken('yearlyPass') ||
      isOwnToken('specialPass')
    );
  }, [isOwnToken]);

  const buyToken = (tokenName: string) => {
    dispatch(addTokenToCheckoutAction(tokenName));
    history.push('/checkout');
  }; 

  const saveFile = () => {
    saveAs(
      "/acctez.pkpass",
      "acctez.pkpass"
    );
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
      addTicketToAppleWallet={{
        isDisabled: !hasToken,
        onClick: () => saveFile()
      }}
      accessContentButton={{
        onClick: () => history.push('/access')
      }}
    />
  );
}

const Main = React.forwardRef(Main_);
export default Main;
