import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../shared/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../shared/footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { HomeService } from './home.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // MatToolbarModule,
    // MatCardModule,
    // HttpClientModule,
    SharedModule
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
