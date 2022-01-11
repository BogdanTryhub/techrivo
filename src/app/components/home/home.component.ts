import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../core/services/api.service';
import { Items } from '../../shared/models/items.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items!: Items;

  constructor(private service: ApiService, private router: Router) {}

  fetchData(): void {
    this.service.getItems().subscribe((data: Items) => this.items = data);
  }

  navigateToItems(): void {
    this.router.navigate(['items'], { state: { data: this.items } });
  }
}
