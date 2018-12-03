import { Record } from './record';

export class Patient {
    id: number;
    firstName: String;
    lastName: String;
    age: number;
    address: String;
    roomNumber: String;
    emergencyNumber: String;
    department: String;
    doctor: String;
    records: [Record]
}