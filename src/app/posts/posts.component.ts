import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any  = [];
  Object = Object;
  userid = 0;
  // EDIT: boolean = false;

  sampleForm: FormGroup;

  constructor(
    private _sharedService: SharedService,
    private _cookie: CookieService,
    private _formBuilder: FormBuilder
  ) {
    this.sampleForm = this._formBuilder.group({
      text: ['']
    })
   }

  ngOnInit(): void {
    this.fetchPosts()
    this.userid = Number(this._cookie.get('userid'))
  }
  fetchPosts(){
    this._sharedService.fetchPosts().then(res =>{
      this.posts = res
      this.posts = this.posts.filter(element => element.id == this.userid);
      // console.log(this.posts)
    })
  }

  onEdit(){
    // this.EDIT = !this.EDIT
    // editing API can be called
  }
}
