import { Pipe, PipeTransform } from '@angular/core';
/**
 * @returns Returns gender icon classes depending on user gender
 */
@Pipe({
  name: 'genderIcon',
  standalone: true,
})
export class GenderIconPipe implements PipeTransform {
  transform(gender: string): string {
    if (gender === 'male') {
      return 'fa fa-mars user-card__gender-icon user-card__gender-icon--male';
    } else if (gender === 'female') {
      return 'fa fa-venus user-card__gender-icon user-card__gender-icon--female';
    } else {
      return 'fa fa-genderless user-card__gender-icon';
    }
  }
}
