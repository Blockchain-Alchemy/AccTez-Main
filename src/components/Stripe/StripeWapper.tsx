import React, { useEffect, useState } from 'react';
import { Loader } from '@mantine/core';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js/pure';
import { useSelector } from 'react-redux';

interface StripeWrapperProps {
  children: any;
}

function StripeWrapper({ children }: StripeWrapperProps) {
  const wizard = useSelector((state: any) => state.MainState.wizard);
  const [stripeObject, setStripeObject] = useState<any>(null);

  useEffect(() => {
    const fetchStripeObject = async () => {
      const res = await loadStripe(wizard.stripe.publicKey);
      setStripeObject(res);
    };
    console.log('wizard', wizard);
    if (wizard.stripe) {
      fetchStripeObject();
    }
  }, [wizard]);

  if (!stripeObject) {
    return (
      <div className="center">
        <Loader variant="bars" />
      </div>
    );
  }

  return <Elements stripe={stripeObject}>{children}</Elements>;
}

export default StripeWrapper;
