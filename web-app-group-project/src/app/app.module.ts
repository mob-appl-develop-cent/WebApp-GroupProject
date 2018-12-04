import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientAddComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
