import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coordinates } from '../models/user.model';
import { Weather } from '../models/weather.models';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherUrl = 'https://api.open-meteo.com/v1/forecast';

  constructor(private http: HttpClient) {}

  getWeather({ latitude, longitude }: Coordinates): Observable<Weather> {
    return this.http.get<Weather>(
      `${this.weatherUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`
    );
  }
}
