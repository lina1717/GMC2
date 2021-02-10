import { Injectable, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  getPersons():Person[] { return this.personnes};
 
  nbClick = 0 ;
  clickSbject =new Subject<number>();

  selectItemSubject = new Subject<Person>();
  //p2=new Person(2,'Fatma','Hjaiej', 23,37 ,'etudiante')
 @Input() personnes : Person[];
  
  constructor(
    
  ) {//this.personnes=[]
    this. personnes = [
      new Person ( 1 ,"lina" ,'sahli',23 , 86585,'etd'),
      new Person (2 , "ameni" ,'mrad',35 , 5888,'prof'),
      new Person (3 ,"ali"   ,'salah',20 , 741,'etd')
  
    ];
  }
  /*getPersonneById(id: number): Person {

  //  return    this.personnes.find(
  //     (personne) => personne.id ===id
  //   )
  return this.personnes.filter(e=> e.id===id)[0];
     
    }*/

    deletePersonne(personne :Person)
    {
      
      const index =this.personnes.indexOf(personne);
      console.log(index)
      if(index==-1)
      {alert('personne innexistante');
      return 0;}
      else{
        this.personnes.splice(index,1);
        return 1
      }

      }

      addPerson(person: Person) {
        this.personnes.push(person);
  
  
  
      }
    


      click() {
        this.nbClick ++;
        this.clickSbject.next(this.nbClick);
   
   
      }
      clickOnItem(personne: Person) {
       this.selectItemSubject.next(personne);
   
      }
       
    }




