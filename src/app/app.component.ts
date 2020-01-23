import { Component } from '@angular/core';
import { Model, TodoItem} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Model();
  //todo = new TodoItem[];
  item:string;

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items;
    }

  addItem(newItem) {
    //let test = null;
    if (newItem !== "") {
      this.model.items.push(new TodoItem(newItem, false));
      this.item = '';
    }


  }
}
