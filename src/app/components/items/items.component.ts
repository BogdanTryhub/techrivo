import { Component, OnInit } from '@angular/core';

import { Items } from '../../shared/models/items.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items!: Items;
  constructor() { }

  ngOnInit(): void {
    this.items = history.state.data;
  }
}
