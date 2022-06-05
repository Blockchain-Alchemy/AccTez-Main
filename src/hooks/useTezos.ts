import { Contracts, DayPassToken } from "config";
import {useCallback} from "react";
import useBeacon from "./useBeacon";
import moment from "moment";

const contractAddress = Contracts.DayPass;

const useTezos = () => {
  const { tezos, walletAddress } = useBeacon();

  const mintToken = useCallback((tokenId: DayPassToken) => {
    console.log('mintToken', tokenId);
    if (tezos && walletAddress) {
      const params = [{
        amount: 1,
        to_: walletAddress,
        token: {
          existing: tokenId,
        }
      }]
      return tezos.wallet.at(contractAddress)
        .then(contract => {
          return contract.methods.mint(params).send();
        })
        .then(op => op.confirmation())
        .then(result => {
          console.log("Mint result:", result)
          return result;
        })
    } else {
      return Promise.reject('Please connect your wallet');
    }
  }, [tezos, walletAddress]);

  const getTokenTime = useCallback((tokenId: DayPassToken) => {
    console.log('checkTokenTime', tokenId);
    if (tezos && walletAddress) {
      return tezos.wallet.at(contractAddress)
        .then(contract => {
          return contract.storage()
        })
        .then((storage: any) => {
          return storage.token_times.get({ 0: walletAddress, 1: tokenId })
        })
        .then(token => {
          console.log('token', token)
          return token? moment(token) : null;
        })
    } else {
      return Promise.reject('Please connect your wallet');
    }
  }, [tezos, walletAddress]);

  const getDayPass = useCallback(() => {
    return getTokenTime(DayPassToken.DayPass);
  }, [getTokenTime]);

  const getWeeklyPass = useCallback(() => {
    return getTokenTime(DayPassToken.WeeklyPass);
  }, [getTokenTime]);

  const getYearlyPass = useCallback(() => {
    return getTokenTime(DayPassToken.YearlyPass);
  }, [getTokenTime]);

  const getSpecialEventPass = useCallback(() => {
    return getTokenTime(DayPassToken.SpecialEventPass);
  }, [getTokenTime]);

  return {
    mintToken,
    getTokenTime,
    getDayPass,
    getWeeklyPass,
    getYearlyPass,
    getSpecialEventPass,
  };
};

export default useTezos;
