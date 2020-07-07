import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  productData;
  getService():Observable<any>{
    return this.http.get("https://5f044e818b06d60016dde4b9.mockapi.io/article"
    ).pipe(
      catchError(err=>{
        console.log(err)
        return err
      })
    );
  }
}
