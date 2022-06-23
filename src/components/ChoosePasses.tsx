import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { alertMessage } from "./Notification";
import {
  setTokenCheckedStateAction,
  setTokenTezosPriceAction,
  setTokenPriceAction,
  updateLessonStateAction,
} from "../store/actions";
import {
  PlasmicChoosePasses,
  DefaultChoosePassesProps
} from "./plasmic/acc_tez_wizard/PlasmicChoosePasses";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface ChoosePassesProps extends DefaultChoosePassesProps {}

const tokenNames = [ 'dayPass', 'weeklyPass', 'yearlyPass', 'specialPass' ];

function ChoosePasses_(props: ChoosePassesProps, ref: HTMLElementRefOf<"div">) {
  const dispatch = useDispatch();
  const wizardState = useSelector((state: any) => state.WizardState);
  const history = useHistory();
  const { dayPass, weeklyPass, yearlyPass, specialPass } = wizardState;

  const onTokenChecked = (token: string, checked: boolean) => {
    dispatch(setTokenCheckedStateAction(token, checked))
  }

  const onTezosPriceChange = (token: string, e: any) => {
    dispatch(setTokenTezosPriceAction(token, e.target.value))
  }

  const onTokenPriceChange = (token: string, e: any) => {
    dispatch(setTokenPriceAction(token, e.target.value))
  }

  const onNextButtonClicked = () => {
    if (!validate()) {
      return;
    }

    dispatch(updateLessonStateAction(1));
    history.push("/main");
  };

  const validate = () => {
    let checked = false;
    for (let name of tokenNames) {
      checked = checked || wizardState[name].checked as boolean;
    }
    if (!checked) {
      alertMessage("Please select pass tokens");
      return false;
    }

    for (let name of tokenNames) {
      const token = wizardState[name];
      if (token.checked) {
        if (token.tezos <= 0 || token.price <= 0) {
          alertMessage(`Please input token price, ${name}`);
          return false;
        }
      }
    }

    return true;
  }

  return (
    <PlasmicChoosePasses
      root={{ ref }}
      {...props}
      dayPassCheckbox={{
        isChecked: dayPass.checked,
        onChange: (e) => onTokenChecked("dayPass", e)
      }}      
      dayPassTezos={{
        defaultValue: dayPass.tezos,
        onChange: (e) => onTezosPriceChange("dayPass", e)
      }}
      dayPassPrice={{
        defaultValue: dayPass.price,
        onChange: (e) => onTokenPriceChange("dayPass", e)
      }}
      weeklyPassCheckbox={{
        isChecked: weeklyPass.checked,
        onChange: (e) => onTokenChecked("weeklyPass", e)
      }}
      weeklyPassTezos={{
        defaultValue: weeklyPass.tezos,
        onChange: (e) => onTezosPriceChange("weeklyPass", e)
      }}
      weeklyPassPrice={{
        defaultValue: weeklyPass.price,
        onChange: (e) => onTokenPriceChange("weeklyPass", e)
      }}
      yearlyPassCheckbox={{
        isChecked: yearlyPass.checked,
        onChange: (e) => onTokenChecked("yearlyPass", e)
      }}
      yearlyPassTezos={{
        defaultValue: yearlyPass.tezos,
        onChange: (e) => onTezosPriceChange("yearlyPass", e)
      }}
      yearlyPassPrice={{
        defaultValue: yearlyPass.price,
        onChange: (e) => onTokenPriceChange("yearlyPass", e)
      }}
      specialPassCheckbox={{
        isChecked: specialPass.checked,
        onChange: (e) => onTokenChecked("specialPass", e)
      }}
      specialPassTezos={{
        defaultValue: specialPass.tezos,
        onChange: (e) => onTezosPriceChange("specialPass", e)
      }}
      specialPassPrice={{
        defaultValue: specialPass.price,
        onChange: (e) => onTokenPriceChange("specialPass", e)
      }}
      backButton={{ onClick: () => history.push("/setupStripe") }}
      nextButton={{ onClick: () => onNextButtonClicked() }}
    />
  );
}

const ChoosePasses = React.forwardRef(ChoosePasses_);
export default ChoosePasses;