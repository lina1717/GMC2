import { Injectable, Input, Output } from '@angular/core';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  
 
  //p2=new Person(2,'Fatma','Hjaiej', 23,37 ,'etudiante')
 @Input() personnes : Person[];
  
  constructor(
    
  ) {this.personnes=[]
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
    }




