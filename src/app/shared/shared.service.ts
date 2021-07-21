import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(
    private http: HttpClient
  ) { }

  fetchUsers() {
    return this.http.get(environment.API + '/users').toPromise()
  }

  fetchAlbums(){
    return this.http.get(environment.API + '/albums').toPromise()
  }

  fetchPosts(){
    return this.http.get(environment.API + '/posts').toPromise()
  }

  fetchPhotos(){
    return this.http.get(environment.API + '/photos').toPromise()
  }
}
