import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://farm2.static.flickr.com/1943/45502650601_cedc8df3a8_o.jpg', [new Ingredient('Meat', 1), new Ingredient('Fries', 20)]),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://farm2.static.flickr.com/1943/45502650601_cedc8df3a8_o.jpg', [new Ingredient('Veggies', 10), new Ingredient('Fries', 1000)])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
