import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonsListService } from 'src/app/services/persons-list.service';

import { In_person } from 'src/app/models/Person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  person: In_person | undefined = undefined;
  //  = {
  //   id: 0,
  //   name: '',
  //   surname: '',
  //   phone: 0,
  //   email: '',
  //   importance: [0],
  //   getAverageRating(){return -1}
  // };
  // onePerson: any; // - apeinam undefined
  id: any;
  sub: any;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _personsListService: PersonsListService
  ) {
    console.log(
      'this._Activatedroute.snapshot.paramMap.get("id"): ',
      this._Activatedroute.snapshot.paramMap.get('id') // tiesioginis budas pasiimti 'id' is url (be .susbscribe()).
    );

    // this.id = this._Activatedroute.snapshot.paramMap.get('id');
    // let persons = this._personsListService.getAllPersons();
    // this.person = persons.find((p) => p.id == this.id);
  }

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      let persons = this._personsListService.getAllPersons();

      this.person = persons.find((p) => p.id == this.id);

      // this.onePerson = persons.find((p) => p.id == this.id); // - apeinam undefined
      // this.onePerson ? (this.person = this.onePerson) : undefined;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['persons']);
  }

  getAverageRating(): number | undefined {
    if (this.person !== undefined) {
      return (
        this.person.importance.reduce((a, b) => a + b) /
        this.person.importance.length
      );
    } else {
      return undefined;
    }
  }
}
