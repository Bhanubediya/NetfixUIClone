import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { APIService } from 'src/app/api.service';
import { Movie } from 'src/app/MoviesInterface';
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import Swiper core and required modules
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination,Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
}) 
export class HomeComponent implements OnInit {
  PopularMovies!: Movie;
  TvMovie!: any;
  LatestMovies!: any;
  constructor(private API: APIService) {}

  ngOnInit(): void {
    
    this.API.getPopularMovies().subscribe((result) => {
      this.PopularMovies = this.modify(result);
      console.log("PopularMovies");
      console.log(this.PopularMovies);
    });

    this.API.getLatestMovies().subscribe((result) => {
      this.LatestMovies = result;
      console.log("latest movie");
      console.log(this.LatestMovies );
    });

    this.API.getTvMovies().subscribe((result) => {
      this.TvMovie = this.modify(result);
      console.log("tv movie");
      console.log(this.TvMovie);
    });
  }

  modify(Movies: Movie): Movie {
    if (Movies.results) {
      Movies.results.forEach((Element) => {
        Element.backdrop_path =
          'https://image.tmdb.org/t/p/original' +
          Element.backdrop_path +
          '?api_key=' +
          environment.API_key;
        if (!Element.title) {
          Element.title = Element?.name;
        }
      });
    }
    return Movies;
  }

  changeData(result: any): any {
    if (!result.backdrop_path) {
     
          result.backdrop_path =  'https://image.tmdb.org/t/p/original' +
          result.poster_path +
          '?api_key=' +
          environment.API_key;
        }
    else{
      result.backdrop_path = 'https://image.tmdb.org/t/p/original' +
      result.backdrop_path +
      '?api_key=' +
      environment.API_key;
    }
  
  
    return result;
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      },
      1012: {
        items: 6
      }
    },
    nav: false
  }
}
