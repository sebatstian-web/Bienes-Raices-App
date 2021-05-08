import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
  display: flex;
  justify-content: space-between;
  flex: 1;
  max-width: 500px;
  margin: 3rem auto 0 auto;

  li {
    display: flex;

    img {
      margin-right: 1rem;
    }
  }
`;

export default function IconosCard({ estacionamiento, habitaciones, wc }) {
  const { iconos } = useStaticQuery(graphql`
    {
      iconos: allFile(filter: { relativeDirectory: { eq: "icons-cards" } }) {
        edges {
          node {
            id
            publicURL
          }
        }
      }
    }
  `);

  const iconoSvg = iconos.edges;

  return (
    <ListadoIconos>
      <li>
        <img src={iconoSvg[0].node.publicURL} alt="Habitaciones" />
        <p>{habitaciones}</p>
      </li>
      <li>
        <img src={iconoSvg[1].node.publicURL} alt="Estacionamientos" />
        <p>{estacionamiento}</p>
      </li>
      <li>
        <img src={iconoSvg[2].node.publicURL} alt="Baños" />
        <p>{wc}</p>
      </li>
    </ListadoIconos>
  );
}
