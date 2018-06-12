import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';


import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Advisory } from './advisory';
import { AttackCategory } from './attack-category';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdvisoryService {

  private advisoriesUrl = 'api/advisories';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
  }

  attackTypes: string[] = [];
  attackCategories: Object = {};
  advisoriesCollection: Advisory[] = [];

  getAttackCategories (): Object {
    return this.attackCategories;
  }

  /** GET advisories from the server */
  fetchAdvisories (): Observable<Advisory[]> {
    if (this.advisoriesCollection.length > 0 ) {
      return of(this.advisoriesCollection);
    }
    return this.http.get<Advisory[]>(this.advisoriesUrl)
      .pipe(
        tap(advisories => {
          this.log(`fetched advisories`);
          // Save a reference to advisories
          this.advisoriesCollection =  advisories;
          // Extract unique attack type names
           advisories.map(advisory => {
                if(this.attackCategories[advisory.attackType]){
                    this.attackCategories[advisory.attackType] = this.attackCategories[advisory.attackType] + 1;
                } else {
                    this.attackCategories[advisory.attackType] = 1;
                }
                return advisory;
              })

        }),
        catchError(this.handleError('getAdvisories', []))
      );
  }

  filterAdvisoriesByAttackType (attackType: string): Observable<Advisory[]> {
    let result = [];
    if (attackType === "ALL") {
        result = this.advisoriesCollection;
    } else {
        result = this.advisoriesCollection.filter(value => value.attackType === attackType);
    }
    return of (result);
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AdvisoryService message with the MessageService */
  private log(message: string) {
    this.messageService.add('AdvisoryService: ' + message);
  }
}
