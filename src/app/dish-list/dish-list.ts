import { Component } from '@angular/core';
import { Dish } from './dish.model';
import { AppHover } from '../directives/app-hover';

@Component({
  selector: 'dish-list',
  imports: [AppHover],
  templateUrl: './dish-list.html',
  styleUrl: './dish-list.css',
})
export class DishList {
  allDishes: Dish[] = [
    {
      dishId: 1,
      dishName: 'Pasta',
      dishPrice: 250,
      dishDescription: 'Delicious Italian pasta with tomato sauce.',
      dishImageUrl:
        'https://plus.unsplash.com/premium_photo-1664478288635-b9703a502393?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      dishId: 2,
      dishName: 'Pizza',
      dishPrice: 500,
      dishDescription: 'Cheesy pizza with various toppings.',
      dishImageUrl:
        'https://plus.unsplash.com/premium_photo-1661762555601-47d088a26b50?q=80&w=892&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      dishId: 3,
      dishName: 'Burger',
      dishPrice: 300,
      dishDescription: 'Juicy beef burger with lettuce and tomato.',
      dishImageUrl:
        'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww',
    },
  ];
}
