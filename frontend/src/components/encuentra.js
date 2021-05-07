import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

import * as indexCSS from '../css/index.module.css';

const Imagen = styled(BackgroundImage)`
  height: 300px;
`;

export default function Encuentra() {
  const { imagen } = useStaticQuery(graphql`
    {
      imagen: file(relativePath: { eq: "encuentra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Imagen Tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
      <div className={indexCSS.imagenbg}>
        <h3 className={indexCSS.titulo}>
          Encuentra la propiedad de tus sueños
        </h3>
        <p>Años de experiencia en el mercado</p>
      </div>
    </Imagen>
  );
}
