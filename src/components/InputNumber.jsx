import * as React from "react";
import { PlasmicInputNumber } from "./plasmic/acc_tez_wizard/PlasmicInputNumber";

function InputNumber_(props, ref) {
  const { plasmicProps } = PlasmicInputNumber.useBehavior(props, ref);
  return <PlasmicInputNumber {...plasmicProps} />;
}

const InputNumber = React.forwardRef(InputNumber_);

export default Object.assign(InputNumber, {
  __plumeType: "text-input"
});
