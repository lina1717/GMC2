import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';

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




//  {
//     path: 'comp1',
//     } 

    ];



@NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
export class AppRoutingModule { }
