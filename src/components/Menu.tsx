import * as React from "react";
import {
  PlasmicMenu,
  DefaultMenuProps,
} from "./plasmic/acc_tez_wizard/PlasmicMenu";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import useWallet from "../hooks/useWallet";

export interface MenuProps extends DefaultMenuProps {}

function Menu_(props: MenuProps, ref: HTMLElementRefOf<"div">) {
  const { walletAddress, connectWallet, disconnectWallet } = useWallet();

  const handleSyncButton = () => {
    if (walletAddress && walletAddress.length > 0) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  return (
    <PlasmicMenu
      root={{ ref }}
      {...props}
      synced={walletAddress != null && walletAddress.length > 0}
      syncButton={{ onClick: () => handleSyncButton() }}
    />
  );
}

const Menu = React.forwardRef(Menu_);
export default Menu;
