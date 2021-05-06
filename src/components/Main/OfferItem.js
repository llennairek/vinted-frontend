import React from "react";
import { Link } from "react-router-dom";
import "./OfferItem.css";

function OfferItem({
  _id,
  owner,
  product_image,
  product_price,
  product_details,
}) {
  return (
    <div className="item-container">
      <Link to={`/offer/${_id}`} owner={owner}>
        <div className="owner">
          {owner.account.avatar ? (
            <img
              src={owner.account.avatar.secure_url}
              alt="avatar"
              width="24px"
              height="24px"
            />
          ) : null}

          <span>{owner.account.username}</span>
        </div>
        <div className="item-image-wrapper">
          <img src={product_image.secure_url} alt="" />
        </div>
        <div className="item-details">
          <p className="item-price">{product_price} €</p>
          {/* <p className="details">{product_details[1].TAILLE}</p>
          <p className="details">{product_details[0].MARQUE}</p> */}
        </div>
      </Link>
    </div>
  );
}

export default OfferItem;
