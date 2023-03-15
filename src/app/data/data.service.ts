import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http : HttpClient) { }

  //? postUserSettingsForm(userSettings :UserSettings) : Observable<UserSettings>{
  postUserSettingsForm(userSettings :UserSettings) : Observable<any>{
 
    //* return of(userSettings);
    return this.http.post('url', userSettings);
  }
}
