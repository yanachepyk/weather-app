import { Pipe, PipeTransform } from '@angular/core';
import { UserLocation } from 'src/app/models/user.model';

@Pipe({
  name: 'address',
  standalone: true,
})
export class AddressPipe implements PipeTransform {
  transform({ city, country, state, postcode }: UserLocation): string {
    return `${country} ${state} ${city} ${postcode}`;
  }
}
