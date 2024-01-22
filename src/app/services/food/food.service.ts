import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/pizza.jpg',
      '/assets/images/hamburger.jpg',
      '/assets/images/pie.jpg',
      '/assets/images/pizza.jpg',
      '/assets/images/hamburger.jpg',
      '/assets/images/pie.jpg',
    ]
  }
}
