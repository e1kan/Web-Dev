import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  template: `
  <h1>About Us</h1>
  <p>Blah-blah-blah-blah-blah</p>
  <a routerLink="/home">Back to Home</a>`,
  styles: [
    `
    * {
      margin-left: 20px;
    }
    `
  ],
  standalone: true,
  imports: [RouterModule],
})
export class AboutComponent {}
