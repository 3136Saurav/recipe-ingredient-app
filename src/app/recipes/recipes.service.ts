import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Utterly Butterly Delicious', 'https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg', [new Ingredient('Meat', 1), new Ingredient('White Sauce', 2)]),
        new Recipe('Pancake', 'Creamy', 'https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg', [new Ingredient('Cabbage', 2), new Ingredient('Pudina', 5)])
    ]

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
    }

}