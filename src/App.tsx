import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { PlasmicRootProvider, PlasmicCanvasHost } from "@plasmicapp/loader-react";
import { PLASMIC } from './plasmic-init';
import WizardLoader from "./components/WizardLoader";
import Home from "./components/Homepage";
import YourWallet from "./components/YourWallet";
import SetUpStripe from "./components/SetUpStripe";
import ChoosePasses from "./components/ChoosePasses";
import Main from "./components/Main";
import BuyAPass from "./components/BuyAPass";
import Login from "./components/Login";
import StripePayment from "./components/Stripe";
import Access from "./components/Access";
import Qr from "./components/Qr";

function App() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <BrowserRouter>
        <Switch>
          <Route path="/stripe">
            <StripePayment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/access">
            <Access />
          </Route>
          <Route path="/qr">
            <Qr />
          </Route>
          <Route path="/wizard" exact>
            <Home />
          </Route>
          <Route path="/wallet">
            <YourWallet />
          </Route>
          <Route path="/setupStripe">
            <SetUpStripe />
          </Route>
          <Route path="/choosePasses">
            <ChoosePasses />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/checkout">
            <BuyAPass />
          </Route>
          <Route path="/plasmic-host" render={() => <PlasmicCanvasHost />} />
          <Route path="/" exact>
            <WizardLoader />
          </Route>
        </Switch>
      </BrowserRouter>
    </PlasmicRootProvider>
  );
}

export default App;
