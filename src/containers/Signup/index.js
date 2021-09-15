import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import illustration from "../../assets/images/illustration.jpg";
import "./index.css";
const Signup = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const response = await axios.post(
            "https://lereacteur-marvel-api.herokuapp.com/signup",
            {
              email,
              password,
            }
          );
          setUser(response.data.token, null);
          history.push("/");
        } catch (error) {
          console.log(error.message);
        }
      } else {
        setErrorMessage(
          "T'es mon héros... t'as réussi à taper deux mots de passe différents..."
        );
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
    if (input === "confirmPassword") {
      setConfirmPassword(event.target.value);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-img">
        <img src={illustration} alt="" />
      </div>
      <div className="signup-form">
        <h2>Créer ton compte pour exploiter l'API Marvel</h2>
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
          <label>confirmer le mot de passe</label>
          <input
            type="password"
            onChange={(event) => handleChange(event, "confirmPassword")}
          />
          <input type="submit" value="Créer un compte" />
        </form>
        <span className="signup-error-message">{errorMessage}</span>
        <span
          className="signup-go-to-signup"
          onClick={() => history.push("/login")}
        >
          Tu as déjà un compte ? Connecte-toi !
        </span>
      </div>
    </div>
  );
};

export default Signup;
