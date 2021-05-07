import { useStaticQuery, graphql } from 'gatsby';

export default function useInicio() {
  // gatsby-transformer-sharp permite usar el duotone
  const resp = useStaticQuery(graphql`
    query {
      allStrapiPaginas(filter: { nombre: { eq: "Inicio" } }) {
        nodes {
          id
          nombre
          contenido
          imagen {
            sharp: childImageSharp {
              fluid(
                maxWidth: 1200
                duotone: {
                  highlight: "#222222"
                  shadow: "#192550"
                  opacity: 30
                }
              ) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return resp.allStrapiPaginas.nodes.map((pagina) => ({
    nombre: pagina.nombre,
    contenido: pagina.contenido,
    imagen: pagina.imagen.sharp.fluid,
  }));
}
