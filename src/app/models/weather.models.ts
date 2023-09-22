export interface Weather {
  current_weather: CurentTemperature;
  hourly_units: Units;
  daily: DailyTemperatureExtremes;
}

export interface CurentTemperature {
  temperature: number;
  weathercode: number;
}

export interface Units {
  temperature_2m: string;
}

export interface DailyTemperatureExtremes {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}
