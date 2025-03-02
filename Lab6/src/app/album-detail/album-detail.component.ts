import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  template: `
    <div class="container">
      <h1>Album Detail</h1>
      <div *ngIf="album">
        <p>Title: <input [formControl]="titleControl" /></p>
        <button (click)="saveTitle()">Save</button>
        <button (click)="goBack()">Return</button>
        <a [routerLink]="['/albums', album.id, 'photos']">Photos</a>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        padding: 20px;
      }
      input {
        padding: 5px;
        margin-right: 10px;
      }
      button {
        margin-right: 10px;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  titleControl = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.albumsService.getAlbumById(id).subscribe((album) => {
      this.album = album;
      this.titleControl.setValue(album.title);
    });
  }
  saveTitle(): void {
    if (!this.album) {
      console.error('Album is undefined!');
      return;
    }

    const newTitle = this.titleControl.value?.trim();
    if (!newTitle) {
      alert('Title cannot be empty!');
      return;
    }

    this.album.title = newTitle;
    this.titleControl.setValue(newTitle);
    alert('Title updated!');
  }


  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
