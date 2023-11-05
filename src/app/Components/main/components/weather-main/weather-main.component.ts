import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit{

  //Recogida de datos desde el servicio de weather-component
  @Input() sUbicacion : string | undefined = undefined;
  @Input() oTemperatura : any = null;
  @Input() set oTiempo(_tiempo : any){
    this.getTiempoActual(_tiempo)
  }
  @Input() oSys : any = null;

  public tiempoActual : any = null;
  public description : string = '';

  public bLluvia : boolean = false;
  public bSoleando : boolean = false;
  public bNubes : boolean = false;
  public bNieve : boolean = false


  ngOnInit(): void {}

  constructor(){}

  getTiempoActual( tiempoActual : any){
    if(tiempoActual !== null){
      console.log('El tiempo',tiempoActual)
      this.tiempoActual = tiempoActual
      this.description = this.tiempoActual[0].main
      this.getStateWeather( this.description)
    }
  }

  getStateWeather( weather : string){
    switch(weather){
      case 'Clouds':
        console.log("Muy nuboso")
        break;
      case 'Rain':
        console.log("Lluvia")
        this.bLluvia = true
        break;
      case 'Thunderstorm':
        console.log("Tormenta")
        break;
      case 'Snow':
        console.log("Nieve")
        break;
      case 'Drizzle':
        console.log("lluvia ligera")
        this.bLluvia = true
        break;
      default:
      console.log("Default")
    }
  }

}
