import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient){}


   fetchData(url : any){
    return this.http.get<any>(url);
      // this.data = res;
    };

   }



