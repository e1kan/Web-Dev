import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';
  private albumUpdatedSubject = new Subject<void>(); // Subject to notify about updates

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumById(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<Album> {
    return this.http.put<Album>(`${this.albumsUrl}/${id}`, { id, title: newTitle });
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.albumsUrl}/${id}`);
  }

  getPhotosByAlbumId(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.photosUrl}?albumId=${albumId}`);
  }

  notifyAlbumUpdated(): void {
    this.albumUpdatedSubject.next();
  }
  onAlbumUpdated(): Observable<void> {
    return this.albumUpdatedSubject.asObservable();
  }
}
