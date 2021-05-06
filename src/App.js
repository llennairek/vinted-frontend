import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offer from "./containers/Offer";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Header from "./components/Header/Header";
import Cookies from "js-cookie";
import { useState } from "react";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

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
      <Header userToken={userToken} handleToken={handleToken} />
      <Switch>
        <Route path="/login">
          <Login handleToken={handleToken} />
        </Route>
        <Route path="/signup">
          <Signup handleToken={handleToken} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
