import React, { useState } from "react";
import "./styles.scss";

//IMAGES
import banner from "../../assets/images/banner_cute-form.jpg";
import getCep from "../../api/viaCep/getCep";

const HomePage: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean | null>(null);
  const [cepInfo, setCepInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

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

  const fetchCep = async () => {
    try {
      setError(null);
      const res = await getCep(cep);

      if (res.res && res.status === 200) {
        setCepInfo(res.res);
      } else {
        setError("CEP não encontrado ou inválido.");
        setCepInfo(null);
      }
    } catch (error) {
      setError("Erro ao buscar o CEP.");
      setCepInfo(null);
    }
  };

  return (
    <div className="home-page">
      <section id="header">
        <div className="banner">
          <img src={banner} />
        </div>
      </section>
      <section id="link-list" className="padding-hor-24 padding-top-24">
        <h2>Confira endereços de forma rápida</h2>
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
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <button onClick={fetchCep}>Enviar</button>
        </div>
        {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}

        {cepInfo && (
          <div className="cep-info">
            <h3>Informações do CEP:</h3>
            <p>
              <strong>CEP:</strong> {cepInfo.cep}
            </p>
            <p>
              <strong>Logradouro:</strong> {cepInfo.logradouro}
            </p>
            <p>
              <strong>Bairro:</strong> {cepInfo.bairro}
            </p>
            <p>
              <strong>Localidade:</strong> {cepInfo.localidade}
            </p>
            <p>
              <strong>UF:</strong> {cepInfo.uf}
            </p>
            <p>
              <strong>DDD:</strong> {cepInfo.ddd}
            </p>
          </div>
        )}
        <hr />
        <h2>Confira se um email tem formato válido</h2>
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
      <hr />
      <footer>
        <p className="disclaimer">
          André Toti & Danielle Trajano & Thaiza Nascimento | copyright © 2024 |
          All Rights Reserved | Belas Artes - ADS
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
