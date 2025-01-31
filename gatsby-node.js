const path = require("path");
const slugify = require("slugify");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulBreweryProduct {
        nodes {
          tags
        }
      }
    }
  `);

  result.data.allContentfulBreweryProduct.nodes.forEach((recipe) => {
    recipe.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.jsx`),
        context: {
          tag: tag,
        },
      });
    });
  });
};
