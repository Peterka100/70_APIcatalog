import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BackendsService {

  getBackends(){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Authorization', localStorage.getItem('token'));
    console.log(headers);

    return this.http.get<allBackends[]>('https://www-csas.csint.cz/webapi/api/v3/admin/backends?states=all'), {
      headers: headers
    }
  }

  constructor(private http: HttpClient) { }
}
