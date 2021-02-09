import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider-observable',
  templateUrl: './slider-observable.component.html',
  styleUrls: ['./slider-observable.component.css']
})
export class SliderObservableComponent implements OnInit {

  path='rotating_card_profile.png';
  paths =[

    'Aymenjpg.jpg',
    'tim_logo.png',
    'rotating_card_profile.png'
  ];
  constructor() { }
  sliderObservable = new Observable<string>((observer)=>{
    let i=0 ;
    setInterval(()=>{
      if (i===this.path.length){i=0}
      else{
        observer.next(this.path[i++])
      }
    },1500);


  });
  ngOnInit(){

     this.sliderObservable.subscribe(

      (path) => {

        this.path = path

     console.log(path);
  }
  )
  }}
