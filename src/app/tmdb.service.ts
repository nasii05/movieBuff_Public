import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Movie, Movies } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http:HttpClient) {}

  base_url:string = 'https://api.themoviedb.org/3/';
  API_KEY:string = '4b815193042fcd3ed50f225830019e95';

  trending():Observable<Movie[]>{
    return this.http.get <Movies> (`${this.base_url}/trending/all/day`,{
      params:{
        api_key:this.API_KEY
      }
    }).pipe(map(res => res.results))
  }


  popular():Observable<Movie[]>{
    return this.http.get <Movies> (`${this.base_url}/movie/popular`,{
      params:{
        api_key:this.API_KEY
      }
    }).pipe(map(res => res.results))
  }

  upcoming():Observable<Movie[]>{
    return this.http.get <Movies> (`${this.base_url}/movie/upcoming`,{
      params:{
        api_key:this.API_KEY
      }
    }).pipe(map(res => res.results))
  }
}
