import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs/index";


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIN: string;

  isLoggedINfunction() {
    return this.isLoggedIN = JSON.parse(localStorage.getItem("isLoggedIN") || 'false');
  }


  constructor() {

  }
}
