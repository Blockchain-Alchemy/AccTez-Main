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
import PassTokenCheck from "./components/PassTokenCheck";

function App() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dayPass">
            <PassTokenCheck token="dayPass" />
          </Route>
          <Route path="/weeklyPass">
            <PassTokenCheck token="weeklyPass" />
          </Route>
          <Route path="/yearlyPass">
            <PassTokenCheck token="yearlyPass" />
          </Route>
          <Route path="/specialPass">
            <PassTokenCheck token="specialPass" />
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
