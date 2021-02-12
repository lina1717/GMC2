import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authentificationService: AuthentificationService,
   private router:Router
  ) { }

  ngOnInit(): void {
  }

 /* login(loginForm: any) {

    console.log(loginForm);
  
    }

*/
    
  login(loginForm : any) {

    this.authentificationService.login(loginForm.value).subscribe(
 
     (data)=>{
       /* console.log(data),
        error :(error) => console.log(error)*/
 
 
         localStorage.setItem('token', data.id);
          this.router.navigate(['cv']);
          error :(error: any) => console.log(error)
 
       }
    )
   ;
   }
  }
