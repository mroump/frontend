import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Xapp } from './xapp';

@Injectable({
  providedIn: 'root'
})
export class XappsService {
  private apiURL = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/xapps')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  filterxApps(filter: string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/xapps/' + filter, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteXapp(id:number): Observable<any> {
    return this.httpClient.put(this.apiURL + '/deleteXapp/' + id, this.httpOptions)
    .pipe( 
       catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/editxapp/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(xapp:Xapp): Observable<any> {
    return this.httpClient.post(this.apiURL + '/newxapp', JSON.stringify(xapp), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  update(id:number, xapp:Xapp): Observable<any> {
    return this.httpClient.put(this.apiURL + '/editxapp/' + id, JSON.stringify(xapp), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof HttpErrorResponse) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
