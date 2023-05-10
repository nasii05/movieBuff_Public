import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=4b815193042fcd3ed50f225830019e95`;

const popular = `https://api.themoviedb.org/3/movie/popular?api_key=4b815193042fcd3ed50f225830019e95`;


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  options: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    items: 1,


  };

  movies?: any;
  poplar:any;


  constructor(private http: HttpClient) {}


  // http = @inject(HttpClient);

  ngOnInit() {
    this.http
      .get(URL)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => (this.movies = moveis));

      this.http
      .get(popular)
      .pipe(map((res: any) => res['results']))
      .subscribe((moveis) => {this.poplar = moveis
        console.log(this.poplar);
      });
  }

}
