import { useStaticQuery, graphql } from 'gatsby';

export default function usePropiedades() {
  const { propiedades } = useStaticQuery(graphql`
    {
      propiedades: allStrapiPropiedades {
        nodes {
          id
          nombre
          descripcion
          precio
          estacionamiento
          habitaciones
          wc
          imagen {
            sharp: childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          categoria {
            nombre
          }
          agentes {
            nombre
            telefono
            email
          }
        }
      }
    }
  `);

  return propiedades.nodes;
}
