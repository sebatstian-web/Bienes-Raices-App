import React from 'react';
import { Link } from 'gatsby';

import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 0;
    flex-direction: row;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  padding: 0.5rem;
  margin-right: 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  &.pagina-actual {
    border-bottom: 2px solid #fff;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLink to="/" activeClassName="pagina-actual">
        Inicio
      </NavLink>
      <NavLink to="/propiedades" activeClassName="pagina-actual">
        Propiedades
      </NavLink>
      <NavLink to="/nosotros" activeClassName="pagina-actual">
        Nosotros
      </NavLink>
    </Nav>
  );
}
