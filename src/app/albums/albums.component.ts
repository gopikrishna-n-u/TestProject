import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { element } from 'protractor';
import { HomeService } from '../home/home.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: any  = [];
  photos: any  = [];
  Object = Object;
  userid = 0;
  allData = []
  URL: boolean = false;

  constructor(
    private _sharedService: SharedService,
    private _cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.fetchPhotos()
    // this.fetchAlbums()
    this.userid = Number(this._cookie.get('userid'))
  }
  fetchAlbums() {
    this._sharedService.fetchAlbums().then(res => {
      this.albums = res
      // this.albums = this.albums.filter(element => element.id == this.userid);
      // console.log(this.albums)
      this.albums.forEach(alb => {
        this.photos.forEach(pho => {
          if (alb.id == pho.albumId && alb.userId == this.userid) {
            this.allData.push({title: alb.title, thumbnailUrl : pho.thumbnailUrl, url : pho.url})
          }
        });
      });
    })
  }

  fetchPhotos() {
    this._sharedService.fetchPhotos().then(res => {
      this.photos = res
      this.fetchAlbums()
    })
  }

  openImage(){
    this.URL = !this.URL
    // console.log(this.URL)
  }
}
