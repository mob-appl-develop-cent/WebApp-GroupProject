import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent,
    data: { title: 'Patients List' }
  },
  {
    path: 'patient-details/:id',
    component: PatientDetailComponent,
    data: { title: 'Patient Details' }
  },
  {
    path: 'patient-add',
    component: PatientAddComponent,
    data: { title: 'Patient Add' }
  },
  { path: '',
    redirectTo: '/patients',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientAddComponent,
    PatientDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
