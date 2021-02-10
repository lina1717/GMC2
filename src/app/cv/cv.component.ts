import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../model/Person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  @Input() selectedPerson :any;
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {
 
    this.cvService.clickSbject.subscribe(

      (nbClick:number)=> console.log(nbClick)
    );


  }
}
