import React from "react";
import "./styles.css";
import CardForm from "./CardForm";
import StripeWrapper from "./StripeWapper";

const StripePayment = () => {
  //const dispatch = useDispatch();
  //const wizard = useSelector((state: any) => state.MainState.wizard);
  //console.log('wizard', wizard)

  // useEffect(() => {
  //   http.getWizard().then((res: any) => {
  //     const wizard = res.data;
  //     dispatch(setWizardSettingAction(wizard));
  //   })
  // }, [dispatch]);

  return (
    <StripeWrapper>
      <div className="DemoWrapper">
        <CardForm />
      </div>
    </StripeWrapper>
  );
};

export default StripePayment;
