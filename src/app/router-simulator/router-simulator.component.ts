import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {

  route:any;
  constructor(
   private router: Router
 )
  { }

 ngOnInit() {
 }
 goToRoute() {
   const linK = [this.route];
   this.router.navigate(linK);
 }

}




