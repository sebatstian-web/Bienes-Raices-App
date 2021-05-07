import React from 'react';
import Helmet from 'react-helmet';

import { Global, css } from '@emotion/react';

import Header from './header';

export default function Layout({ children }) {
  return (
    <>
      <Global
        styles={css`
          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          html {
            box-sizing: border-box;
          }

          body {
            font: 1rem 'Lato', sans-serif;
          }

          p {
            line-height: 2;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          img {
            max-width: 100%;
          }

          .contenedor {
            max-width: 120rem;
            margin: 0 auto;
            width: 95%;
          }
        `}
      />

      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Bienes Raices App</title>
      </Helmet>
      <Header />
      {children}
    </>
  );
}
