import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipesService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import { pipe } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipesService) {}


    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ng-course-recipe-book-3453b-default-rtdb.firebaseio.com/recipes.json', recipes)
                    .subscribe((response) => console.log(response))
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://ng-course-recipe-book-3453b-default-rtdb.firebaseio.com/recipes.json')
                .pipe(map(recipes => {
                    return recipes.map(recipe => {
                        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
                    })
                }), tap((recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes)
                }));
    }
}