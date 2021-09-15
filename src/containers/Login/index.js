import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import illustration from "../../assets/images/illustration.jpg";
import "./index.css";
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      try {
        const response = await axios.post(
          "https://lereacteur-marvel-api.herokuapp.com/login",
          {
            email,
            password,
          }
        );
        setUser(
          response.data.token,
          response.data.apiKey ? response.data.apiKey : null
        );
        history.push("/");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      setErrorMessage("Tous les champs sont obligatoires !");
    }
  };

  const handleChange = (event, input) => {
    if (input === "email") {
      setEmail(event.target.value);
    }
    if (input === "password") {
      setPassword(event.target.value);
    }
  };

  return (
    <div className="login-container">
      <div className="login-img">
        <img src={illustration} alt="" />
      </div>
      <div className="login-form">
        <h2>Connecte-toi pour exploiter l'API Marvel</h2>
        <form onSubmit={handleSubmit}>
          <label>email</label>
          <input
            autoCapitalize="none"
            type="text"
            onChange={(event) => handleChange(event, "email")}
          />
          <label>mot de passe</label>
          <input
            type="password"
            onChange={(event) => handleChange(event, "password")}
          />

          <input type="submit" value="Se connecter" />
        </form>
        <span className="login-error-message">{errorMessage}</span>
        <span
          className="login-go-to-signup"
          onClick={() => history.push("/signup")}
        >
          Tu n'as pas de compte ? Crées-en un !
        </span>
      </div>
    </div>
  );
};

export default Login;
