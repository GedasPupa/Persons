import { Component } from '@angular/core';
import { In_person } from 'src/app/models/Person';
import { PersonClass } from 'src/app/models/PersonClass';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
})
export class PersonDetailsComponent {
  person: In_person = new PersonClass(
    21,
    'vyts',
    'vytautaitis',
    37066677777,
    'vyts@vyts.lt',
    9
  );
}
