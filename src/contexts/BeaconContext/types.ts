import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { NetworkType } from "@airgap/beacon-sdk";

export interface BeaconContextApi {
  tezos: TezosToolkit | undefined
  loading: boolean
  connected: boolean
  walletAddress: string | undefined
  connectWallet: () => Promise<void>
  disconnectWallet: () => Promise<void>
  setLoading: (loading: boolean) => void
}
