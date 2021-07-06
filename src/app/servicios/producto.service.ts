import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {



  constructor(private http: HttpClient) {
    
   }

  getAll(){
    return this.http.get("https://jsonfy.com/items")
  }
  getAllPromise(){
    return this.http.get("https://jsonfy.com/items").toPromise()
  }
  getById(id){
    return this.http.get("https://jsonfy.com/items/"+id).toPromise()
  }
}
