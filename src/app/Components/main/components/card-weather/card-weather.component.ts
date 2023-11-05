import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit{

  ngOnInit(): void {}

  constructor(){}

  public fechaActual : string = new Date().toLocaleTimeString()

}
