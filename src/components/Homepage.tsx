import * as React from "react";
import { useHistory } from "react-router-dom";
import {
  PlasmicHomepage,
  DefaultHomepageProps
} from "./plasmic/acc_tez_wizard/PlasmicHomepage";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface HomepageProps extends DefaultHomepageProps {}

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const history = useHistory();
  
  return (
    <PlasmicHomepage
      root={{ ref }}
      {...props}
      nextButton={{ onClick: () => history.push('/wallet') }}
    />
  );
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
