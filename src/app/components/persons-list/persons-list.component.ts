import { Component, OnInit } from '@angular/core';
import { In_person } from 'src/app/models/Person';
import { PersonsListService } from 'src/app/services/persons-list.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css'],
})
export class PersonsListComponent {
  persons: In_person[];
  filterData: In_person[];
  onePerson: any;
  sortAsc: boolean = true;
  field: string = '';

  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filterData = this.persons.filter(
      (zm) => zm.name.toLocaleLowerCase().indexOf(inp) != -1
    );
  }

  onSort(field: string): void {
    let fieldAsKey = field as keyof In_person;
    this.field = field;
    if (this.sortAsc) {
      this.filterData.sort((a, b) => {
        return a[fieldAsKey] < b[fieldAsKey] ? -1 : 0;
      });
      this.sortAsc = !this.sortAsc;
    } else {
      this.filterData.sort((a, b) => {
        return a[fieldAsKey] > b[fieldAsKey] ? -1 : 0;
      });
      this.sortAsc = !this.sortAsc;
    }
  }

  constructor(private _personsListService: PersonsListService) {
    this.persons = this._personsListService.getAllPersons();
    this.filterData = this.persons;
  }
}
