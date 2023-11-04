import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResult } from './models/modelo-weather';
import { Countries } from './models/modelo-countries';
import { CityData } from './models/modelo-city';
import { API } from './models/api';

@Injectable({
  providedIn: 'root'
})


export class CountryService {

  private url_countries : string = API.END_POINT_COUNTRY
  private url_cities : string = API.END_POINT_CITIES
  private username : string = API.API_KEY_COUNTRY

  constructor( private _http : HttpClient) { }

  // Obtener todos los paises de API
  getAllCountries(): Observable<Countries[]>{
    return this._http.get<Countries[]>(this.url_countries)
  }

  // Recupera las ciudades, cuando se selecciona un pais
  getCities( codPais: string, language : string = 'es', limit : string = '1000') : Observable<CityData>{
    const params = new HttpParams().set('country', codPais)
                                    .set('lang', language)
                                    .set('maxRows', limit)
                                    .set('username', this.username)
    return this._http.get<CityData>(this.url_cities, { params : params})
  }
}
