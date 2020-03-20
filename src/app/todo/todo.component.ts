import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToDoService } from '../todo.service';
import { delay } from 'rxjs/operators';
import { TodoFormComponent } from "../todo-form/todo-form.component";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  private loading: boolean = true;
  @Input() search: string;

  constructor( private toDoService: ToDoService ) { }

  ngOnInit() {
    this.toDoService.getToDo().pipe(delay(500)).subscribe(() => {
      this.loading = false;
    });
  }


  deleteItem(id: number) {
    this.toDoService.deleteItem(id);
  }

}

// ngOnInit() {
  // this.toDoService.GetToDo().subscribe(async items => {
  //   this.lists = items;
  // });
// }

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
