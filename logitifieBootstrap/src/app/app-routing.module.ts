import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MobilesidebarComponent } from './mobilesidebar/mobilesidebar.component';
import { Sidenav1Component } from './sidenav1/sidenav1.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ClientForm2Component } from './client-form2/client-form2.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogitifieFormComponent } from './logitifie-form/logitifie-form.component';
import { Sidenav2Component } from './sidenav2/sidenav2.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

const routes: Routes = [
  {path:'logitifieForm',component:LogitifieFormComponent},
  {path:'',redirectTo:'logitifieForm',pathMatch:'full'},
  // {path:'sidenav',component:SidenavComponent}
  {path:'progressBar',component:ProgressbarComponent},
  {path:'clientForm',component:ClientFormComponent},
  {path:'clientForm2',component:ClientForm2Component},
  {path:'drop',component:DropdownComponent},
  // {path:'sidebar',component:Sidenav2Component},
  // {path:'mobile',component:MobilesidebarComponent},
  // {path:'side',component:SideBarComponent}
  {path:'menu',component:SidemenuComponent},
  {path:'map',component:MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
