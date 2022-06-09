import TezosProvider from "./components/TezosContext/Provider";
import type { TezosProviderProps } from "./components/TezosContext/Provider";
import type { NetworkOptions } from "./components/TezosContext/types";
import useWallet from "./hooks/useWallet";

export type {
  TezosProviderProps,
  NetworkOptions,
}

export {
  TezosProvider,
  useWallet,
};
