import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  //here we will learn data binding techniques as well as properties
  
  courseName : string = "Angular 21";
  username = "";
  rollNo : Number = 123;

  currentDate : Date = new Date();

  constructor(){
    console.log(this.courseName); 
  }

}
