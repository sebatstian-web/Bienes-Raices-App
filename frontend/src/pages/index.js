import React from 'react';

import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

import Encuentra from '../components/encuentra';
import Layout from '../components/layout';
import ListadoPropiedades from '../components/listadoPropiedades';
import useInicio from '../hooks/useInicio';

import * as indexCSS from '../css/index.module.css';

const Imagen = styled(BackgroundImage)`
  height: 600px;
`;

export default function Index() {
  // Obtener el valor de la primera posición de array devuelvo y se le aplica la destructuración
  const [{ nombre, contenido, imagen }] = useInicio();

  return (
    <Layout>
      <Imagen Tag="section" fluid={imagen} fadeIn="soft">
        <div className={indexCSS.imagenbg}>
          <h1 className={indexCSS.titulo}>Venta de casa y departamentos</h1>
        </div>
      </Imagen>

      <main>
        <div
          css={css`
            max-width: 800px;
            margin: 0 auto;
          `}
        >
          <h1
            css={css`
              text-align: center;
            `}
          >
            {nombre}
          </h1>
          <p>{contenido}</p>
        </div>
      </main>
      <Encuentra />
      <ListadoPropiedades />
    </Layout>
  );
}
