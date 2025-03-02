import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Photo } from '../services/albums.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  template: `
    <h1>Photos</h1>
    <div *ngFor="let photo of photos$ | async">
      <img [src]="photo.thumbnailUrl" [alt]="photo.title" />
    </div>
    <button (click)="goBack()">Return</button>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class AlbumPhotosComponent implements OnInit {
  photos$: Observable<Photo[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.photos$ = this.albumsService.getPhotosByAlbumId(id);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.photos$ = this.albumsService.getPhotosByAlbumId(id);
  }

  goBack(): void {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}
