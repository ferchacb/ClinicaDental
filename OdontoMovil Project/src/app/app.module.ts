import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { RouterModule, Routes} from '@angular/router';
import { IgxCardModule } from 'igniteui-angular'; 


import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ConozcanosComponent } from './conozcanos/conozcanos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConveniosComponent } from './convenios/convenios.component';
import { GirasComponent } from './giras/giras.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuestroEquipoComponent } from './nuestro-equipo/nuestro-equipo.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ConozcanosComponent,
    ContactoComponent,
    ConveniosComponent,
    GirasComponent,
    HomeComponent,
    LoginComponent,
    NuestroEquipoComponent,
    QuienesSomosComponent,
    TratamientosComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    IgxCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
