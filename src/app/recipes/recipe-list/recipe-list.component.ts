import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Utterly Butterly Delicious', 'https://iwashyoudry.com/wp-content/uploads/2021/01/American-Goulash-Recipe.jpg')
  ]
}
