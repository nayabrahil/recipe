import { Component, OnInit } from '@angular/core';
import { RECIPES } from '../mock-recipe';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }
  recipe: Array<Recipe>;
  recipe_image: String;
  recipe_title: String;

  ngOnInit(): void {
    this.recipe = RECIPES;
    this.recipe_title = this.recipe[0].recipe_title;
    this.recipe_image = this.recipe[0].recipe_image;
  }
}
