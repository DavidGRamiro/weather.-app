import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResult } from './models/modelo-weather';
import { Countries } from './models/modelo-countries';

@Injectable({
  providedIn: 'root'
})


export class CountryService {

  private url_countries : string = 'https://restcountries.com/v2/all'

  constructor( private _http : HttpClient) { }

  // Obtener todos los paises de API
  getAllCountries(): Observable<Countries[]>{
    return this._http.get<Countries[]>(this.url_countries)
  }


}
