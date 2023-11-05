import { Component, Input, OnInit } from '@angular/core';
import { rutaImagenes } from 'src/assets/ruta-imagenes';
@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit{

  @Input() set weather(tiempo:any){
    this.asignarTiempo(tiempo)
  }

  ngOnInit(): void {}

  constructor(){}

  public rutas = new rutaImagenes()

  public fechaActual : string = new Date().toLocaleTimeString()
  public icon : string = ''

  asignarTiempo(oData : any){
    console.log(oData)
    if(oData[0].icon === '09d'){
     this.icon =  this.rutas.soleado
     console.log()
    }


  }

}
