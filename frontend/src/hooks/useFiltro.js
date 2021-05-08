import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styled from '@emotion/styled';

const Formulario = styled.form`
  text-align: center;
  margin-top: 2rem;

  select {
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export default function useFiltro() {
  const { categorias } = useStaticQuery(graphql`
    {
      categorias: allStrapiCategorias {
        nodes {
          id
          nombre
        }
      }
    }
  `);

  const [categoria, setCategoria] = useState('');

  const FiltroUI = () => (
    <Formulario>
      <select
        onChange={({ target }) => setCategoria(target.value)}
        value={categoria}
        name="categoria"
      >
        <option value="">Todas</option>
        {categorias.nodes.map((opcion) => (
          <option key={opcion.id} value={opcion.nombre}>
            {opcion.nombre}
          </option>
        ))}
      </select>
    </Formulario>
  );

  return {
    categoria,
    FiltroUI,
  };
}
