import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import PropiedadPreview from './propiedadPreview';
import usePropiedades from '../hooks/usePropiedades';
import useFiltro from '../hooks/useFiltro';

import * as propiedadesCSS from '../css/propiedades.module.css';

export default function ListadoPropiedades() {
  const propiedades = usePropiedades();
  const { categoria, FiltroUI } = useFiltro();
  const [propiedadesFiltradas, setPropiedadesFiltradas] = useState([]);

  useEffect(() => {
    if (categoria) {
      const filtro = propiedades.filter(
        (propiedad) => propiedad.categoria.nombre === categoria
      );
      setPropiedadesFiltradas(filtro);
    } else {
      setPropiedadesFiltradas(propiedades);
    }
  }, [categoria, propiedades]);

  return (
    <>
      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
        `}
      >
        Nuestras propiedades
      </h2>

      {FiltroUI()}

      <ul className={propiedadesCSS.propiedades}>
        {propiedadesFiltradas.map((propiedad) => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  );
}
