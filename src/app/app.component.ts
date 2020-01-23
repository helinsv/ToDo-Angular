import { Component } from '@angular/core';
import { Model, TodoItem } from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Model();
  //todo = new TodoItem[];

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items;
    }


}
