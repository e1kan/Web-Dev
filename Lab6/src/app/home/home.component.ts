import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Welcome to the Home Page</h1>
      <nav>
        <a routerLink="/about">About Us</a> | <a routerLink="/albums">Albums</a>
      </nav>
    </div>
  `,
  styles: [
    `
      .container {
        text-align: center;
        padding: 20px;
      }
      h1 {
        color: #333;
      }
      nav {
        margin-top: 20px;
      }
      a {
        color: #0066cc;
        text-decoration: none;
        margin: 0 10px;
      }
      a:hover {
        text-decoration: underline;
      }
    `,
  ],
  standalone: true,
  imports: [RouterModule],
})
export class HomeComponent {}
