import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import IconosCard from './iconosCard';

const Contenido = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;

const Aside = styled.aside`
  .precio {
    font-size: 2rem;
    color: #75ab00;
  }

  .agente {
    margin-top: 4rem;
    border-radius: 2rem;
    background-color: #75ab00;
    padding: 3rem;
    color: #fff;

    p {
      margin: 0;
    }
  }
`;

export const query = graphql`
  query($id: String!) {
    allStrapiPropiedades(filter: { id: { eq: $id } }) {
      nodes {
        nombre
        descripcion
        precio
        estacionamiento
        habitaciones
        wc
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        agentes {
          nombre
          telefono
          email
        }
      }
    }
  }
`;

export default function Propiedades({ data }) {
  // Obteniendo la información de la propiedad recibida en la primera posición del array
  const [propiedad] = data.allStrapiPropiedades.nodes;
  const {
    nombre,
    descripcion,
    precio,
    estacionamiento,
    habitaciones,
    wc,
    imagen,
    agentes,
  } = propiedad;

  return (
    <Layout>
      <h1>{nombre}</h1>
      <Contenido>
        <main>
          <Img fluid={imagen.sharp.fluid} alt={nombre} />
          <p>{descripcion}</p>
        </main>

        <Aside>
          <p className="precio">$ {precio}</p>
          <IconosCard
            estacionamiento={estacionamiento}
            habitaciones={habitaciones}
            wc={wc}
          />
          <div className="agente">
            <h2>Vendedor</h2>
            <p>{agentes.nombre}</p>
            <p>Teléfono: {agentes.telefono}</p>
            <p>Email: {agentes.email}</p>
          </div>
        </Aside>
      </Contenido>
    </Layout>
  );
}
