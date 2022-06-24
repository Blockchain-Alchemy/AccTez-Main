import { useCallback } from "react";
import { PermissionScope } from "@airgap/beacon-sdk";
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

  return {
    connectWallet,
    disconnectWallet,
    walletAddress,
  };
};

export default useWallet;
