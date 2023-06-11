import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipesService {
    recipeSelected = new Subject<Recipe>();
    recipeChanged = new Subject<Recipe[]>();

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
        this.recipeChanged.next(this.recipes.slice());
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipeChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe
        this.recipeChanged.next(this.recipes.slice())
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipeChanged.next(this.recipes.slice())
    }
}