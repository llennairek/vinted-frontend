import React from "react";
import "./OfferDetails.css";

function OfferDetails({ data }) {
  console.log(data);
  return (
    data && (
      <div className="offer-details-container container">
        <div className="offer-img-container">
          <img src={data.product_pictures[0].secure_url} alt="" />
        </div>
        <div className="offer-infos">
          <div className="offer-infos-price">
            {data.product_price.toFixed(2)} €
          </div>
          <div className="offer-infos-details">
            {data.product_details.map((item, index) => {
              return (
                <div key={index} className="offer-infos-details-item">
                  <span>{Object.keys(item)[0]}</span>
                  <span>{Object.values(item)[0]}</span>
                </div>
              );
            })}
          </div>
          <div className="offer-infos-description">
            <p>{data.product_name}</p>
            <p>{data.product_description}</p>
          </div>
          <div className="offer-infos-owner">
            <img
              src={data.owner.account.avatar.secure_url}
              alt="avatar"
              width="32px"
              height="32px"
            />
            <span>{data.owner.account.username}</span>
          </div>
          <button className="button-green">Acheter</button>
        </div>
      </div>
    )
  );
}

export default OfferDetails;
