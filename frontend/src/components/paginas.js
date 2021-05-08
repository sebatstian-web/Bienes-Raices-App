import React from 'react';
import { graphql } from 'gatsby';

import Img from 'gatsby-image';
import styled from '@emotion/styled';

import Layout from '../components/layout';

const ContenidoPagina = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 95%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 5rem;
  }
`;

// El id es recibido directamente por el context de gastby-node.js
export const query = graphql`
  query($id: String!) {
    allStrapiPaginas(filter: { id: { eq: $id } }) {
      nodes {
        id
        nombre
        contenido
        imagen {
          sharp: childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default function Paginas({ data }) {
  const [pagina] = data.allStrapiPaginas.nodes;
  const { nombre, contenido, imagen } = pagina;

  return (
    <Layout>
      <main className="contenedor">
        <h1>{nombre}</h1>
        <ContenidoPagina>
          <Img fluid={imagen.sharp.fluid} alt={nombre} />
          <p>{contenido}</p>
        </ContenidoPagina>
      </main>
    </Layout>
  );
}
