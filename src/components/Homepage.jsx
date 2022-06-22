import * as React from "react";
import { useHistory } from "react-router-dom";
import { PlasmicHomepage } from "./plasmic/blank_project/PlasmicHomepage";

function Homepage_(props, ref) {
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
