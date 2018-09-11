import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // foods = ['Bacon', 'Lettuce', 'Tomatoes'];
  foods = new BehaviorSubject(['Bacon', 'Lettuce', 'Tomatoes']);

  addFood(food) {
    // this.foods = [...this.foods, food];
    this.foods.next(food);
  }

}
