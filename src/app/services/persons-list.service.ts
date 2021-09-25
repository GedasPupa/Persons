import { Injectable } from '@angular/core';
import { In_person } from '../models/Person';
import { PersonClass } from '../models/PersonClass';

@Injectable({
  providedIn: 'root',
})
export class PersonsListService {
  persons: In_person[] = [
    new PersonClass(1, 'toMAS', 'tomylinas', 37066611115, 'tomas@tomas.lt', 10),
    new PersonClass(2, 'jons', 'jonukaitIS', 4422223333, 'jons@jons.lt', 9),
    new PersonClass(3, 'petrs', 'petriKAS', 37060600100, 'petrs@petrs.lt', 9),
    new PersonClass(4, 'ona-marija', 'one-buraite', 3701000, 'ona@ona.lt', 7),
  ];
  onePerson: In_person | undefined = {
    id: 0,
    name: '',
    surname: '',
    phone: 0,
    email: '',
    importance: 0,
  };

  getAllPersons(): In_person[] {
    return this.persons;
  }
  getPerson(id: number) {
    let persons1: In_person[] = this.getAllPersons();
    return persons1.find((p) => p.id == id);
  }

  constructor() {}
}
