import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import axios from "axios";

function CheckoutForm({ data, userToken, userConnected }) {
  const stripe = useStripe();
  const elements = useElements();

  const currency = "eur";

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const cardElement = elements.getElement(CardElement);
    try {
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userConnected.id,
      });

      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://baf-vinted-backend.herokuapp.com/payment",
        {
          stripeToken,
          amount: Number(data.product_price) * 100,
          currency,
          description: data.product_description,
        },
        {
          headers: {
            authorization: `Bearer ${userToken}`,
          },
        }
      );

      if (response.data.status === "succeeded") {
        setCompleted(true);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {!completed ? (
        <form onSubmit={handleSubmit}>
          <CardElement />
          <button type="submit" className="button-green button-big pay">
            Valider le paiement
          </button>
        </form>
      ) : (
        <span className="payment-done bold">Paiement effectué !</span>
      )}
    </div>
  );
}

export default CheckoutForm;
