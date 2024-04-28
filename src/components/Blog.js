import React from 'react';
import { useTranslation } from 'react-i18next';

function Blog() {
  const { t } = useTranslation();
  return (
<div
  className="center"
  id="cuerpo"
>
  <h2 id="ainhoa">
    Ainhoa (Pyrénées-Atlantiques)
  </h2>
  <br />
  <p>
    Un sitio increíble con unas vistas fantásticas, con muchos caballos y unos            senderos muy bonitos.
  </p>
  <br />
  <hr />
  <h2 id="cartindias">
    Cartagena de Indias (Colombia)
  </h2>
  <br />
  <p>
    Un museo militar subterráneo, que había desde un barco, a distintas figuras            militares
  </p>
  <p>
    Todo en frente de las costas de Cartagena de Indias, una de las ciudades más bonitas            que he conocido.
  </p>
  <br />
  <hr />
  <h2 id="panticosa">
    Panticosa (Huesca)
  </h2>
  <br />
  <p>
    Un valle dentro de los Pirineos, muy virgen y bonito. ¡Muy recomendable visitar si vas al            Pirineo aragonés!
  </p>
  <br />
  <hr />
</div>
  );
}

export default Blog;