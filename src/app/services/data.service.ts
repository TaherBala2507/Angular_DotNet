import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../model/item';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://localhost:7230/api/Items'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  updateItem(item: Item): Observable<any> {
    return this.http.put(`${this.apiUrl}/${item.id}`, item);
  }
}
