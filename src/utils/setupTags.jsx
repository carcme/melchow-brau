const setupTags = (recipes) => {
  const allTags = {};

  recipes.forEach((recipe) => {
    recipe.tags !== null &&
      recipe.tags.forEach((tag) => {
        if (allTags[tag]) {
          allTags[tag] = allTags[tag] + 1;
        } else {
          allTags[tag] = 1;
        }
      });
  });

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag); // sort on alphabet
  });
  return newTags;
};

export default setupTags;
