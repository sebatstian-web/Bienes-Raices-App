const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resp = await graphql(`
    {
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
  } else {
    reporter.panic('Sin resultados', resp.errors);
  }
};
