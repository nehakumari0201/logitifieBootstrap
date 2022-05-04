import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogitifieFormComponent } from './logitifie-form/logitifie-form.component';

const routes: Routes = [
  {path:'logitifieForm',component:LogitifieFormComponent},
  {path:'',redirectTo:'logitifieForm',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
