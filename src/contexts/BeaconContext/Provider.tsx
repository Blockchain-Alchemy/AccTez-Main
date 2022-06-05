import React, { createContext, useState, useEffect } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import {
  NetworkType,
  PermissionScope,
  BeaconEvent,
  defaultEventCallbacks,
} from "@airgap/beacon-sdk";
import { BeaconContextApi } from "./types";
import { REACT_APP_NETWORK_TYPE, REACT_APP_RPC } from "config";

export const BeaconContext = createContext<BeaconContextApi>(
  {} as BeaconContextApi
);

const scopes: PermissionScope[] = [
  PermissionScope.OPERATION_REQUEST,
  PermissionScope.SIGN,
];

export const BeaconProvider: React.FC<{ children: any }> = ({ children }) => {
  const [tezos, setTezos] = useState<TezosToolkit | undefined>(undefined);
  const [networkType, setNetworkType] = useState<NetworkType>(REACT_APP_NETWORK_TYPE as NetworkType);
  const [rpcUrl, setRpcUrl] = useState(REACT_APP_RPC);

  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState<BeaconWallet | undefined>(undefined);
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    console.log("create toolkit", rpcUrl);
    setWallet(undefined);
    setWalletAddress(undefined);
    setConnected(false);
    setTezos(new TezosToolkit(rpcUrl));
  }, [rpcUrl, setTezos]);

  useEffect(() => {
    if (tezos) {
      const wallet = new BeaconWallet({
        name: "PiXL - Grenada",
        preferredNetwork: networkType,
        disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
        eventHandlers: {
          // To keep the pairing alert, we have to add the following default event handlers back
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT,
          },
          [BeaconEvent.PAIR_SUCCESS]: {
            handler: (data) => console.log(data.publicKey),
          },
        },
      });
      tezos?.setWalletProvider(wallet);
      setWallet(wallet);
      console.log("Tezos.setWalletProvider", wallet, tezos);
    }
  }, [tezos, networkType, setWallet]);

  const connectWallet = async (): Promise<void> => {
    try {
      if (!wallet || !tezos) {
        return;
      }
      setLoading(true);

      console.log("Request Permission", networkType, rpcUrl, tezos);
      await wallet.client.requestPermissions({
        network: {
          type: networkType,
          rpcUrl: rpcUrl,
        },
        scopes,
      });

      const address = await wallet.getPKH();
      console.log("userAddress", address);
      setWalletAddress(address);

      setConnected(true);
    } catch (error) {
      console.log(error);
      setConnected(false);
    } finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async (): Promise<void> => {
    setConnected(false);
    /*if (wallet) {
      await wallet.client.removeAllAccounts();
      await wallet.client.removeAllPeers();
      await wallet.client.destroy();
    }*/
  };

  return (
    <BeaconContext.Provider
      value={{
        tezos,
        wallet,
        loading,
        connected,
        walletAddress,
        rpcUrl,
        connectWallet,
        disconnectWallet,
        setLoading,
        setNetworkType,
        setRpcUrl,
      }}
    >
      {children}
    </BeaconContext.Provider>
  );
};
