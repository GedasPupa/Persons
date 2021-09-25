import { Injectable } from '@angular/core';
import { In_person } from '../models/Person';
import { PersonClass } from '../models/PersonClass';

@Injectable({
  providedIn: 'root',
})
export class PersonsListService {
  persons: In_person[] = [
    new PersonClass(1, 'toMAS', 'tomylinas', 37066611115, 'tomas@tomas.lt', 10),
    new PersonClass(2, 'jons~Petrs', 'jonukaitIS', 4422223333, 'jons@jons.lt', 9),
    new PersonClass(3, 'petrs~jONS', 'petriKAS-petruška', 37060600100, 'petrs@petrs.lt', 9),
    new PersonClass(4, 'ona-marija', 'one/buraite', 3701000, 'ona@ona.lt', 7),
  ];

  getAllPersons(): In_person[] {
    return this.persons;
  }
}
