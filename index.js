class Recipe {  //this is the class to start it all, it will be the base for the other classes
    constructor(name, ingredients, instructions) {
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }
  
    describe() {  //this method will describe the recipe
      return `${this.name}:\nIngredients: ${this.ingredients.join(', ')}\nInstructions: ${this.instructions}`;
    }
  }
  
  class RecipeBook { //this will hold the recipes and below will give you the options to add, view and delete them 
    constructor() {
      this.recipes = [];
    }
  
    addRecipe(recipe) {
      this.recipes.push(recipe);
    }
  
    viewRecipes() {
      return this.recipes.map((recipe, index) => `${index + 1}. ${recipe.describe()}`).join('\n\n');
    }
  
    deleteRecipe(index) {
      if (index > -1 && index < this.recipes.length) {
        this.recipes.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  class Menu { //this is how you can navigate through the recipes, and how it is viewed on the page. Also allows you to exit the program
    constructor() {
      this.recipeBook = new RecipeBook();
    }
  
    showMenu() {
      let selection = this.showMainMenuOptions();
      while (selection != 0) {
        switch (selection) {
          case '1':
            this.addRecipe();
            break;
          case '2':
            this.viewRecipes();
            break;
          case '3':
            this.deleteRecipe();
            break;
          default:
            selection = 0;
        }
        selection = this.showMainMenuOptions();
      }
      alert('Goodbye!');  //this is what displays when you hit "0" to exit

        }
  
    showMainMenuOptions() {
      return prompt(`
        0) Exit
        1) Add a new recipe
        2) View all recipes
        3) Delete a recipe
      `);
    }
  
    addRecipe() { //hitting this option on the menu and you can add a recipe
 //here and below are what i used to you can add the ingedients and instructions on what to do with the recipe that the user is adding
 // the prompts below are what the user will see when they are adding a recipe
      const name = prompt('Enter the name of the recipe:'); //const is used to declare a constant variable
      const ingredients = prompt('Enter the ingredients (separated by commas):').split(','); 
      const instructions = prompt('Enter the instructions:'); 
      const recipe = new Recipe(name, ingredients, instructions);
      this.recipeBook.addRecipe(recipe);
      alert('Recipe added successfully.');
    }
  //below the const is used to declare a constant variable and the alert is what users see when they view the recipes
    viewRecipes() {
      const recipeList = this.recipeBook.viewRecipes();
      alert(recipeList.length > 0 ? recipeList : 'No recipes available.');
    }
  //below is the prompt that the user will see when they are deleting a recipe, the if statement is what will display when the recipe is deleted
    deleteRecipe() {
      const index = prompt('Enter the index of the recipe to delete (starting from 1):') - 1;
      if (this.recipeBook.deleteRecipe(index)) {
        alert('Recipe deleted successfully.');
      } else {
        alert('Invalid index.');
      }
    }
  }
  //this is how the menu is displayed
  const menu = new Menu();
  menu.showMenu();