import * as homePage from './homePage.js';
import * as auth0 from './auth0.js';
import * as fetchRecipes from './fetchRecipes.js';
// import * as recipeAPI from './apiConfig';


function init() {
  homePage.header();
  homePage.main();
  homePage.searchedRecipe();
  homePage.clickUser();
  homePage.footer();
  auth0.executeAuth0();
  fetchRecipes.recipes();
  fetchRecipes.foundRecipes();
  homePage.clickUser();
  homePage.footer();
  auth0.executeAuth0();
}

window.addEventListener('load', init);

export function add(x, y) {
  return x + y;
  // do not delete this code as it is used for testing.
}

window.addEventListener('load', init);
