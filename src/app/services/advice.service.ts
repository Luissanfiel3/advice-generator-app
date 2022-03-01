import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {AdvicesInterface} from "../interfaces/advices-interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor( private http: HttpClient) {}

  getData(): Observable<any>  {
    return  this.http.get(environment.api)
  }

}
