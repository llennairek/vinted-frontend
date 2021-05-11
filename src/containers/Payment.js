import React from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/Checkout/CheckoutForm";
import "./payment.css";

const stripePromise = loadStripe(
  "pk_test_51IpuUtKQHD7d48ZMpdlzQcTz3k5CtSkHhE6Y85YVk3bXZOLOFwqvCWFcfM4r5sP7UEuYaMugCzWBHMTT0RwvAjGa00k1iRbz2E"
);

function Payment({ userToken, userConnected }) {
  // recept location state
  const location = useLocation();
  const { data } = location.state;

  //add fees and calculate total price
  const protectFee = 0.4;
  const shippingFee = 0.8;
  const total = Number(data.product_price) + protectFee + shippingFee;

  console.log(data);
  console.log("userToken:    ", userToken);

  return (
    <div className="payment-wrapper">
      <div className="payment-container">
        <span>Résumé de la commande</span>
        <div className="payment-price-infos">
          <div className="payment-price-item-wrapper">
            <div className="payment-price-item">
              <span>Commande</span>
              <span>{data.product_price.toFixed(2)} €</span>
            </div>
            <div className="payment-price-item">
              <span>Frais de protection acheteurs</span>
              <span>0.40 €</span>
            </div>
            <div className="payment-price-item">
              <span>Frais de port</span>
              <span>0.80 €</span>
            </div>
          </div>
          <div className="payment-price-item bold total">
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <p>
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span className="bold">{data.product_name}</span>. Vous allez payer{" "}
            <span className="bold">{total.toFixed(2)} €</span> (frais de
            protection et frais de port inclus).
          </p>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            data={data}
            userToken={userToken}
            userConnected={userConnected}
          />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;
