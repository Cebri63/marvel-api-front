import React from "react";
import { useHistory } from "react-router-dom";
import "./index.css";

const SlideMenu = ({ token, setUser, setApiKey, setDisable, setIsOpen }) => {
  const history = useHistory();
  return (
    <div className="slide-menu slideInLeft">
      {token ? (
        <button
          onClick={() => {
            setUser(null);
            setApiKey("");
            setDisable(false);
            setIsOpen(false);
            history.push("/");
          }}
          className="button-logout"
        >
          Se déconnecter
        </button>
      ) : (
        <div className="button-login-signup">
          <button
            onClick={() => {
              setIsOpen(false);
              history.push("/login");
            }}
            className="button-login"
          >
            Se connecter
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              history.push("/signup");
            }}
            className="button-signup"
          >
            S'inscrire
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              history.push("/");
            }}
            className="button-home"
          >
            Home
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              history.push("/documentation");
            }}
            className="button-documentation"
          >
            Documentation
          </button>
        </div>
      )}
    </div>
  );
};

export default SlideMenu;
