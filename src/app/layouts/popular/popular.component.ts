import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from 'src/app/model';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {

  poplar!: Movie[]
  posterLink = 'https://image.tmdb.org/t/p/original';


  constructor(private http: HttpClient, private films:TmdbService) {}

  ngOnInit() {
    this.films.popular().subscribe(
      value => {
        this.poplar = value
      }
    )
  }


}
