import { NgForm } from '@angular/forms';
import { PersonClass } from 'src/app/models/PersonClass';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
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
  persons: In_person[] | undefined;
  importance: number = 0;
  id: any;
  sub: any;
  error: string | undefined;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private _personsListService: PersonsListService // public personClass: PersonClass
  ) {
    console.log(
      'this._Activatedroute.snapshot.paramMap.get("id"): ',
      this._Activatedroute.snapshot.paramMap.get('id') // tiesioginis budas pasiimti 'id' is url (be .susbscribe()).
    );
    this.error = this._router.getCurrentNavigation()?.extras.state?.error;

    // this.id = this._Activatedroute.snapshot.paramMap.get('id');
    // this.persons = this._personsListService.getAllPersons();
    // this.person = persons.find((p) => p.id == this.id);
  }

  @ViewChild('formInfo') formInfo!: NgForm;

  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      // let persons = this._personsListService.getAllPersons();
      // this.person = persons.find((p) => p.id == this.id);
      // or service method getOnePerson():
      this.person = this._personsListService.getOnePerson(+this.id);
      this.importance = this.getAverageRating();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['persons']);
  }

  getAverageRating(): number {
    if (this.person !== undefined) {
      return (
        this.person.importance.reduce((a, b) => a + b) /
        this.person.importance.length
      );
    } else {
      return 0;
    }
  }

  onSubmit($event: MouseEvent): void {
    // changing
    if (
      this.formInfo.valid &&
      this.formInfo.dirty &&
      !!this.person?.id
      // !this.persons?.find((p) => p.id === this.person?.id)
    ) {
      this.person.importance.push(+this.importance);
      alert(`Person with ID: ${this.person?.id} updated!`);
      this._router.navigate(['/persons']);
    } else if (this.formInfo.valid && this.formInfo.dirty) {
      let formData = this.formInfo.value;
      let id = this._personsListService.getLastId();
      let newPerson: In_person = new PersonClass(
        id,
        formData.name,
        formData.surname,
        formData.phone,
        formData.email,
        [+formData.importance]
      );
      this._personsListService.addNewPerson(newPerson);
      alert(`New person ${newPerson.name} added!`);
      this._router.navigate(['/persons']);
    }
    // console.log(this.person);
    // this.person!.importance.push(+this.importance);

    // adding new Person
    // let formData = this.formInfo.value;
    // let id = this._personsListService.getLastId();
    // let newPerson: In_person = new PersonClass(
    //   id,
    //   formData.name,
    //   formData.surname,
    //   formData.phone,
    //   formData.email,
    //   [+formData.importance]
    // );
    // this._personsListService.addNewPerson(newPerson);
    // alert(`New person ${newPerson.name} added!`);
  }
}
