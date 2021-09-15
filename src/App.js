import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cookie from "js-cookie";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Documentation from "./containers/Documentation";
import Header from "./components/Header";
import SlideMenu from "./components/SlideMenu";
import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";

function App() {
  const [token, setToken] = useState(Cookie.get("token") || null);
  const [apiKey, setApiKey] = useState("");
  const [disable, setDisable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const setUser = (token, apiKey) => {
    if (token) {
      setToken(token);
      Cookie.set("token", token);
      setApiKey(apiKey);
    } else {
      setToken(null);
      Cookie.remove("token");
    }
  };
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <Header
          setUser={setUser}
          token={token}
          setApiKey={setApiKey}
          setDisable={setDisable}
        />
        <Burger
          className="burger"
          isOpen={isOpen}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        {isOpen && (
          <SlideMenu
            setIsOpen={setIsOpen}
            token={token}
            setUser={setUser}
            setApiKey={setApiKey}
            setDisable={setDisable}
          />
        )}
      </div>

      <Switch>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/documentation">
          <Documentation />
        </Route>
        <Route path="/">
          <Home
            token={token}
            setApiKey={setApiKey}
            apiKey={apiKey}
            setDisable={setDisable}
            disable={disable}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
