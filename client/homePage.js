export function header() {
  const selectHeader = document.querySelector('header');

  const menuBar = document.createElement('div');
  menuBar.className = 'fas fa-bars';

  const logoDiv = document.createElement('a');
  const recipify = document.createElement('h1');
  recipify.id = 'logo';
  recipify.textContent = 'RECIPIFY';

  const account = document.createElement('a');
  account.className = 'fas fa-user';
  account.id = 'user';

  const loginContainer = document.createElement('div');
  loginContainer.className = 'loginContainer';

  const login = document.createElement('button');
  login.id = 'login';
  login.className = 'account';
  login.textContent = 'Login';
  login.disabled = true;
  loginContainer.append(login);
  const logout = document.createElement('button');
  logout.id = 'logout';
  logout.className = 'account';
  logout.textContent = 'Logout';
  logout.disabled = true;
  loginContainer.append(logout);

  logoDiv.append(recipify);
  selectHeader.append(menuBar, logoDiv, account, loginContainer);

  // account.addEventListener('click', () => {
  //   console.log('account clicked');
  //   const accountPageContainer = document.querySelector('#accountContainer');
  //   accountPageContainer.classList.add('accountContainer');

  //   const loginBtn = document.createElement('button');
  //   loginBtn.classList.add('loginBtn');
  //   loginBtn.textContent = 'Login';

  //   accountPageContainer.append(loginBtn);
  // });
}

export function footer() {
  const footer = document.querySelector('footer');
  let a = 0;
  for (let i = 1; i <= 3; i += 1) {
    const log = document.createElement('a');
    a++;
    log.id = `footer${a}`;
    footer.append(log);
  }
  const footer1 = document.querySelector('#footer1');
  footer1.className = 'fa fa-history';

  const footer2 = document.querySelector('#footer2');
  footer2.className = 'fa fa-heart';

  const footer3 = document.querySelector('#footer3');
  footer3.className = 'fa fa-allergies';
}

export function main() {
  const selectMain = document.querySelector('main');

  const ingredientSection = document.createElement('div');
  ingredientSection.className = 'ingredientSection';

  const found = document.createElement('div');
  found.className = 'found';
  // found.textContent = 'we found [-] recipes!';

  const foundRecipesTemp = document.createElement('template');
  foundRecipesTemp.className = 'foundRecipesTemp';
  found.append(foundRecipesTemp);

  const foundRecipes = document.createElement('div');
  foundRecipes.className = 'foundRecipes';
  foundRecipes.textContent = 'we found [-] recipes!';

  foundRecipesTemp.append(foundRecipes);


  //Below code makes the form element and appends the first (base) ingredient input element to the form

  const ingredientInputForm = document.createElement('form');
  ingredientInputForm.className = 'ingredientSelectionForm';

  const formInput1 = document.createElement('input');
  formInput1.className = 'formInputFeilds';
  formInput1.placeholder = 'Please Type Ingredient Name';

  const numberOfItemsInput = document.createElement('input');
  numberOfItemsInput.className = 'itemNumberInput';
  numberOfItemsInput.type = 'number';
  numberOfItemsInput.min = '1';
  if(numberOfItemsInput.min === false){
    alert('Please enter a number greater than 0');
  }
  ingredientInputForm.append(formInput1, numberOfItemsInput);

  //Below creates a text element and sets the text content (creates base for the ingredient adder)

  let add1 = document.createElement('a');
  add1.className = 'fa fa-plus-circle add';
  add1.textContent = ' add another ingredient';

  //Below adds an event listener to the 'add' element that triggers a function to create a new input felid for the ingredient form

  add1.addEventListener('click', addInputFunction);

  function addInputFunction() {
    if(formInput1.value !== ''|| numberOfItemsInput.value !== '') {
    const newFormInput = document.createElement('input');
    newFormInput.className = 'formInputFeilds';
    newFormInput.placeholder = 'Please Type Ingredient Name';
    const newNumberInput = document.createElement('input');
    newNumberInput.className = 'itemNumberInput';
    newNumberInput.type = 'number';
    newNumberInput.min = '1';
    newNumberInput.placeholder = 'Please Type Ingredient Quantity';
    ingredientInputForm.append(newFormInput, newNumberInput);
    } else{
      alert('Please enter an ingredient');
    }
  }

  const search = document.createElement('button');
  search.className = 'searchIngredient';
  search.textContent = 'search for recipes';
  const sectionHeader = document.querySelector('header');

  ingredientSection.append(sectionHeader);
  selectMain.append(found, ingredientSection, ingredientInputForm,add1, search);
}

export function searchedRecipe() {
  const selectMain = document.querySelector('main');
  const searched = document.createElement('template');
  searched.className = 'searched';

  selectMain.append(searched);
}

function showLogin() {
  document.querySelector('.loginContainer').classList.toggle('display');
}

export function clickUser() {
  document.querySelector('#user').addEventListener('click', showLogin);
}

// export function menuToggle() {
//   const menuCloseBtn = document.querySelector('#menuClose');
//   const menuOpenBtn = document.querySelector('#hamburgerBtn');
//   const divBackground = document.querySelector('#menuDiv');

//   menuCloseBtn.addEventListener('click', () => {
//     if (divBackground.style.display === 'none') {
//       divBackground.style.display = 'block';
//     } else {
//       divBackground.style.display = 'none';
//     }
//   });

//   menuOpenBtn.addEventListener('click', () => {
//     if (divBackground.style.display === 'none') {
//       divBackground.style.display = 'block';
//     } else {
//       divBackground.style.display = 'none';
//     }
//   });
// }
