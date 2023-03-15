import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserSettingsFormsComponent } from './user-settings-forms/user-settings-forms.component';
import{HttpClientModule}  from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserSettingsFormsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
