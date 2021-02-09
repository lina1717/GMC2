import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { ComposantComponent } from './composant/composant.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { FormsModule } from '@angular/forms';
import { ColorComponent } from './color/color.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { ModelComponent } from './model/model.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    ComposantComponent,
    RouterSimulatorComponent,
    ColorComponent,
    DetailPersonComponent,
    ModelComponent,
    LoginComponent,
    HeaderComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
