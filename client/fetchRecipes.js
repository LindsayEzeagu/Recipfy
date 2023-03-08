import { getRecipeByIngredients } from './spoonacularRequest.js';

export async function recipes() {
  const response = await fetch('/recipes', {
    headers: {
      'Content-type': 'application/json',
    },
  });

  const recipes = await response.json();

  recipes.forEach(recipe => {
    const ingredients = document.querySelector('.ingredientSection');

    const createDiv = document.createElement('div');
    createDiv.id = recipe.id;
    createDiv.className = 'recipeContainer';
    ingredients.append(createDiv);

    const recipeImg = document.createElement('img');
    recipeImg.src = recipe.image;
    recipeImg.className = 'recipeImg';


    const recipeInfo = document.createElement('div');
    recipeInfo.className = 'recipeInfo';


    const recipeName = document.createElement('h1');
    recipeName.textContent = recipe.name;
    recipeName.className = 'recipeName';

    const recipeadd = document.createElement('h1');
    recipeadd.textContent = recipe.add;
    recipeadd.className = 'recipeadd';

    recipeInfo.append(recipeName, recipeadd);
    createDiv.append(recipeImg, recipeInfo);
  });
}

export function foundRecipes() {
  const found = document.querySelector('.found');

//   const cartTemplate = document.querySelector('#cartTemplate');
//   const createDiv = document.createElement('div');
//   createDiv.className = 'cartPage';
//   cartTemplate.append(createDiv);

  const foundRecipes = document.querySelector('.foundRecipes');
  const search = document.querySelector('.searchIngredient');

  search.addEventListener('click', async () => {

    // clear the recipes
    const ingredients = document.querySelector('.ingredientSection');
    ingredients.querySelectorAll('.recipeContainer').forEach(recipe => {
      recipe.remove();
    });


    // call the getRecipeByIngredients function
    // get value of input box, get value of input box
    const ingredientName = document.querySelector('.formInputFeilds');
    const recipeQuantity = document.querySelector('.itemNumberInput');

    const recipes = await getRecipeByIngredients(ingredientName.value, recipeQuantity.value);

    // render the new recipes
    recipes.forEach(recipe => {
      const createDiv = document.createElement('div');
      createDiv.id = recipe.id;
      createDiv.className = 'recipeContainer';
      ingredients.append(createDiv);
  
      const recipeImg = document.createElement('img');
      recipeImg.src = recipe.image;
      recipeImg.className = 'recipeImg';
  
  
      const recipeInfo = document.createElement('div');
      recipeInfo.className = 'recipeInfo';
  
  
      const recipeName = document.createElement('h1');
      recipeName.textContent = recipe.title;
      recipeName.className = 'recipeName';
  
      const recipeadd = document.createElement('h1');
      recipeadd.textContent = recipe.add;
      recipeadd.className = 'recipeadd';
  
      recipeInfo.append(recipeName, recipeadd);
      createDiv.append(recipeImg, recipeInfo);
    });


    // feedback to the user

    const cloned = foundRecipes.cloneNode(true);
    found.textContent = '';
    found.append(cloned);
  });
}
