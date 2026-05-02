import { Component, OnInit, signal } from '@angular/core';
import { ApiService } from '../service/api-service';

@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit{
  name="John";

  constructor(private api : ApiService){}

  url = "https://jsonplaceholder.typicode.com/todos/";

  data : any[] = [];

  ngOnInit(): void {
    this.loadData(this.url);
     console.log("OnInit is Executed...");
   }

   loadData(url : any){
        this.api.fetchData(this.url).subscribe({
          next: (res:any) => {
            this.data = res;
          },
          error : (err) =>{
            console.log("API error");
            this.data = [];
          }

        })
   }

}
