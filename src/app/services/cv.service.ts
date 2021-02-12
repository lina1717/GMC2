import { Injectable, Input, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Person } from '../model/Person';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const API_link= 'https://immense-citadel-91115.herokuapp.com/api/personnes'
const API_PATH = 'https://immense-citadel-91115.herokuapp.com/api/personnes/';
@Injectable({
    providedIn: 'root'
})
export class CvService {
    getPersons(): Person[] { return this.personnes };

    nbClick = 0;
    clickSbject = new Subject<number>();

    selectItemSubject = new Subject<Person>();
    //p2=new Person(2,'Fatma','Hjaiej', 23,37 ,'etudiante')
    @Input() personnes: Person[];

    constructor(    private http: HttpClient

    ) {//this.personnes=[]
        this.personnes = [
            new Person(1, "lina", 'sahli', 23, 86585, 'etd'),
            new Person(2, "ameni", 'mrad', 35, 5888, 'prof'),
            new Person(3, "ali", 'salah', 20, 741, 'etd')

        ];
    }
    /*getPersonneById(id: number): Person {
  
    //  return    this.personnes.find(
    //     (personne) => personne.id ===id
    //   )
    return this.personnes.filter(e=> e.id===id)[0];
       
      }*/

    deletePersonne(personne: Person) {

        const index = this.personnes.indexOf(personne);
        console.log(index)
        if (index == -1) {
            alert('personne innexistante');
            return 0;
        }
        else {
            this.personnes.splice(index, 1);
            return 1
        }

    }

   /* addPerson(person: Person) {
        this.personnes.push(person);
    }*/

    

    getPersonnes(): Observable<Person[]> {
        return this.http.get<Person[]>(API_PATH);
      }
    
      findPersonneById(id:any): Observable<Person> {
        return this.http.get<Person>(API_PATH + 'id');
      }

    click() {
        this.nbClick++;
        this.clickSbject.next(this.nbClick);


    }
    clickOnItem(personne: Person) {
        this.selectItemSubject.next(personne);

    }

    addPersonne(personne: Person){

        const token = localStorage.getItem('token');
 
        if (token) {
        const headers = new HttpHeaders().set('Authorization',token);
 
        return this.http.post(API_link,personne ,{headers});
       }
 
       return this.http.post(API_link,personne);
       }
 
     }
 
    






