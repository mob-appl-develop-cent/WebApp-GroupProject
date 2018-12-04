import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'https://etmp-group-project.herokuapp.com/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPatients(): Observable<any> {
    return this.http.get(endpoint + 'patients').pipe(
      map(this.extractData));
  }
  
  getPatient(id): Observable<any> {
    return this.http.get(endpoint + 'patients/' + id).pipe(
      map(this.extractData));
  }
  
  addPatient (patient): Observable<any> {
    console.log(patient);
    return this.http.post<any>(endpoint + 'patients', JSON.stringify(patient), httpOptions).pipe(
      tap((patient) => console.log(`added patient w/ id=${patient.id}`)),
      catchError(this.handleError<any>('addPatient'))
    );
  }
  
  updatePatient (id, patient): Observable<any> {
    return this.http.put(endpoint + 'patients/' + id, JSON.stringify(patient), httpOptions).pipe(
      tap(_ => console.log(`updated patient id=${id}`)),
      catchError(this.handleError<any>('updatePatient'))
    );
  }
  
  deletePatient (id): Observable<any> {
    return this.http.delete<any>(endpoint + 'patients/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted patient id=${id}`)),
      catchError(this.handleError<any>('deletePatient'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
