import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path : 'comp1',
    component : Comp1Component
  },
  {
   path : 'comp2',
   component : Comp2Component
  
  },

  {
    path : 'color/:color',
    component : ColorComponent
   
   }
 ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
