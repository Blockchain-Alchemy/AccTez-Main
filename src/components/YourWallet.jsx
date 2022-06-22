import * as React from "react";
import { useHistory } from "react-router-dom";
import { PlasmicYourWallet } from "./plasmic/blank_project/PlasmicYourWallet";

function YourWallet_(props, ref) {
  const history = useHistory();

  return (
    <PlasmicYourWallet
      root={{ ref }}
      {...props}
      backButton={{ onClick: () => history.push("/") }}
      nextButton={{ onClick: () => history.push("/setupStripe") }}
    />
  );
}

const YourWallet = React.forwardRef(YourWallet_);

export default YourWallet;
