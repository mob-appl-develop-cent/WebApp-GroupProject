import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient'
import { Record } from '../model/record';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patient: Patient = {
    id: 1,
    firstName: "Michael",
    lastName: "Scot",
    address: "Street ABC",
    age: 95,
    department: "ELderly",
    doctor: "Dr. Rey",
    emergencyNumber: "12456761",
    roomNumber: "17B",
    records: [{
      id: 1,
      nurseName: "Nancy",
      category: "Test",
      type: "Blood Pressure",
      details: "130/80"
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
