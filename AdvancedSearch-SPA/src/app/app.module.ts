import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { AdvancedComponent } from './advanced/advanced.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
   declarations: [
      AppComponent,
      SearchComponent,
      AdvancedComponent,
      PatientComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatDialogModule,
      FormsModule
   ],
   providers: [],
   entryComponents: [
      AdvancedComponent,
      PatientComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
