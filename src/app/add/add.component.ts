import { Component, OnInit } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from '../model/Person';
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
  //addPerson(personneForm:any) {
    //console.log(personneForm);
  //  this.cvService.addPerson(person);
    //this.router.navigate(this.linK);


  //}
  addPersonne(personne: Person) {
    this.cvService.addPersonne(personne).subscribe(
       (success:Object) =>{
        console.log(success);
        const linK =['cv'];
        this.router.navigate(linK);

       },
       (error) => console.log(error)

    );


  }


  addPersonna(formumaire: NgForm) {
    this.cvService.addPersonne(formumaire.value).subscribe(
      (success) =>{

        console.log(success)
       this.router.navigate(['comp1'])},
      (erreur) => console.log(erreur)
    );
  }
}
