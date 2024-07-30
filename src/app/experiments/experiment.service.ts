import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpEvent  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Experiment } from './experiment';

@Injectable({
  providedIn: 'root'
})
export class ExperimentService {
  private apiURL = "http://localhost:5000";

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/experiments')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  filterExperiments(filter: string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/experiments' + filter, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  startExperiment(id:number): Observable<any> {
    return this.httpClient.post(this.apiURL + '/startExperiment/' + id, this.httpOptions)
    .pipe( 
       catchError(this.errorHandler)
    )
  }

  endExperiment(id:number): Observable<any> {
    return this.httpClient.post(this.apiURL + '/endExperiment/' + id, this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  scheduleExperiment(id:number, startdate:Date, enddate:Date): Observable<any> {
    return this.httpClient.put(this.apiURL + '/scheduleExperiment/' + id + '/' + startdate + '/' + enddate, this.httpOptions)
    .pipe( 
       catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/editexperiment/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  //addExperiment(experiment:Experiment): Observable<any> {
  create(name:string, startdate:Date, enddate:Date): Observable<any> {
    return this.httpClient.post(this.apiURL + '/newexperiment/' + name + '/' + startdate + '/' + enddate, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  update(id:number, experiment:Experiment): Observable<any> {
    return this.httpClient.put(this.apiURL + '/editexperiment/' + id, JSON.stringify(experiment), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }


  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', this.apiURL + '/upload', formData, {
      //responseType: 'json',
    });

    return this.httpClient.request(req);
  }

  getFiles(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/files');
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
