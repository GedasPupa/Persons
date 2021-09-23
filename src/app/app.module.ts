import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app//app.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { AddPersonComponent } from './components/add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    PersonDetailsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    AddPersonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
