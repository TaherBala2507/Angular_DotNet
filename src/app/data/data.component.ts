import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../../model/item';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  items: Item[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.dataService.getItems()
      .subscribe(items => this.items = items);
  }

  updateItem(item: Item): void {
    this.dataService.updateItem(item).subscribe();
  }
}
