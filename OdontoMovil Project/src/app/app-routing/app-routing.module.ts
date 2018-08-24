import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BlogComponent} from '../blog/blog.component';
import {ConozcanosComponent} from '../conozcanos/conozcanos.component';
import {ContactoComponent} from '../contacto/contacto.component';
import {ConveniosComponent} from '../convenios/convenios.component';
import {GirasComponent} from '../giras/giras.component';
import {HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import {NuestroEquipoComponent} from '../nuestro-equipo/nuestro-equipo.component';
import {QuienesSomosComponent} from '../quienes-somos/quienes-somos.component';
import {TratamientosComponent} from '../tratamientos/tratamientos.component';
import {DashboardComponent} from '../dashboard/dashboard.component';


const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'conozcanos', component: ConozcanosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'convenios', component: ConveniosComponent},
  {path: 'giras', component: GirasComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'nuestro-equipo', component: NuestroEquipoComponent},
  {path: 'quienes-somos', component: QuienesSomosComponent},
  {path: 'tratamientos', component: TratamientosComponent},
  {path: 'dashboard', component: DashboardComponent} 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
