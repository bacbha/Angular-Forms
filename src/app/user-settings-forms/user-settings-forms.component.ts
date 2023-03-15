import { DataService } from './../data/data.service';
import { UserSettings } from './../data/user-settings';
  import { Component, OnInit} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';



@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})


export class UserSettingsFormsComponent implements OnInit {


ngForm: any;
valid: any;
untouched: any;
onSbumit: any;
onSubumit: any;
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log("in OnSubmit",form.valid);
    //* Cette ligne va returné un Observable

    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
     
        result => console.log("Success: ",  result),
        error => console.error("error: ", error)
      );
  }
  onBlur(field : NgModel){
    console.log("in OnBlur : ",field.valid);
  }



  // UserSettings c'est un type composé
  originaluserSettings: UserSettings ={
    name:"" ,
    emailOffers:false,
    interceStyle: "",
    subscriptionType:"" ,
    note: ""
  }
  //? on a créer une copie de donnés copie=typeDeCopie ={...this.originalData }
  userSettings : UserSettings = { ...this.originaluserSettings};
  constructor(private dataService:DataService) {}
  
}
