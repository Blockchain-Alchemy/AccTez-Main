import * as React from "react";
import { useHistory } from "react-router-dom";
import { PlasmicSetUpStripe } from "./plasmic/acc_tez_wizard/PlasmicSetUpStripe";

function SetUpStripe_(props, ref) {
  const history = useHistory();

  return (
    <PlasmicSetUpStripe
      root={{ ref }}
      {...props}
      skipButton={{ onClick: () => history.push("/choosePasses") }}
      backButton={{ onClick: () => history.push("/wallet") }}
      nextButton={{ onClick: () => history.push("/choosePasses") }}
    />
  );
}

const SetUpStripe = React.forwardRef(SetUpStripe_);

export default SetUpStripe;
