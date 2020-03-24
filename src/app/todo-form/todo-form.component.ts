import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  public lists: Item[] = [];
  @Output() outSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

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
        completed: false
      }
        // this.lists.push(item);
        // this.toDoService.addItem(item).subscribe(item2 => {
        //   this.lists.push(item2);
          this.addTodo.emit(item);
          this.name = '';
        };
    }

  }

// addItem(title: string): void {
//   this.id = this.lists.length+1;
//     this.lists.push(new Item(this.id, title, false));
// }
