import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from '../todo.service';
import { delay } from 'rxjs/operators';
import { Item } from "../model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  completed: false;
  search: string;
  private loading: boolean = true;

  public lists: Item[] = [];
  constructor( private toDoService: ToDoService ) { }

  ngOnInit() {
    this.toDoService.getToDo().pipe(delay(500)).subscribe(async lists => {
      this.lists = lists,
      this.loading = false;
    });
  }

  getSearch(outSearch){
    this.search = outSearch;
  }

  addItem(item:Item) {
    this.toDoService.addItem(item).subscribe(item => {
      this.lists.push(item);
    });
  }

  deleteItem(id:number) {
    // Remove From UI
    this.lists = this.lists.filter(t => t.id !== id);
    // Remove from server
    this.toDoService.deleteItem(id).subscribe();
  }

  toggle(item:Item) {
    item.completed = !item.completed;
    this.toDoService.putItem(item).subscribe();
  }

}

// deleteItem(item) {
//   const index: number = this.lists.indexOf(item);
//   if (index !== -1) {
//       this.lists.splice(index, 1);
//   }
// }


  // lists: Item[] = [
  //   { name: "Хлеб", done: false },
  //   { name: "Масло", done: false },
  //   { name: "Картофель", done: true },
  //   { name: "Сыр", done: false }
  // ]
