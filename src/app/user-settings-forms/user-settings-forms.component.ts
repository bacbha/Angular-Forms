import { UserSettings } from './../data/user-settings';
  import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})
export class UserSettingsFormsComponent implements OnInit {
ngForm: any;
  ngOnInit(): void {}
    
  // UserSettings c'est un type composé
  originaluserSettings: UserSettings ={
    name: 'Hassine',
    emailOffers: true,
    interceStyle: 'Dark',
    subscriptionType: 'Annuel',
    note: 'Here are some notes ...'
  }
  //? on a créer une copie de donnés copie=typeDeCopie ={...this.originalData }
  userSettings : UserSettings = { ...this.originaluserSettings};
  constructor() {}
  
}
