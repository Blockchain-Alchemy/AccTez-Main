import React, { useEffect, useState } from 'react';
import { Loader } from '@mantine/core';
import { getWizard } from '../service/http';
import Main from './Main';
import Homepage from './Homepage';
import { useDispatch } from 'react-redux';
import { setWizardSettingAction } from '../store/actions';

const WizardLoader = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [wizard, setWizard] = useState(null);

  useEffect(() => {
    getWizard()
      .then((res: any) => {
        const wizard = res.data;
        dispatch(setWizardSettingAction(wizard));
        setWizard(wizard);
        setLoading(false);
      })
      .catch((error) => {
        setWizard(null);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div className="center">
          <Loader variant="bars" />
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
