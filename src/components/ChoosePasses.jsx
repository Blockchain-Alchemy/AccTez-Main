import * as React from "react";
import { useHistory } from "react-router-dom";
import { PlasmicChoosePasses } from "./plasmic/acc_tez_wizard/PlasmicChoosePasses";

function ChoosePasses_(props, ref) {
  const history = useHistory();

  return (
    <PlasmicChoosePasses
      root={{ ref }}
      {...props}
      backButton={{ onClick: () => history.push("/setupStripe") }}
      nextButton={{ onClick: () => history.push("/main") }}
    />
  );
}

const ChoosePasses = React.forwardRef(ChoosePasses_);

export default ChoosePasses;
