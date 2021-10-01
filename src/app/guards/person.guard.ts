import { In_person } from 'src/app/models/Person';
import { PersonsListService } from 'src/app/services/persons-list.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonGuard implements CanActivate, Resolve<In_person> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.personsListService.getAllPersons()[0]; // TODO
  }
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

    let persons: In_person[] = this.personsListService.getAllPersons();
    if (!persons.find((p) => p.id === id)) {
      console.log('No person with id: ', route.url[1].path); // same same kas === route.params.id
      this.router.navigate(['/person'], {
        state: { error: `Invalid parameter: ${route.params.id}` },
      });
      return false;
    }
    return true;
  }
  constructor(
    private personsListService: PersonsListService,
    private router: Router
  ) {}
}
