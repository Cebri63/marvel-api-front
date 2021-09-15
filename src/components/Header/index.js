import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";
import logo from "../../assets/images/logo.svg";

const Header = ({ token, setUser, setApiKey, setDisable }) => {
  const history = useHistory();

  return (
    <>
      <div className="header-container">
        <div>
          <img
            src={logo}
            alt="marvel logo"
            className="logo"
            onClick={() => {
              history.push("/");
            }}
          />
        </div>

        <span>L'API officielle Marvel... mais en mieux !</span>

        {token ? (
          <div>
            <button
              className="button-documentation"
              onClick={() => {
                history.push("/documentation");
              }}
            >
              Documentation
            </button>
            <button
              onClick={() => {
                setUser(null);
                setApiKey("");
                setDisable(false);
                history.push("/");
              }}
              className="button-logout"
            >
              Se déconnecter
            </button>
          </div>
        ) : (
          <div>
            <button
              className="button-documentation"
              onClick={() => {
                history.push("/documentation");
              }}
            >
              Documentation
            </button>
            <button
              onClick={() => {
                history.push("/login");
              }}
              className="button-login"
            >
              Se connecter
            </button>
            <button
              onClick={() => {
                history.push("/signup");
              }}
              className="button-signup"
            >
              S'inscrire
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
