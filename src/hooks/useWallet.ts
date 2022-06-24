import { useCallback } from "react";
import { PermissionScope, RequestSignPayloadInput } from "@airgap/beacon-sdk";
import { useTezosContext } from "./useTezosContext";

const useWallet = () => {
  const {wallet, options, walletAddress, setWalletAddress} = useTezosContext()!;

  const connectWallet = useCallback(() => {
    return wallet.client
      .requestPermissions({
        network: {
          type: options.networkType,
          rpcUrl: options.rpc,
        },
        scopes: [PermissionScope.OPERATION_REQUEST, PermissionScope.SIGN],
      })
      .then(() => {
        return wallet.getPKH();
      })
      .then((walletAddress: string) => {
        setWalletAddress(walletAddress);
        return walletAddress;
      });
  }, [wallet, options, setWalletAddress]);

  const disconnectWallet = async (): Promise<void> => {
    setWalletAddress(undefined);
  };

  const requestSignPayload = (messagePayload: RequestSignPayloadInput) => {
    return wallet.client.requestSignPayload(messagePayload);
  }

  return {
    connectWallet,
    disconnectWallet,
    walletAddress,
    requestSignPayload,
  };
};

export default useWallet;
