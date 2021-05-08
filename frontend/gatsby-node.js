const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resp = await graphql(`
    {
      allStrapiPaginas {
        nodes {
          id
          nombre
        }
      }
      allStrapiPropiedades {
        nodes {
          id
          nombre
        }
      }
    }
  `);

  if (!resp.errors) {
    const propiedades = resp.data.allStrapiPropiedades.nodes;
    const paginas = resp.data.allStrapiPaginas.nodes;

    // Creando las páginas dinámicas y estáticas
    propiedades.forEach((propiedad) => {
      actions.createPage({
        path: urlSlug(propiedad.nombre),
        component: require.resolve('./src/components/propiedades.js'),
        context: {
          id: propiedad.id,
        },
      });
    });

    paginas.forEach((pagina) => {
      actions.createPage({
        path: urlSlug(pagina.nombre),
        component: require.resolve('./src/components/paginas.js'),
        context: {
          id: pagina.id,
        },
      });
    });
  } else {
    reporter.panic('Sin resultados', resp.errors);
  }
};
