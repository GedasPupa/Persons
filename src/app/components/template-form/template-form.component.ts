import { In_person } from 'src/app/models/Person';
import { PersonsListService } from 'src/app/services/persons-list.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonClass } from 'src/app/models/PersonClass';

@Component({
  selector: 'app-template-form',
  template: `
    <form #formVar="ngForm" action method="GET">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          ngModel
          aria-describedby="nameHelp"
          placeholder="Enter name"
        />
        <small id="namelHelp" class="form-text text-muted"
          >We'll never share your secret name with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input
          type="text"
          class="form-control"
          id="surname"
          name="surname"
          ngModel
          aria-describedby="surnameHelp"
          placeholder="Enter surname"
        />
        <small id="surnameHelp" class="form-text text-muted"
          >We'll never share your surname with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="number"
          class="form-control"
          id="phone"
          name="phone"
          ngModel
          aria-describedby="phoneHelp"
          placeholder="Enter phone number"
        />
        <small id="phoneHelp" class="form-text text-muted"
          >We'll never share your phone with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          ngModel
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-buttons">
        <button
          (click)="onSubmit($event)"
          type="submit"
          class="btn btn-success"
        >
          Submit
        </button>
        <button class="btn btn-secondary" (click)="onBack()">Back</button>
        <button class="btn btn-info" (click)="onRefresh()">Refresh</button>
      </div>
    </form>
    <!-- <p>FORM DATA: {{ formVar.value | json }}</p> -->
  `,
  styles: ['.form-buttons { display: flex; gap: 12px; margin-top: 21px; }'],
})
export class TemplateFormComponent implements OnInit {
  formData: any = {};
  constructor(
    private router: Router,
    private _personsListService: PersonsListService
  ) {}

  @ViewChild('formVar') private formVar!: NgForm;

  ngOnInit(): void {}

  onBack(): void {
    this.router.navigate(['/persons']);
  }

  onRefresh(): void {
    this.router.navigate(['/template-form']).then(() => {
      window.location.reload();
    });
  }

  onSubmit($event: MouseEvent) {
    this.formData = this.formVar.value;
    let id = this._personsListService.getLastId();
    let newPerson: In_person = new PersonClass(
      id,
      this.formData.name,
      this.formData.surname,
      this.formData.phone,
      this.formData.email,
      [Math.floor(Math.random() * 5 + 1)]
    );
    this._personsListService.addNewPerson(newPerson);
    alert(`New person ${newPerson.name} added!`);
    this.router.navigate(['/persons']);
  }
}
