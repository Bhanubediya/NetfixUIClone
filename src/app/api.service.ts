import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './MoviesInterface';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}
  BaseUrl: string = 'https://api.themoviedb.org/3';
  public search =new BehaviorSubject<string>("");
  getPopularMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.BaseUrl+"/movie/popular?api_key="+environment.API_key)
  }

  getLatestMovies(): Observable<any> {
    return this.http.get<any>(this.BaseUrl+"/movie/505642/videos?api_key="+environment.API_key)
  }

  //top_rated
  getTvMovies(): Observable<Movie> {
    return this.http.get<Movie>(this.BaseUrl+"/tv/popular?api_key="+environment.API_key)
  }

  //https://api.themoviedb.org/3/movie/505642/videos?api_key=07548f2713e807ba2133b6202f4eae39&language=en-US
}
