import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app//app.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { RouterModule } from '@angular/router';
import { ToSpacePipe } from './pipes/to-space.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';
import { ImportanceComponent } from './components/importance/importance.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    PersonDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AddPersonComponent,
    ToSpacePipe,
    CapitalizeFirstPipe,
    ImportanceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: PersonsListComponent },
      { path: 'persons-list', component: PersonsListComponent },
      { path: 'about', component: AboutComponent },
      { path: 'person-details', component: PersonDetailsComponent },
      { path: 'person-details/:id', component: PersonDetailsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
