import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getfoodById(id:number):Foods{
    return this.getAll().find(food =>food.id ==id)!
  }
  getAllfoodbytag(tag:string):Foods[]{
    return tag=='all' ?
    this.getAll():this.getAll().filter(Food=>Food.tags?.includes(tag))
  }
  getAlltag():Tag[]{
    return[
      {name:'All',count:15},
      {name:'Fastfood',count:11},
      {name:'Breakfast',count:12},
      {name:'Drink',count:1},
      {name:'Food',count:3},
      {name:'Pizza',count:3}
    ]
  }
  getAll():Foods[]{
    return [
      {
        id:1,
        name:'Burger',
        cookTime:'10-20',
        price:40,
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl:'assets/food 1.jpg',
        tags:['Fastfood','Breakfast','All'],
      },
      {
        id:2,
        name:'Coffee',
        cookTime:'10',
        price:50,
        favorite:false,
        origins:['India'],
        star:4.7,
        imageUrl:'assets/food 2.jpg',
        tags:['Drink','Breakfast','All'],
      },
      {
        id:3,
        name:'Pasta',
        cookTime:'15-20',
        price:70,
        favorite:false,
        origins:['India'],
        star:4.8,
        imageUrl:'assets/food 3.jpg',
        tags:['Food','Breakfast','All'],
      },
      {
        id:4,
        name:'French Fries',
        cookTime:'10-20',
        price:50,
        favorite:false,
        origins:['India'],
        star:4.5,
        imageUrl:'assets/food 4.jpg',
        tags:['Fastfood','Breakfast','All'],
      },
      {
        id:5,
        name:'HotDog',
        cookTime:'15-20',
        price:60,
        favorite:false,
        origins:['India'],
        star:4.3,
        imageUrl:'assets/food 5.jpg',
        tags:['Fastfood','All'],
      },
      {
        id:6,
        name:'Waffers',
        cookTime:'10-20',
        price:55,
        favorite:false,
        origins:['India'],
        star:4.9,
        imageUrl:'assets/food 6.jpg',
        tags:['Fastfood','Breakfast','All'],
      },
      {
        id:7,
        name:'Extra Cheese Pizza',
        cookTime:'10-20',
        price:55,
        favorite:false,
        origins:['India','UK'],
        star:4.9,
        imageUrl:'assets/food 7.webp',
        tags:['Fastfood','Breakfast','Pizza','All'],
      },
      {
        id:8,
        name:'Corn Pizza',
        cookTime:'10-20',
        price:55,
        favorite:false,
        origins:['India','Canada','UK'],
        star:4.9,
        imageUrl:'assets/food 8.jpeg',
        tags:['Fastfood','Pizza','All'],
      },
      {
        id:9,
        name:'Cheese Pizza',
        cookTime:'10-20',
        price:55,
        favorite:false,
        origins:['India','Canada'],
        star:4.9,
        imageUrl:'assets/food 9.jpeg',
        tags:['Breakfast','Pizza','All'],
      },
      {
        id:10,
        name:'Brown Sandwich',
        cookTime:'10-20',
        price:30,
        favorite:false,
        origins:['India','Poland'],
        star:4.9,
        imageUrl:'assets/food 10.jpg',
        tags:['Fastfood','Breakfast','All'],
      },
      {
        id:11,
        name:'Sandwich',
        cookTime:'10-20',
        price:55,
        favorite:false,
        origins:['India','UK'],
        star:4.9,
        imageUrl:'assets/food 11.jpeg',
        tags:['Fastfood','Breakfast','All'],
      },
      {
        id:12,
        name:'Veg. Burgar',
        cookTime:'10-20',
        price:45,
        favorite:false,
        origins:['India','UK'],
        star:4.9,
        imageUrl:'assets/food 12.webp',
        tags:['Fastfood','All'],
      },
      {
        id:13,
        name:'Cheese Burgar',
        cookTime:'10-20',
        price:60,
        favorite:false,
        origins:['India','Chinese'],
        star:4.9,
        imageUrl:'assets/food 13.webp',
        tags:['food','Breakfast','All'],
      },
      {
        id:14,
        name:'Chowmine',
        cookTime:'10-15',
        price:30,
        favorite:false,
        origins:['India','Chinese'],
        star:4.9,
        imageUrl:'assets/food 14.jpeg',
        tags:['Breakfast','All'],
      },
      {
        id:15,
        name:'Choco Cake',
        cookTime:'10-20',
        price:40,
        favorite:false,
        origins:['US','India'],
        star:4.7,
        imageUrl:'assets/food 15.webp',
        tags:['food','Breakfast','cake','All'],
      }
    ]
     }
}
