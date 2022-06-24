import React from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkOptions } from "./types";

export interface TezosContextValue {
  tezos: TezosToolkit;
  wallet: BeaconWallet;
  options: NetworkOptions;
  walletAddress: string | undefined;
  setWalletAddress: (address: string | undefined) => void;
  publicKey: string | undefined;
  setPublicKey: (publicKey: string | undefined) => void;
}

export const TezosContext = React.createContext<TezosContextValue>({} as any);

export type TezosContextInstance = typeof TezosContext;

if (process.env.NODE_ENV !== "production") {
  TezosContext.displayName = "TezosContext";
}

export default TezosContext;
