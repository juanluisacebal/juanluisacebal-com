import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css'; 
function Home() {
  const { t } = useTranslation();
  return (
    <div
  className="center"
  id="cuerpo"
>
  <h2>
    Ainhoa (Pyrénées-Atlantiques)
  </h2>
  <br />
  <a href="blog">
    <img
      alt="Ainhoa"
      src="/img/aihnoa.jpeg"
    />
  </a>
  <br />
  <hr />
  <h2>
    Cartagena de Indias (Colombia)
  </h2>
  <br />
  <a href="blog">
    <img
      alt="Cartagena_Indias"
      src="img/cartagena.jpg"
    />
  </a>
  <br />
  <hr />
  <h2>
    Panticosa (Huesca)
  </h2>
  <br />
  <a href="blog">
    <img
      alt="Panticosa"
      src="img/panticosa.jpeg"
    />
  </a>
  <br />
  <hr />
</div>
  );
}

export default Home;