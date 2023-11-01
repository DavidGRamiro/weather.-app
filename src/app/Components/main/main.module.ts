import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherCardsComponent } from './components/weather-cards/weather-cards.component';
import { PrimeNGModule } from 'src/app/Library/primeng.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    WeatherComponent,
    WeatherCardsComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule
  ],
  exports:[
    WeatherCardsComponent,
    WeatherComponent
  ]
})
export class MainModule { }
