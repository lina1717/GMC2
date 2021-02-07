import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../model/Person';
import { CvService } from '../services/cv.service';
const LINK= ['/'];


@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
personne : any

name ='Sellaouti' 
firstname="Aymen"

@Input() personnes : Person[]

  constructor(
    private activatedRoute :ActivatedRoute,
    private CvService :CvService,
    private router :Router
    
  ) {

    this.personnes=[

{
  "id":2,
  "name" :"Fatma",
   "firstname":"Hjaiej",
   "age":23,
   "cin":37,
   "job": "etudiante"
},
{
  "id":3,
 "name" :"Oumayma",
  "firstname":"Ben Fraj",
  "age":24,
  "cin":24,
  "job": "etudiante"
}
    ]


   }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(
    //  (params) =>{
     // console.log(params);
    //  this.personne=this.CvService.getPersonneById(params.id)
    //  if (!this.personne){
    //    this.router.navigate(LINK)
     // }

   // }
//);
  }
   

    deletePersonne(){
     if ( this.CvService.deletePersonne(this.personne))
     {
       this.router.navigate(LINK)
     }

    }
}
