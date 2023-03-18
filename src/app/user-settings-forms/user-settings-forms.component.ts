import { DataService } from './../data/data.service';
import { UserSettings } from './../data/user-settings';
  import { Component, OnInit} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-user-settings-forms',
  templateUrl: './user-settings-forms.component.html',
  styleUrls: ['./user-settings-forms.component.css']
})


export class UserSettingsFormsComponent implements OnInit {


ngForm: any;
valid: any;
untouched: any;
//onSbumit: any;
onSubumit: any;
  subscriptionTypes: Observable<string[]> | undefined;

  
  ngOnInit(): void {
this.subscriptionTypes= this.dataService.getsubscriptionTypes();

  }

  onSubmit(form: NgForm)
   {
    console.log("in OnSubmit",form.valid);
    //* Cette ligne va returné un Observable
    if(form.valid){
    this.dataService.postUserSettingsForm(this.userSettings).subscribe(
      {
        next: (result) => {
          console.log("Success: ",  result)
        },
        error: (error) => {
          this.onHttpError(error)
        }
      }
      );
  }
  else{
    this.postError=true;
    this.postErrorMessage="ya wildi fixi ak les errors lfouuuk";

  }}
  
  onHttpError(errorResponse: any): void {
    console.log('error :',errorResponse);
    this.postError=true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }
  onBlur(field : NgModel){
    console.log("in OnBlur : ",field.valid);
  }



  // UserSettings c'est un type composé
  originaluserSettings: UserSettings ={
    name:"" ,
    emailOffers:false,
    interceStyle: "",
    subscriptionType:"",
    note: ""
  }
  singleModel= "on";
  //? on a créer une copie de donnés copie=typeDeCopie ={...this.originalData }
  userSettings : UserSettings = { ...this.originaluserSettings};
  postErrorMessage= "";
  postError=false;
  
  constructor(private dataService:DataService) {}
  
}


