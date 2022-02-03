import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
    providedIn: 'root'
  })
export class ItemService{

    constructor(private http:HttpClient) { }
    getItems(): Observable <object>{
      return this.http.get('server/api/v1/getItems/')
  
    }



    createPost(item: object, id:any): Observable <object>{
        return this.http.post('server/api/v1/newItem/' + id, item);
      }
}