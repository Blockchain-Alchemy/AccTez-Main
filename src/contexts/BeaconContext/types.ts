import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";

export interface BeaconContextApi {
  tezos: TezosToolkit | undefined
  wallet: BeaconWallet | undefined
  loading: boolean
  connected: boolean
  walletAddress: string | undefined
  rpcUrl: string
  connectWallet: () => Promise<void>
  disconnectWallet: () => Promise<void>
  setLoading: (loading: boolean) => void
  setNetworkType: (networkType: NetworkType) => void
  setRpcUrl: (url: string) => void
}
