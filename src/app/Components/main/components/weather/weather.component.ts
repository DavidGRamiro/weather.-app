import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { CountryService } from 'src/app/Components/API/country.service';
import { Countries } from 'src/app/Components/API/models/modelo-countries';
import {  WeatherResult } from 'src/app/Components/API/models/modelo-weather';
import { OpenWeatherService } from 'src/app/Components/API/open-weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weather_data? : WeatherResult;
  public countries : Countries[] = [];
  public filteredCountries: any[] = [];
  public searchText: string = '';

  public  paisesAutocomplete : string[] = []

  public errorMessage : boolean = false
  public messageError! : Message[]


  ngOnInit(): void { this.getAllContries()}

  constructor( private _apiService : OpenWeatherService,
              private _countryService : CountryService,
              private _msgService : MessageService){}

  // Get weather data from OpenWeatherService.
  getActualWeather( keySearch : string){
    this._apiService.getWeather(keySearch).subscribe({
      next: (data) => {
        this.weather_data = data;
      },
      error: (error) => {
        this.errorMessage = true
        console.log(this.errorMessage)
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

  // Filtro para el autocomplete
  filterCountries(event: any) {

    this.paisesAutocomplete = this.filteredCountries.filter(country =>
      country.pais.toLowerCase().startsWith(event.query.toLowerCase())
    );

  }

  // Cuando se hace click sobre un item del desplegable del autocomplete
  // Recibimos un objeto con el pais y el código, para poder acceder a los paises posteriormente
  onSelectItem(event : any){
    let selectItem = event.pais
    this.getActualWeather(selectItem)

  }



}
