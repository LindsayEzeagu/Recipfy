
/**
 * getRecipeByIngredients calls the Spoonacular API and returns an array of objects including recipes based on the input parameters.
 * @param {string} ingredients - Ingredients to input into the function call.
 * @param {string} noOfRecipes - The number of recipes to return from the function call.
 */

export async function getRecipeByIngredients(ingredients, noOfRecipes) {
  let apiKey = await fetch('/get-api-key');
  const apiKeyText = apiKey.text();
  console.log(apiKeyText);
  apiKey = apiKeyText.then(response => {
    return response;
  });

  return apiKey.then(async (key) => {
    console.log(key);
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=${noOfRecipes}&apiKey=${key}`);
    const data = response.json();

    return data.then(recipeArr => {
      console.log(recipeArr);
      return (recipeArr);
    })
    // Added catch for error case, logging the error to the user.
    .catch(err => {
      console.log(err);
    });
  });
}


// getRecipeByIngredients('apples,+flour,+sugar', '5');

/**
 * getRecipeIngredients calls the Spoonacular API and returns all of the ingredients for one recipe based on the id parameter.
 * @param {string} id - The recipe id that the function will use to call the api and return a recipe for.
 */

export async function getRecipeIngredients(id) {
  // Fetching the api key from the server, did not want to include the api key in the client source code.
  let apiKey = await fetch('/get-api-key');
  const apiKeyText = apiKey.text();
  apiKey = apiKeyText.then(response => {
    return response;
  });
  apiKey.then(async (key) => {
    console.log(key);
    // Fetching from the Spoonacular API with included function input id and API Key
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${key}`);
    const data = response.json();
    data.then(ingredientsArr => {
      console.log(ingredientsArr);
      return (ingredientsArr);
    })
    // Added catch for error case, logging the error to the user.
    .catch(err => {
      console.log(err);
    });
  });
}

// getRecipeIngredients('1003464');

/**
 * searchForIngredients calls the Spoonacular API and ingredients/whole foods that the user may want to use to search for a recipe.
 * @param {string} ingredient
 * @param {string} noOfIngredients
 */

export async function searchForIngredients(ingredient, noOfIngredients) {
  // Fetching the api key from the server, did not want to include the api key in the client source code.
  let apiKey = await fetch('/get-api-key');
  const apiKeyText = apiKey.text();
  apiKey = apiKeyText.then(response => {
    return response;
  });
  apiKey.then(async (key) => {
    console.log(key);
    // Fetching from the Spoonacular API with an inputted ingredient search and number of ingredients that should be returned.
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/search?query=${ingredient}&number=${noOfIngredients}&apiKey=${key}`);
    const data = response.json();
    data.then(ingredientsArr => {
      console.log(ingredientsArr);
      return (ingredientsArr);
    })
    // Added catch for error case, logging the error to the user.
    .catch(err => {
      console.log(err);
    });
  });
}

const searchIngredient = document.querySelector('.searchIngredient');
if(searchIngredient) {
  searchIngredient.addEventListener('click', performSearch);
}

function performSearch() {
  const grabField = document.querySelector('.formInputFeilds');
  grabField.value;
  const grabInput = JSON.stringify(grabField);
  console.log(grabInput);
}
// performSearch();

searchForIngredients('banana', '5');

/*

const SpoonacularApi = require('spoonacular_api');

export function initializeRecipeAPI() {
  const defaultClient = SpoonacularApi.ApiClient.instance;
  // Configure API key authorization: apiKeyScheme
  const apiKeyScheme = defaultClient.authentications.apiKeyScheme;
  apiKeyScheme.apiKey = '329d8cddb2af41269536bO3c381f3e71';
  // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
  // apiKeyScheme.apiKeyPrefix['apiKey'] = "Token"

  const api = new SpoonacularApi.IngredientsApi();
  const opts = {
    query: 'burger', // {String} The (natural language) search query.
    _number: 10, // {Number} The maximum number of items to return (between 1 and 100). Defaults to 10.
    metaInformation: false, // {Boolean} Whether to return more meta information about the ingredients.
    intolerances: 'egg', // {String} A comma-separated list of intolerances. All recipes returned must not contain ingredients that are not suitable for people with the intolerances entered. See a full list of supported intolerances.
  };
  const callback = function (error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ' + data);
    }
  };
  api.autocompleteIngredientSearch(opts, callback);
}
*/
