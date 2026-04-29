import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {

  // it will always execute first when object is created or class is called.
  constructor(){
    console.log("Constructor Executed...");
  }

  // it will execute when class is initialized.
  ngOnInit(): void {
    console.log("OnInit Function Executed....");
  }

  // it will execute after oninit
  ngAfterViewInit(): void {
    console.log("On After Init Executed...");
  }

  // it works before page redirection in routing.
  ngOnDestroy(): void {
    console.log("On Destroy Executed...");
  }

}
