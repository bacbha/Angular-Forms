import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getsubscriptionTypes(): Observable<string[]> {
    return of(['Monthly','Annualy','Lifetime']);
  }

  constructor( private http : HttpClient) { }

  //? postUserSettingsForm(userSettings :UserSettings) : Observable<UserSettings>{
  postUserSettingsForm(userSettings :UserSettings) : Observable<any>{
 
    //* return of(userSettings);
    return this.http.post('https://putsreq.com/ESbf4Ooxn2uAMxGeqz8y', userSettings);
  }
}
