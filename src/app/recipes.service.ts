import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipes : Recipe[]=[{
    id:'Recipe1',
    title:'Pizza',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ingredients:['Pizza bread','Butter','Pizza sause','Onions','Cheese']
  },
  {
    id:'Recipe2',
    title:'Maggie',
    imageUrl: 'https://images.unsplash.com/photo-1602833280958-1657662ccc58?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ingredients:['Maggie','Water','Masala','Cheese']
  },
  {
    id:'Recipe3',
    title:'Pasta',
    imageUrl: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    ingredients:['Pasta','Onions','Capsicum','Masala','Cheese']
  },
  {
    id:'Recipe4',
    title:'Burger',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    ingredients:['Burger bread','Cabbage','Onions','Cheese slice']
  },{
    id:'Recipe5',
    title:'Dhosa',
    imageUrl: 'https://media.istockphoto.com/photos/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-picture-id1156896083',
    ingredients:['Dhosa Batter','Butter','Masala','Onions','Cheese']
  },
  {
    id:'Recipe6',
    title:'Noodles',
    imageUrl: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bm9vZGxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    ingredients:['Noodles','Oil','Red Chilli sause','Onions','Tomatos','Capsicum']
  },
  {
    id:'Recipe7',
    title:'Manchurian',
    imageUrl: 'https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-6.jpg',
    ingredients:['Cabbage','Oil','Soya sause','Onions','Red/Green chili sause']
  }]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes]
  }

  getRecipe(recipeId : string){
    return this.recipes.find(recipe => {
      return recipe.id === recipeId
    })
  }

  onDelete(recipeId : string){
    this.recipes= this.recipes.filter(recipe => {
      return recipe.id !== recipeId
    })
  }
}
