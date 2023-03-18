import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSettingsFormsComponent } from './user-settings-forms/user-settings-forms.component';
import{HttpClientModule}  from '@angular/common/http';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
