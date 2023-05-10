import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Movie } from 'src/app/model';
import { TmdbService } from 'src/app/tmdb.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {

  upcoming!: Movie[]
  posterLink = 'https://image.tmdb.org/t/p/original';


  constructor(private http: HttpClient, private films:TmdbService) {}

  ngOnInit() {
    this.films.upcoming().subscribe(
      value => {
        this.upcoming = value
        console.log(this.upcoming);
      }
    )
  }

}
