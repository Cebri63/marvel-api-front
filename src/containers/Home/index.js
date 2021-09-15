import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import hero from "../../assets/images/hero.jpg";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

const Home = ({
  token,
  setApiKey,
  apiKey,
  setDisable,
  disable,
  setIsOpen,
  isOpen,
}) => {
  const [copied, setCopied] = useState(false);
  const [refreshAnim, setRefreshAnim] = useState("");

  const history = useHistory();

  const handleClick = async (event, refresh) => {
    try {
      if (token) {
        setDisable(true);
        if (refresh) {
          // Si token, on fait la suite
          const response = await axios.get(
            "https://lereacteur-marvel-api.herokuapp.com/get-api-key?refresh=true",
            {
              headers: { authorization: `Bearer ${token}` },
            }
          );
          setApiKey(response.data.apiKey);
        } else {
          if (apiKey) {
            setApiKey(apiKey);
          } else {
            // Si token, on fait la suite
            const response = await axios.get(
              "https://lereacteur-marvel-api.herokuapp.com/get-api-key",
              {
                headers: { authorization: `Bearer ${token}` },
              }
            );
            setApiKey(response.data.apiKey);
          }
        }
      } else {
        // Sinon go to lo login
        history.push("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="home-container">
      <div className="home-hero">
        <img src={hero} alt="marvel heros" />
      </div>
      <div className="home-button-container">
        {apiKey ? (
          <div className="apiKey-button-container">
            <label>Clique pour copier</label>
            <button
              onClick={() => {
                navigator.clipboard.writeText(apiKey);
                setCopied(true);
                setTimeout(() => setCopied(false), 400);
              }}
            >
              <div>
                <span>{apiKey}</span>
                {copied && <span className="copied">Copié !</span>}
              </div>
            </button>
          </div>
        ) : (
          <button disabled={disable} onClick={handleClick}>
            Récupérer mon API Key
          </button>
        )}
        {apiKey && (
          <FontAwesomeIcon
            className={`refresh-icon ${refreshAnim}`}
            icon={faSync}
            onAnimationEnd={() => {
              setRefreshAnim("");
            }}
            onClick={(event) => {
              setRefreshAnim("rotateIn");
              handleClick(event, "refresh");
            }}
          >
            Régénérer
          </FontAwesomeIcon>
        )}
      </div>
    </div>
  );
};

export default Home;
