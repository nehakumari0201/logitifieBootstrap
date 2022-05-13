import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogitifieFormComponent } from './logitifie-form/logitifie-form.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ClientFormComponent } from './client-form/client-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LogitifieFormComponent,
    SidenavComponent,
    ProgressbarComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule,
  ],
  providers: [BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
