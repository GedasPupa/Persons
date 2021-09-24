import { Component, OnInit } from '@angular/core';
import { In_person } from 'src/app/models/Person';
import { PersonClass } from 'src/app/models/PersonClass';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css'],
})
export class PersonsListComponent {
  filterData: In_person[] = [];
  persons: In_person[] = [
    new PersonClass(1, 'toMAS', 'tomylinas', 37066611115, 'tomas@tomas.lt', 10),
    new PersonClass(1, 'jons', 'jonukaitIS', 4422223333, 'jons@jons.lt', 9),
    new PersonClass(1, 'petrs', 'petriKAS', 37060600100, 'petrs@petrs.lt', 9),
    new PersonClass(1, 'ona-marija', 'one-buraite', 3701000, 'ona@ona.lt', 7),
  ];

  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filterData = this.persons.filter(
      (zm) => zm.name.toLocaleLowerCase().indexOf(inp) != -1
    );
  }

  constructor() {
    this.filterData = this.persons;
  }
  // // FUTURE code:
  // persons: zmogelis[];
  // filterData: zmogelis[];
  // constructor(private personsService: personsService) {
  //   this.persons = this.personsService.getpersons();
  //   this.filterData = this.persons;
  // }
}
