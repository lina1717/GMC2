import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../model/Person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

 
  @Input()  personne: any
  constructor(
    
    private router: Router,
    private cvService: CvService
  ) { }

  ngOnInit() {

    this.cvService.selectItemSubject.subscribe(
        (personne:Person)=> this.personne = personne
    );
 
   }
   
   goToDetail() {
     const link = ['cv', this.personne];
     this.router.navigate(link);
   }
 
 }