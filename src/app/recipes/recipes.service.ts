import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Guacamole',
      imageUrl: 'https://static.onecms.io/wp-content/uploads/sites/9/2013/12/06/201310-xl-creamy-guacamole-recipe-2000.jpg',
      ingredients: ['Eggs', 'Avocado', 'Pepper', 'Salt'],
    },
    {
      id: 'r2',
      title: 'Fried salmon',
      imageUrl: 'https://overthefirecooking.com/wp-content/uploads/2019/06/IMG_7615.jpg',
      ingredients: ['Salmon', 'Lemon', 'Pepper', 'Salt', 'Olive oil'],
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => recipe.id === recipeId)};
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }
}
