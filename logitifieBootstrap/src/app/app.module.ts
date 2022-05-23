import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogitifieFormComponent } from './logitifie-form/logitifie-form.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientForm2Component } from './client-form2/client-form2.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
@NgModule({
  declarations: [
    AppComponent,
    LogitifieFormComponent,
    SidenavComponent,
    ProgressbarComponent,
    ClientFormComponent,
    ClientForm2Component,
    DropdownComponent,
    Sidenav1Component,
    Sidenav2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule
  ],
  providers: [BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
