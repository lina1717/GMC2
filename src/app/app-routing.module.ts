import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ColorComponent } from './color/color.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'comp1',
   
    children: [
      {path: 'comp1', component: Comp1Component},
      {
        
        path: 'color/:color', component: ColorComponent
      },
      {
        
        path: 'comp2', component: Comp2Component
      },
      {
        
        path: 'id', component: DetailPersonComponent
      }
    ]
  },




  {
   path: 'login',component: LoginComponent
   } ,
   
  {
    path: 'add',component: AddComponent
    } 

    ];



@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
