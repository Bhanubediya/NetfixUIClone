import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';


import { APIService } from './api.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperModule } from 'swiper/angular';
import { SearchpageComponent } from './Components/searchpage/searchpage.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';
import { LoginPageComponent } from './Components/login-page/login-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,


    SearchpageComponent,
    FilterPipe,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    SwiperModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
