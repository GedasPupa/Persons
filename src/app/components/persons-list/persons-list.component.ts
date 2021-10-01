import { Router } from '@angular/router';
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
  text: string = '';
  star: number = 0;
  id: number = 0;
  error: any;

  onFilter($event: any): void {
    let inp = $event.target.value.toLocaleLowerCase();
    this.filterData = this.persons.filter(
      (zm) => zm.name.toLocaleLowerCase().indexOf(inp) != -1
    );
  }

  onSort(field: string): void {
    let fieldAsKey = field as keyof In_person;
    this.field = field;

    // refactored with array average for 'importance' field sorting:
    if (this.sortAsc) {
      this.filterData.sort((a, b) => {
        if (field === 'importance') {
          return a.getAverageRating() < b.getAverageRating() ? -1 : 0;
        } else {
          return a[fieldAsKey] < b[fieldAsKey] ? -1 : 0;
        }
      });
      this.sortAsc = !this.sortAsc;
    } else {
      this.filterData.sort((a, b) => {
        if (field === 'importance') {
          return a.getAverageRating() > b.getAverageRating() ? -1 : 0;
        } else {
          return a[fieldAsKey] > b[fieldAsKey] ? -1 : 0;
        }
      });
      this.sortAsc = !this.sortAsc;
    }
  }

  OnRatingClick(pareinaisvaiko: string): void {
    this.text = pareinaisvaiko;
  }

  OnStarClick(pareinaisvaiko: number): void {
    this.star = pareinaisvaiko;
  }

  OnstarClick2(pareinaisvaiko: number): void {
    this._personsListService.setImportance(pareinaisvaiko, this.star);
  }

  getAverageRating(id: number): number {
    return (
      this.filterData[id].importance.reduce((a, b) => a + b) /
      this.filterData[id].importance.length
    );
  }

  constructor(
    private _personsListService: PersonsListService,
    private router: Router
  ) {
    this.persons = this._personsListService.getAllPersons();
    this.filterData = this.persons;
    // this.error = this.router.routerState;
  }
}
