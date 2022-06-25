import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { StripeCardElement } from "@stripe/stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import useResponsiveFontSize from "../../hooks/useResponsiveFontSize";
import * as http from "../../service/http";
import { getTokenFullName, getTokenId } from "../../utils";
import {
  alertMessage,
  hideNotification,
  startNotification,
  updateErrorNotification,
  updateSuccessNotification,
} from "../Notification";
import useWallet from "../../hooks/useWallet";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const CardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const { walletAddress } = useWallet();
  const mainState = useSelector((state: any) => state.MainState);
  const { tokenPrices, checkout: tokenName } = mainState;

  const tokenFullName = useMemo(() => {
    if (tokenName) {
      return getTokenFullName(tokenName);
    }
    return "Token";
  }, [tokenName]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      //addMessage("Stripe.js has not yet loaded.");
      alertMessage("Stripe", "Stripe.js has not yet loaded.");
      return;
    }

    startNotification("stripe", "Purchase", "Purchase token ...");

    const { error: backendError, clientSecret } =
      await http.createPaymentIntent(tokenName);
    if (backendError) {
      console.log(backendError?.message);
      hideNotification("stripe");
      return;
    }
    console.log("Client secret returned");

    const { error: stripeError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement) as StripeCardElement,
          billing_details: {
            name: event.target.name.value,
          },
          metadata: {
            address: event.target.address.value,
          },
        },
      });

    if (stripeError) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(stripeError.message);
      hideNotification("stripe");
      return;
    }

    console.log("paymentIntent", paymentIntent);
    console.log(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);

    if (paymentIntent.status === "succeeded") {
      updateSuccessNotification("stripe", "Mint token ...");
      const payload = {
        paymentIntent: paymentIntent.id,
        walletAddress,
        tokenId: getTokenId(tokenName),
      };
      http
        .createToken(payload)
        .then(() => {
          updateSuccessNotification(
            "stripe",
            `The ${tokenFullName} has been minted successfully`
          );
        })
        .catch(() => {
          updateErrorNotification("stripe", `Failed to mint token`);
        });
    } else {
      updateErrorNotification("stripe", "Failed to Payment");
    }
  };

  const getTokenPrice = () => {
    const token = tokenPrices?.find((token: any) => token.name === tokenName);
    return token ? token.price : 0;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="event-info">
            <h3 className="event-title">{tokenFullName}</h3>
            <h4 className="event-price">Price: ${getTokenPrice()}</h4>
          </div>
        </div>
        <label>
          Address
          <input type="text" name="address" />
        </label>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Card details
          <CardElement
            options={options}
            onReady={() => {
              console.log("CardElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardElement [blur]");
            }}
            onFocus={() => {
              console.log("CardElement [focus]");
            }}
          />
        </label>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </>
  );
};

export default CardForm;
