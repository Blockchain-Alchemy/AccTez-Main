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

export const BeaconContext = createContext<BeaconContextApi>(
  {} as BeaconContextApi
);

const scopes: PermissionScope[] = [
  PermissionScope.OPERATION_REQUEST,
  PermissionScope.SIGN,
];

export interface BeaconProviderProps {
  appName: string;
  networkType: NetworkType;
  rpc: string;
  children: any;
}

export const BeaconProvider: React.FC<BeaconProviderProps> = (props: BeaconProviderProps) => {
  const [tezos, setTezos] = useState<TezosToolkit | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState<BeaconWallet | undefined>(undefined);
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
  const [connected, setConnected] = useState<boolean>(false);

  useEffect(() => {
    setWallet(undefined);
    setWalletAddress(undefined);
    setConnected(false);
    setTezos(new TezosToolkit(props.rpc));
  }, []);

  useEffect(() => {
    if (tezos) {
      const wallet = new BeaconWallet({
        name: props.appName,
        preferredNetwork: props.networkType,
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
      console.log("setWalletProvider", wallet);
      tezos.setWalletProvider(wallet);
      setWallet(wallet);
    }
  }, [tezos]);

  const connectWallet = async (): Promise<void> => {
    try {
      if (tezos && wallet) {
        setLoading(true);
        await wallet.client.requestPermissions({
          network: {
            type: props.networkType,
            rpcUrl: props.rpc,
          },
          scopes,
        });

        const address = await wallet.getPKH();
        console.log("userAddress", address);
        setWalletAddress(address);
        setConnected(true);
      }
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
        loading,
        connected,
        walletAddress,
        connectWallet,
        disconnectWallet,
        setLoading,
      }}
    >
      {props.children}
    </BeaconContext.Provider>
  );
};
