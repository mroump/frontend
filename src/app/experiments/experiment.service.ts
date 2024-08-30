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

  getAllDevices(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/devices')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllExperiments(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/experiments')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getExperimentsStatus(exp_name:string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/experimentsStatus/' + exp_name)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  startExperiment(exp_name:string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/startExperiment/' + exp_name, this.httpOptions)
    .pipe( 
       catchError(this.errorHandler)
    )
  }

  endExperiment(exp_name:string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/stopExperiment/' + exp_name, this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }




  experimentsResults(exp_name:string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/experimentsResults/' + exp_name, this.httpOptions)
    .pipe( 
       catchError(this.errorHandler)
    )
  }

  resultsPower(exp_name:string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/resultsPower/' + exp_name, this.httpOptions)
    .pipe( 
       catchError(this.errorHandler)
    )
  }

  resultsCSI(exp_name:string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/resultsCSI/' + exp_name, this.httpOptions)
    .pipe( 
       catchError(this.errorHandler)
    )
  }

  resultsPlot(exp_name:string): Observable<any> {
    return this.httpClient.get(this.apiURL + '/resultsPlot/' + exp_name)
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
