import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../model";
import { ToDoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  error: string;
  name: string;

  search: string;
  id: number;


  @Output() outSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor( private toDoService: ToDoService ) {
  }

  getSearch() {
    this.outSearch.emit(this.search);
  }

  ngOnInit() {
  }

  addItem() {
    this.error = '';
    if (this.name == null || this.name == undefined) {
      this.error = this.error + 'Empty title.';
    } else {
        const item: Item = {
        title: this.name,
        id: Date.now(),
        done: false
      }
      this.toDoService.addItem(item);
      this.name = null;
    }
  }

}

// addItem(title: string): void {
//   this.error = '';
//   this.id = this.lists.length+1;
//   if (title == null ) {
//     this.error = this.error + 'Empty title.';
//   } else {
//     this.lists.push(new Item(this.id, title, false));
//     this.error = '';
//     this.item = '';
//   }
// }
