import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: any = [];
  Object = Object;

  constructor(
    private _homeService: HomeService,
    private _router: Router,
    private _cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.fillUserData()
    this._cookie.deleteAll()
  }

  fillUserData() {
    // this.users = this._homeService.fetchUsers();
    this._homeService.fetchUsers().then(res =>{
      // console.log(res)
      this.users = res
    })
  }

  goto(item){
    // console.log(item)
    this._cookie.set('userid',item.id)
    this._cookie.set('username',item.username)
    this._router.navigate(['/dashboard'])
  }

}
