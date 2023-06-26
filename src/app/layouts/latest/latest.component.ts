import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TmdbService } from 'src/app/tmdb.service';
import { Movies,Movie } from 'src/app/model';


@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})




export class LatestComponent {
  film!: Movie[]
  posterLink = 'https://image.tmdb.org/t/p/original';


  constructor(private http: HttpClient, private films:TmdbService) {}

  ngOnInit() {
    this.films.trending().subscribe(
      value => {
        this.film = value
        console.log(this.film);
      }
    )
  }

  cart = this.films


}
