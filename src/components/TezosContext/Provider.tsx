import React, { useMemo, useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { BeaconEvent, defaultEventCallbacks } from "@airgap/beacon-sdk";
import { TezosContext } from "./Context";
import { NetworkOptions } from "./types";

export interface TezosProviderProps {
  options: NetworkOptions;
  children: React.ReactNode;
}

function TezosProvider({ options, children }: TezosProviderProps) {
  const [walletAddress, setWalletAddress] = useState<string | undefined>(
    undefined
  );
  const [publicKey, setPublicKey] = useState<string | undefined>(undefined);

  const contextValue = useMemo(() => {
    const tezos = new TezosToolkit(options.rpc);
    const wallet = new BeaconWallet({
      name: options.appName,
      preferredNetwork: options.networkType,
      disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
      eventHandlers: {
        // To keep the pairing alert, we have to add the following default event handlers back
        [BeaconEvent.PAIR_INIT]: {
          handler: defaultEventCallbacks.PAIR_INIT,
        },
        [BeaconEvent.PAIR_SUCCESS]: {
          handler: (data) => console.log(data.publicKey),
        },
      },
    });
    tezos.setWalletProvider(wallet);
    return {
      tezos,
      wallet,
      options,
    };
  }, [options]);

  return (
    <TezosContext.Provider
      value={{
        ...contextValue,
        walletAddress,
        setWalletAddress,
        publicKey,
        setPublicKey,
      }}
    >
      {children}
    </TezosContext.Provider>
  );
}

export default TezosProvider;
