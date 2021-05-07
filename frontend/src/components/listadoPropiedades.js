import React, { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import PropiedadPreview from './propiedadPreview';
import usePropiedades from '../hooks/usePropiedades';

import * as propiedadesCSS from '../css/propiedades.module.css';

export default function ListadoPropiedades() {
  const resp = usePropiedades();
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => setPropiedades(resp), [resp]);

  console.log({ propiedades });

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

      <ul className={propiedadesCSS.propiedades}>
        {propiedades.map((propiedad) => (
          <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
      </ul>
    </>
  );
}
