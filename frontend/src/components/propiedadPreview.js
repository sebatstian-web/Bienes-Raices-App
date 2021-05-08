import React from 'react';
import { Link } from 'gatsby';

import Img from 'gatsby-image';
import styled from '@emotion/styled';
import urlSlug from 'url-slug';

import IconosCard from './iconosCard';

const Boton = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #75ab00;
  width: 100%;
  color: #fff;
  display: block;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
`;

const Card = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 2rem;

  img {
    max-width: 100%;
  }
`;

const Contenido = styled.div`
  padding: 2rem;

  h3 {
    margin: 0 0 2rem 0;
    font-size: 1.6rem;
  }

  .precio {
    font-size: 1.2rem;
    color: #75ab00;
  }
`;

export default function PropiedadPreview({ propiedad }) {
  const {
    nombre,
    precio,
    estacionamiento,
    habitaciones,
    wc,
    imagen,
  } = propiedad;

  return (
    <Card>
      <Img fluid={imagen.sharp.fluid} alt={nombre} />
      <Contenido>
        <h3>{nombre}</h3>
        <p className="precio">$ {precio}</p>

        <IconosCard
          estacionamiento={estacionamiento}
          habitaciones={habitaciones}
          wc={wc}
        />

        <Boton to={urlSlug(nombre)}>Visitar propiedad</Boton>
      </Contenido>
    </Card>
  );
}
