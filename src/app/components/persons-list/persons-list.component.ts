import { Component, OnInit } from '@angular/core';
import { In_person } from 'src/app/models/Person';
import { PersonClass } from 'src/app/models/PersonClass';
import { PersonsListService } from 'src/app/services/persons-list.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css'],
})
export class PersonsListComponent {
  persons: In_person[] = [];
  filterData: In_person[];
  onePerson: any;

  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filterData = this.persons.filter(
      (zm) => zm.name.toLocaleLowerCase().indexOf(inp) != -1
    );
  }

  constructor(private _personsListService: PersonsListService) {
    this.persons = this._personsListService.getAllPersons();
    this.filterData = this.persons;
  }
}
