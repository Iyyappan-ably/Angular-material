import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Entity/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

 
  getProducts() : Observable<IProduct[]>{

   let url = "http://localhost:8080/getProducts";
   let result = this.http.get<IProduct[]>(url);
   return result;
   
  }



}
