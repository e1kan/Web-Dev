import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  categories = [ // Making up 4 categories
    { id: 1, name: 'Smartphones 📱' },
    { id: 2, name: 'Laptops 💻' },
    { id: 3, name: 'Videogames 🎮' },
    { id: 4, name: 'Books 📚' },
  ];

  constructor(private router: Router) {}

  // Navigating to the selected category
  goToCategory(category: { id: number; name: string }) {
    this.router.navigate([`/category/${category.id}`], { queryParams: { name: category.name } });
  }
}
