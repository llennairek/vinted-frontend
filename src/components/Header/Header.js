import React, { useState } from "react";
import Logo from "./Logo";
import Button from "../General/Button";
import avatar from "../../assets/avatarV2.png";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { Range, getTrackBackground } from "react-range";

function Header({
  handleToken,
  userToken,
  filterInput,
  setFilterInput,
  sortFilter,
  setSortFilter,
  priceMinFilter,
  setPriceMinFilter,
  priceMaxFilter,
  setPriceMaxFilter,
  userConnected,
  setUserConnected,
}) {
  const [sortIsActive, setSortIsActive] = useState(false);
  const [values, setValues] = useState([priceMinFilter, priceMaxFilter]);

  let location = useLocation();

  console.log(userConnected);

  const handleSearchInput = (event) => {
    setFilterInput(event.target.value);
  };

  const handleSortClick = () => {
    setSortIsActive(!sortIsActive);
    if (sortFilter === "price-asc") setSortFilter("price-desc");
    else setSortFilter("price-asc");
  };

  const handleChangePrice = () => {
    setPriceMinFilter(values[0]);
    setPriceMaxFilter(values[1]);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <Link to="/">
            <Logo />
          </Link>
          {location.pathname === "/" && (
            <div className="filter-container">
              <div className="search-container">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Rechercher des articles"
                  value={filterInput}
                  onChange={handleSearchInput}
                />
              </div>

              <div className="all-filters-price">
                <span>Trier par prix</span>
                <div
                  onClick={handleSortClick}
                  className={
                    sortIsActive ? `filter-sort isActive` : "filter-sort"
                  }
                ></div>
                <span>Prix entre</span>
                <Range
                  step={1}
                  min={0}
                  max={500}
                  values={values}
                  onChange={(values) => setValues([...values])}
                  onFinalChange={handleChangePrice}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "6px",
                        width: "50%",
                        background: getTrackBackground({
                          values,
                          colors: ["#ccc", "#2baeb7", "#ccc"],
                          min: 0,
                          max: 500,
                        }),
                      }}
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ index, props }) => (
                    <div
                      {...props}
                      style={{
                        ...props.style,
                        height: "16px",
                        width: "16px",
                        backgroundColor: "#2baeb7",
                        borderRadius: "50%",
                        outline: "none",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "-28px",
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "14px",
                          fontFamily:
                            "Arial,Helvetica Neue,Helvetica,sans-serif",
                          padding: "4px",
                          borderRadius: "4px",
                          backgroundColor: "#2baeb7",
                        }}
                      >
                        {values[index].toFixed(1)}
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
          )}
          <div className="user">
            {userConnected.account && (
              <>
                <img
                  src={
                    userConnected.account.avatar
                      ? userConnected.account.avatar.secure_url
                      : avatar
                  }
                  height="28px"
                  width="28px"
                  alt="avatar"
                />
                <span>{userConnected.account.username}</span>
              </>
            )}
          </div>
          <div className="buttons-container">
            {userToken ? (
              <Button
                text="Se déconnecter"
                className="button-red"
                handleToken={handleToken}
                setUserConnected={setUserConnected}
              />
            ) : (
              <>
                <Link to="/signup">
                  <Button text="S'inscrire" className="button-white" />
                </Link>
                <Link to="/login">
                  <Button text="Se connecter" className="button-white" />
                </Link>
              </>
            )}

            <Link to="/Publish">
              <Button text="Vends tes articles" className="button-green" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
