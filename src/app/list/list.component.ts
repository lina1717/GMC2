import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../model/Person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 @Input() personnes: any;
  @Output() forwardPerson = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  //ngOnInit() {
   // this.personnes = this.cvService.getPersons();
  //}


  //*******API**************************
  ngOnInit() {
    this.cvService.getPersonnes().subscribe(
      (personnes) => {this.personnes = personnes; },
      (error) => {
        this.personnes = this.cvService.getPersonnes();
        alert(`Problème de connexion les données sont fake`);
      }
    );
 }
 

}