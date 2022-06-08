import { TezosToolkit } from "@taquito/taquito";

export interface BeaconContextApi {
  tezos: TezosToolkit | undefined
  loading: boolean
  connected: boolean
  walletAddress: string | undefined
  connectWallet: () => Promise<void>
  disconnectWallet: () => Promise<void>
  setLoading: (loading: boolean) => void
}
