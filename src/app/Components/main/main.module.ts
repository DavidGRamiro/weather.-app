import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './components/weather/weather.component';
import { PrimeNGModule } from 'src/app/Library/primeng.module';
import { FormsModule } from '@angular/forms';
import { WeatherMainComponent } from './components/weather-main/weather-main.component';
import { AnimationMode } from 'tsparticles-engine';
import { AnimationsModule } from '../Animations/animations.module';
import { CardWeatherComponent } from './components/card-weather/card-weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherMainComponent,
    CardWeatherComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule,
    AnimationsModule
  ],
  exports:[
    WeatherComponent,
    WeatherMainComponent
  ]
})
export class MainModule { }
