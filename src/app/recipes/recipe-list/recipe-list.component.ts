import { Component, OnInit } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://farm2.static.flickr.com/1943/45502650601_cedc8df3a8_o.jpg'),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://farm2.static.flickr.com/1943/45502650601_cedc8df3a8_o.jpg')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
