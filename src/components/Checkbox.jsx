import * as React from "react";
import { PlasmicCheckbox } from "./plasmic/acc_tez_wizard/PlasmicCheckbox";

function Checkbox_(props, ref) {
  const { plasmicProps } = PlasmicCheckbox.useBehavior(props, ref);
  return <PlasmicCheckbox {...plasmicProps} />;
}

const Checkbox = React.forwardRef(Checkbox_);

export default Object.assign(Checkbox, {
  __plumeType: "checkbox"
});
