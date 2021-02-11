import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../model/Person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: any;
  
  constructor(
     private cvService : CvService
   ) { }
 
 
   ngOnInit() {}
 
    sendPersonne()
      {this.cvService.clickOnItem(this.personne);
      }
    
 
 }
