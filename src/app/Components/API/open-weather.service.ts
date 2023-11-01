import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { API } from './models/api';
import { Observable } from 'rxjs';
import { WeatherResult } from './models/modelo-weather';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherService {

  private url = API.END_POINT
  private key = API.API_KEY

  constructor( private _http : HttpClient ) { }

  // Obtiene el tiempo en base a una localización
  getWeather( location : string, language: string = 'es') : Observable<WeatherResult>{
    const param = new HttpParams().set('q', location)
                                  .set('lang',language)
                                  .set('appid', this.key)
                                  .set('units', 'metric')
    return this._http.get<WeatherResult>(this.url, {params: param})
  }




}
