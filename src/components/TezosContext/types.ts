import { NetworkType } from "@airgap/beacon-sdk";

export interface NetworkOptions {
  appName: string;
  networkType: NetworkType;
  rpc: string;
}
