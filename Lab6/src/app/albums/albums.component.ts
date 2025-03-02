import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../services/albums.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-albums',
  template: `
    <div class="container">
      <h1>Albums</h1>
      <ul>
        <li *ngFor="let album of albums$ | async">
          <a [routerLink]="['/albums', album.id]">{{ album.title }}</a>
          <button (click)="deleteAlbum(album.id)">Delete</button>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        background: #fff;
        margin: 10px 0;
        padding: 10px;
        border: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      button {
        background-color: #ff4444;
        color: white;
        border: none;
        padding: 5px 10px;
        cursor: pointer;
      }
      button:hover {
        background-color: #cc0000;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class AlbumsComponent implements OnInit {
  albums$: Observable<Album[]> = of([]);

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit(): void {
    this.loadAlbums();

    this.albumsService.onAlbumUpdated().subscribe(() => {
      this.loadAlbums();
    });
  }

  loadAlbums(): void {
    this.albums$ = this.albumsService.getAlbums();
  }

  deleteAlbum(id: number): void {
    const confirmation = confirm('Are you sure you want to delete this album?');

    if (confirmation) {
      this.albumsService.deleteAlbum(id).subscribe({
        next: () => {
          this.albums$ = this.albums$.pipe(
            map((albums) => albums.filter((album) => album.id !== id))
          );
        },
        error: (err) => {
          console.error(`Error deleting album with ID: ${id}:`, err);
          alert('There was an error deleting the album.');
        },
      });
    }
  }
}
