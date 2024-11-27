import React from "react";
import "./styles.scss";

//IMAGES
import banner from "../../assets/images/banner_cute-form.jpg";

const HomePage: React.FC = () => {
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
          />
          <button>Enviar</button>
        </div>
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
