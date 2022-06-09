import { useCallback, useState } from "react";
import { useTezosContext } from "./useTezosContext";
import { PermissionScope } from "@airgap/beacon-sdk";

const useWallet = () => {
  const {tezos, wallet, options} = useTezosContext()!;
  const [walletAddress, setWalletAddress] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);

  const connectWallet = useCallback(() => {
    wallet.client
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
        setWalletConnected(true);
      });
  }, [tezos, wallet]);

  const disconnectWallet = async (): Promise<void> => {
    setWalletConnected(false);
  };

  return {
    connectWallet,
    disconnectWallet,
    walletAddress,
    walletConnected,
  };
};

export default useWallet;
