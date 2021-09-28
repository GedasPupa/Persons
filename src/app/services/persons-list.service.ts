import { Injectable } from '@angular/core';
import { In_person } from '../models/Person';
import { PersonClass } from '../models/PersonClass';

@Injectable({
  providedIn: 'root',
})
export class PersonsListService {
  persons: In_person[] = [
    new PersonClass(1, 'atoMAS', 'tomylinas', 3706661111, 'tomas@tomas.lt', 4.7),
    new PersonClass(2, 'jons~Petrs', 'jonukaitIS', 4422223333, 'jons@jons.lt', 2.6),
    new PersonClass(3, 'petrs~jONS', 'petriKAS-petruška', 37060600100, 'petrs@petrs.lt', 4.4),
    new PersonClass(4, 'ona-marija', 'anute/buraite', 3701000, 'ona@ona.lt', 3.5),
  ];

  getAllPersons(): In_person[] {
    return this.persons;
  }

  setImportance(id: number, star: number): void {
    this.persons[id-1].importance = star; // perdaryti su this.persons.find(...)
  }
}
