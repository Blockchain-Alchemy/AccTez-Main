import React, { useEffect, useState } from "react";
import { Center, Loader } from "@mantine/core";
import { getWizard } from "../service/http";
import Main from "./Main";
import Homepage from "./Homepage";

const center = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  padding: "10px",
} as any;

const WizardLoader = () => {
  const [loading, setLoading] = useState(true);
  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    getWizard().then((res: any) => {
      const wizard = res.data;
      setWizard(wizard);
      setLoading(false);
    })
    .catch(error => {
      setWizard(null);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div style={center}>
          <Center>
            <Loader variant="bars" />
          </Center>
        </div>
      ) : wizard ? (
        <Main />
      ) : (
        <Homepage />
      )}
    </>
  );
};

export default WizardLoader;
