import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Home/home.component';
import { MenuComponent } from './Home/menu/menu.component';
import { FooterComponent } from './Home/footer/footer.component';
import { PrimeNGModule } from '../Library/primeng.module';
import { WeatherCardsComponent } from './main/components/weather-cards/weather-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';



@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    HttpClientModule,
    MainModule
  ],
  exports:[
    HomeComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
