import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetails = new Recipe('select a recipe', 'select a recipe', 'select a recipe');

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetail(recipe) {
    this.recipeDetails = recipe;
  }

}
