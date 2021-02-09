import { Component, OnInit } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  //const linK =['add'];
  constructor(
    
    private cvService : CvService,
    private router : Router 
  ) { }

  ngOnInit(): void {
  }
  // addPerson(personneForm: any)
  addPerson(personneForm: NgForm) {
    console.log(personneForm);
  //  this.cvService.addPerson(person);
    //this.router.navigate(this.linK);


  }
}
