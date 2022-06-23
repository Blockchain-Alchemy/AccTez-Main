import * as React from "react";
import {
  PlasmicInputNumber,
  DefaultInputNumberProps
} from "./plasmic/acc_tez_wizard/PlasmicInputNumber";
import { TextInputRef } from "@plasmicapp/react-web";

interface InputNumberProps extends DefaultInputNumberProps {}

function InputNumber_(props: InputNumberProps, ref: TextInputRef) {
  const { plasmicProps } = PlasmicInputNumber.useBehavior<InputNumberProps>(
    props,
    ref
  );
  return <PlasmicInputNumber {...plasmicProps} />;
}

const InputNumber = React.forwardRef(InputNumber_);

export default Object.assign(InputNumber, {
  __plumeType: "text-input"
});
