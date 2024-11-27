import React, { useState } from "react";
import "./styles.scss";

//IMAGES
import banner from "../../assets/images/banner_cute-form.jpg";

const HomePage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailValidation = () => {
    setIsEmailValid(validateEmail(email));

    setTimeout(() => {
      setIsEmailValid(null);
    }, 5000);
  };

  return (
    <div className="home-page">
      <section id="header">
        <div className="banner">
          <img src={banner} />
        </div>
      </section>
      <section id="link-list" className="padding-hor-24 padding-top-24">
        <p>Confira endereços de forma rápida</p>
        <p className="description">
          Com a API ViaCep integrada podemos conferir rapidamente um endereço em
          todo Brasil!
        </p>
        <div className="form">
          <input
            type="text"
            id="cep-number"
            placeholder="Informe o CEP para consultar"
            required
          />
          <button>Enviar</button>
        </div>
        <p>Confira se um email tem formato válido</p>
        <p className="description">
          Avaliamos a formatação para conferir se o mesmo é válido!
        </p>
        <div className="form">
          <input
            type="text"
            id="email"
            placeholder="Informe o E-mail para consultar"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleEmailValidation}>Enviar</button>
        </div>
        {isEmailValid !== null && (
          <p
            style={{
              fontSize: "0.75rem",
              color: isEmailValid ? "green" : "red",
              marginTop: "8px",
              fontWeight: "bold",
            }}
          >
            {isEmailValid
              ? "O e-mail está em um formato válido!"
              : "O e-mail está em um formato inválido!"}
          </p>
        )}
      </section>

      <footer>
        <p className="disclaimer">
          André Toti & Danielle Trajano | copyright © 2024 | All Rights Reserved
          | Belas Artes - ADS
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
