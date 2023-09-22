export interface User {
  gender: string;
  name: UserName;
  email: string;
  picture: UserPicture;
  location: UserLocation;
  id: UserId;
}

export interface UserName {
  first: string;
  last: string;
}

export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserLocation {
  city: string;
  state: string;
  country: string;
  postcode: number;
  street: Street;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface UserId {
  value: string;
}
