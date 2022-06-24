import { useCallback } from "react";
import { PermissionScope, RequestSignPayloadInput } from "@airgap/beacon-sdk";
import { useTezosContext } from "./useTezosContext";

const useWallet = () => {
  const {
    wallet,
    options,
    walletAddress,
    setWalletAddress,
    publicKey,
    setPublicKey,
  } = useTezosContext()!;

  const connectWallet = useCallback(() => {
    return wallet.client
      .requestPermissions({
        network: {
          type: options.networkType,
          rpcUrl: options.rpc,
        },
        scopes: [PermissionScope.OPERATION_REQUEST, PermissionScope.SIGN],
      })
      .then((permission: any) => {
        console.log("permission", permission);
        setPublicKey(permission.accountInfo.publicKey);
        setWalletAddress(permission.address);
        return permission.address;
      })
  }, [wallet, options, setWalletAddress, setPublicKey]);

  const disconnectWallet = async (): Promise<void> => {
    setWalletAddress(undefined);
  };

  const requestSignPayload = (messagePayload: RequestSignPayloadInput) => {
    return wallet.client.requestSignPayload(messagePayload);
  };

  return {
    connectWallet,
    disconnectWallet,
    walletAddress,
    publicKey,
    requestSignPayload,
  };
};

export default useWallet;
