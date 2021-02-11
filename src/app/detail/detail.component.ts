import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../model/Person';
import { CvService } from '../services/cv.service';
const linK =[''];
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 
  @Input()  personne: any
  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
    private cvService: CvService
  ) { }

  /*ngOnInit() {

    this.cvService.selectItemSubject.subscribe(
        (personne:Person)=> this.personne = personne
    );
 
   }*/
   //**************************************************API******************************
   ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {

  this.cvService.findPersonneById(params.id).subscribe(
     (personne) => this.personne =personne,
     (error) => this.router.navigate(linK)
   );

  }
  );

  }

   
   goToDetail() {
     const link = ['cv'];
     this.router.navigate(link);
   }
   deletePersonne(){
    if(this.cvService.deletePersonne(this.personne)){
       this.router.navigate(linK)
       alert ('error');

    }
  }
 }