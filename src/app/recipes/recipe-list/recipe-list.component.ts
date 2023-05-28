import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Utterly Butterly Delicious', 'https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg'),
    new Recipe('Test Recipe', 'Utterly Butterly Delicious', 'https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg')
  ]

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
