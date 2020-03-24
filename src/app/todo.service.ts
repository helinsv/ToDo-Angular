import { Injectable } from '@angular/core';
import { Item } from "./model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ToDoService {

  constructor(private http: HttpClient) { }

  getToDo(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}${environment.limit}`);
  }

  deleteItem(id: number):Observable<Item> {
    const url = `${environment.apiUrl}/${id}`;
    return this.http.delete<Item>(url, httpOptions);
  }

  addItem(item: Item):Observable<Item>{
    return this.http.post<Item>(`${environment.apiUrl}`, item, httpOptions);
  }

  putItem(item: Item):Observable<Item> {
    const url = `${environment.apiUrl}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }

}
