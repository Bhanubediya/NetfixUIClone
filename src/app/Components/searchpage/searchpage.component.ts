import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);
import { Movie } from 'src/app/MoviesInterface';
import { APIService } from 'src/app/api.service';
import { environment } from 'src/environments/environment';

// install Swiper modules
SwiperCore.use([Pagination]);
@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SearchpageComponent implements OnInit {
  PopularMovies!: Movie;
  filterBy!: any;
  filteredUsers!: any[];
  public searchterm: string = '';

  constructor(private API: APIService) {}

  ngOnInit(): void {
    this.API.getPopularMovies().subscribe((result) => {
      this.PopularMovies = this.modify(result);

      console.log('PopularMovies');
      console.log(this.PopularMovies.results);
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
  search() {
    console.log(this.searchterm)
if(this.searchterm!=""){
 setInterval(()=>{
  this.PopularMovies.results= this.PopularMovies.results?.filter(res=>{
    return res.title.trim().toLocaleLowerCase().match(this.searchterm.toLocaleLowerCase())
  },100);
 })
}
else if(this.searchterm==""){
this.ngOnInit();
}
    // this.searchterm=(event.target as HTMLInputElement).value;
     
    // this.cartService.search.next(this.searchterm);
  }
}
