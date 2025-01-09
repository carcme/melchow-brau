const path = require("path");
const slugify = require("slugify");
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          tags
        }
      }
    }
  `);

  result.data.allContentfulRecipe.nodes.forEach((recipe) => {
    recipe.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      console.log("tagSlug: ", tagSlug);
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
