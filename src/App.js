import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
import Header from "./components/Header/Header";
import Cookies from "js-cookie";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function App() {
  //TOKEN STATE
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  //USER CONNECTED INFORMATION
  const [userConnected, setUserConnected] = useState({});
  //FILTERS STATE
  const [filterInput, setFilterInput] = useState("");
  const [sortFilter, setSortFilter] = useState("price-asc");
  const [priceMinFilter, setPriceMinFilter] = useState(0);
  const [priceMaxFilter, setPriceMaxFilter] = useState(500);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 1 });
    } else {
      Cookies.remove("userToken");
    }
    setUserToken(token);
  };
  return (
    <Router>
      <Header
        userToken={userToken}
        handleToken={handleToken}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
        sortFilter={sortFilter}
        setSortFilter={setSortFilter}
        priceMinFilter={priceMinFilter}
        setPriceMinFilter={setPriceMinFilter}
        priceMaxFilter={priceMaxFilter}
        setPriceMaxFilter={setPriceMaxFilter}
        userConnected={userConnected}
        setUserConnected={setUserConnected}
      />
      <Switch>
        <Route path="/payment">
          <Payment userToken={userToken} userConnected={userConnected} />
        </Route>
        <Route path="/publish">
          {userToken ? (
            <Publish userToken={userToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/login">
          <Login
            handleToken={handleToken}
            userConnected={userConnected}
            setUserConnected={setUserConnected}
          />
        </Route>
        <Route path="/signup">
          <Signup
            handleToken={handleToken}
            userConnected={userConnected}
            setUserConnected={setUserConnected}
          />
        </Route>
        <Route path="/offer/:id">
          <Offer userToken={userToken} />
        </Route>
        <Route path="/">
          <Home
            filterInput={filterInput}
            setFilterInput={setFilterInput}
            sortFilter={sortFilter}
            setSortFilter={setSortFilter}
            priceMinFilter={priceMinFilter}
            setPriceMinFilter={setPriceMinFilter}
            priceMaxFilter={priceMaxFilter}
            setPriceMaxFilter={setPriceMaxFilter}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
