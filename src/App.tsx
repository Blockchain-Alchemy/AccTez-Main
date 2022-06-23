import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { PlasmicRootProvider, PlasmicCanvasHost } from "@plasmicapp/loader-react";
import { PLASMIC } from './plasmic-init';
import Home from "./components/Homepage";
import YourWallet from "./components/YourWallet";
import SetUpStripe from "./components/SetUpStripe";
import ChoosePasses from "./components/ChoosePasses";
import Main from "./components/Main";

function App() {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      <BrowserRouter>
        <Switch>
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
          <Route path="/plasmic-host" render={() => <PlasmicCanvasHost />} />
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </PlasmicRootProvider>
  );
}

export default App;
