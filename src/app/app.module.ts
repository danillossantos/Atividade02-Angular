import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { EmailComponent } from './email/email.component';
import { SobrenomeComponent } from './sobrenome/sobrenome.component';
import { SenhaComponent } from './senha/senha.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    EmailComponent,
    SobrenomeComponent,
    SenhaComponent,
    ButtonComponent
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
