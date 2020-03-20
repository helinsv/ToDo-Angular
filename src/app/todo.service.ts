import { Injectable } from '@angular/core';
import { Item } from "./model";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ToDoService {
  public lists: Item[] = [];

  constructor(private http: HttpClient) { }

  getToDo(): Observable<Item[]> {
    //return this.http.get<Item[]>(`${environment.apiUrl}`);
    return this.http.get<Item[]>(`${environment.apiUrl}`)
    .pipe(tap(lists => this.lists = lists));
  }

  deleteItem(id: number) {
    this.lists = this.lists.filter(t => t.id !== id);
  }

  addItem(item: Item) {
    this.lists.push(item);
  }
}
