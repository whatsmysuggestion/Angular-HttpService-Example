import { Injectable } from '@angular/core';
 
import { HttpClient } from '@angular/common/http';
 


 
//const apiUrl = 'http://localhost:3000/data/12/12';

const apiUrl = 'http://localhost:8080/2';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts():any{
    return this.http.get(apiUrl);
  }

}
