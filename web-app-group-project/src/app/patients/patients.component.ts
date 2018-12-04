import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/patient'
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients:any = []
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

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patients = [];
    this.rest.getPatients().subscribe((data: {}) => {
      console.log(data['5c05e38cd970640f34fd9a88']);
      
      this.patients[0] = data['5c05e38cd970640f34fd9a88'];
    });
  }

  add() {
    this.router.navigate(['/patient-add']);
  }

  delete(id) {
    this.rest.deletePatient(id)
      .subscribe(res => {
          this.getPatients();
        }, (err) => {
          console.log(err);
        }
      );
  }

}
