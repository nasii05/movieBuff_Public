import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './layouts/latest/latest.component';
import { PopularComponent } from './layouts/popular/popular.component';
import { UpcomingComponent } from './layouts/upcoming/upcoming.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { OwlCarouselComponent } from './layouts/owl-carousel/owl-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestComponent,
    PopularComponent,
    UpcomingComponent,
    NavbarComponent,
    FooterComponent,
    OwlCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
