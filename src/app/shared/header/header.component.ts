import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: any;

  constructor(
    private _cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.fillData()
  }

  fillData(){
    this.username = this._cookie.get('username');
  }
}
