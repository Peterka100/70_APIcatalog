import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Ibackend} from "./backend";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})

export class BackendsService {



  constructor(private http: HttpClient) { }

  getBackends(): Observable<Ibackend[]>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', localStorage.getItem('token'));

    console.log(headers);

    return this.http.get<Ibackend[]>('https://www-csas.csint.cz/webapi/api/v3/admin/backends?states=all'), {
      headers: headers
    }
  }




}
