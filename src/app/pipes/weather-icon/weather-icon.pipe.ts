import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon',
  standalone: true,
})
export class WeatherIconPipe implements PipeTransform {
  /**
   * 0	Clear sky
   * 1, 2, 3	Mainly clear, partly cloudy, and overcast
   */
  private sunCodes = new Set([0, 1, 2, 3]);
  /**
   * 45, 48	Fog and depositing rime fog
   */
  private cloudCodes = new Set([45, 48]);
  /**
   * 51, 53, 55	Drizzle: Light, moderate, and dense intensity
   * 56, 57	Freezing Drizzle: Light and dense intensity
   * 61, 63, 65	Rain: Slight, moderate and heavy intensity
   * 66, 67	Freezing Rain: Light and heavy intensity
   * 80, 81, 82	Rain showers: Slight, moderate, and violent
   */
  private rainCodes = new Set([
    51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82,
  ]);
  /**
   * 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
   * 77	Snow grains
   * 85, 86	Snow showers slight and heavy
   */
  private snowCodes = new Set([71, 73, 75, 77, 85, 86]);
  /**
   * 95	Thunderstorm: Slight or moderate
   * 96, 99	Thunderstorm with slight and heavy hail
   * Thunderstorm forecast with hail is only available in Central Europe
   */
  private thunderstormCodes = new Set([95, 96, 99]);

  transform(weather: number): string {
    if (this.sunCodes.has(weather)) {
      return 'fa fa-sun-o user-card__weather-icon user-card__weather-icon--sun';
    } else if (this.cloudCodes.has(weather)) {
      return 'fa fa-cloud user-card__weather-icon user-card__weather-icon--cloud';
    } else if (this.rainCodes.has(weather)) {
      return 'fa fa-tint user-card__weather-icon user-card__weather-icon--tint';
    } else if (this.snowCodes.has(weather)) {
      return 'fa fa-snowflake-o user-card__weather-icon user-card__weather-icon--snow';
    } else if (this.thunderstormCodes.has(weather)) {
      return 'fa fa-bolt user-card__weather-icon user-card__weather-icon--thunderstorm';
    } else {
      // sun by default if no matches
      return 'fa fa-sun-o';
    }
  }
}
