import { Component, OnInit, ViewChild } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { startWith } from 'rxjs';
import { CountryService } from 'src/app/Components/API/country.service';
import { CityData } from 'src/app/Components/API/models/modelo-city';
import { Countries } from 'src/app/Components/API/models/modelo-countries';
import {  WeatherResult } from 'src/app/Components/API/models/modelo-weather';
import { OpenWeatherService } from 'src/app/Components/API/open-weather.service';



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @ViewChild('autocomplete', { static: false}) autoComplete: any;

  // Objetos y clases
  public weather_data? : WeatherResult;
  public countries : Countries[] = [];
  public messageError! : Message[]
  public totalCities : any[] = []

  // Arrays de datos
  public filteredCountries: any[] = [];
  public filteredCities : any[] = []
  public searchTextCountry: string = '';
  public searchTextCity: string = '';
  public paisesAutocomplete : string[] = []
  public cityAutocomplete : string[] = []


  // Booleanos de control
  public errorMessage : boolean = false
  public bHayDatos : boolean = false


  ngOnInit(): void { this.getAllContries()}

  constructor( private _apiService : OpenWeatherService,
              private _countryService : CountryService,
              private _msgService : MessageService){}

  // Obtener el tiempo de un pais en concreto filtrado por autocomplete
  getActualWeather( keySearch : string){
    this._apiService.getWeather(keySearch).subscribe({
      next: (data) => {
        this.weather_data = data;
        console.log(this.weather_data)
      },
      error: (error) => {
        this.errorMessage = true
        this._msgService.add({ severity: 'warn', summary: 'Warning', detail: 'No tenemos datos meterológicos del país seleccionado' });
      }
    })
  }

  // Get all countries in Spanish language
  getAllContries(){
    this._countryService.getAllCountries().subscribe({
      next: (data) => {
        this.countries = data
        this.countries.forEach( pais => this.filteredCountries.push({'pais': pais.translations.es, 'alphaCode': pais.alpha2Code}))
      },
      error : ( error) => { console.log('Error api', error) }
    })
  }

  // Filtro para el autocomplete de paises
  filterCountries(event: any) {
    this.paisesAutocomplete = this.filteredCountries.filter(country =>
      country.pais.toLowerCase().startsWith(event.query.toLowerCase())
    );
  }

  // Cuando se hace click sobre un item del desplegable del autocomplete
  // Recibimos un objeto con el pais y el código, para poder acceder a los paises posteriormente
  onSelectItem(event : any){
    let selectPais = event.alphaCode
    this._countryService.getCities(selectPais).subscribe({
      next : (data:CityData) => {

        this.bHayDatos = true;
        this.totalCities = data.geonames
        this.totalCities.forEach( ciudad => this.filteredCities.push(ciudad.name))
      },
      error : (error) => {
        console.log("No hay ciudades para ese país seleccionado")
      }
    }
    )
  }


  // Filtro para el autocomplete de provincias y ciudades
  filterCities(event : any){
    this.cityAutocomplete = this.filteredCities.filter( city =>
      city.toLowerCase().startsWith(event.query.toLowerCase())
    );
  }

  // Evento cuando se selecciona una ciudad y llamada al servicio de búsqueda de tiempo
  onSelectCity( event : any){
    this.getActualWeather(event);
    this.cityAutocomplete = new Array()
  }




}
