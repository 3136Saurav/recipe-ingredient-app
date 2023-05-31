import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
    ingredientsUpdated = new EventEmitter<Ingredient[]>();

    ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ]

    getIngredients() {
        return this.ingredients.slice()
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsUpdated.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsUpdated.emit(this.ingredients.slice())
    }
}