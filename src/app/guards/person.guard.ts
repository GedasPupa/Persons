import { In_person } from 'src/app/models/Person';
import { PersonsListService } from 'src/app/services/persons-list.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // console.log(route);
    // console.log(route.params.id);
    // console.log(state);

    const id = +route.params.id;
    if (isNaN(id) || id < 1) {

    }
    let persons: In_person[] = this._personsListService.getAllPersons();
    if (!persons.find(p => p.id === id)) {
      console.log('NO PERSON WITH ID: ', id);
      this.router.navigate(['/persons'], { state: { "error": `Invalid parameter: ${id}`}});
      return false;
    }

    return true;
  }
  constructor(private _personsListService: PersonsListService, private router: Router) {

  }
}
