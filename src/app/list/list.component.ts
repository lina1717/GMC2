import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../model/Person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 @Input() personnes: Person[] =[];
  @Output() forwardPerson = new EventEmitter();
  constructor(
    private cvService: CvService
  ) { }

  ngOnInit() {



    this.personnes = this.cvService.getPersons();
  }
}