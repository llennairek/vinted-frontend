import React from "react";
import "./OfferDetails.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import defaultAvatar from "../../assets/avatarV2.png";
import { useHistory } from "react-router-dom";

function OfferDetails({ data, userToken }) {
  //responsiveness for the react-multi-carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  let history = useHistory();

  const handleBuyClick = () => {
    if (userToken) {
      history.push("/payment", { data });
    } else {
      history.push("/login");
    }
  };

  return (
    data && (
      <div className="offer-details-wrapper">
        <div className="offer-details-container container">
          <div className="offer-img-container">
            <Carousel
              containerClass="carousel-container"
              responsive={responsive}
              removeArrowOnDeviceType={["mobile"]}
            >
              {data.product_pictures && data.product_pictures.length > 0 ? (
                data.product_pictures.map((item) => {
                  return (
                    <img
                      key={item.secure_url}
                      src={item.secure_url}
                      alt="product"
                    />
                  );
                })
              ) : (
                <img src={data.product_image.secure_url} alt="" />
              )}
              {/* <img src={data.product_pictures[0].secure_url} alt="" /> */}
            </Carousel>
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
              {data.owner.account.avatar ? (
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt="avatar"
                  width="24px"
                  height="24px"
                />
              ) : (
                <img
                  src={defaultAvatar}
                  alt="avatar"
                  width="24px"
                  height="24px"
                />
              )}
              <span>{data.owner.account.username}</span>
            </div>
            <button className="button-green" onClick={handleBuyClick}>
              Acheter
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default OfferDetails;
