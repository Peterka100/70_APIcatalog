import { Component, OnInit } from '@angular/core';
import { AuthService} from "../auth.service";
import { BackendsService} from "../backends.service";

@Component({
  selector: 'app-backends',
  templateUrl: './backends.component.html',
  styleUrls: ['./backends.component.css']
})
export class BackendsComponent implements OnInit {

  public backends = [];

  constructor(private authService: AuthService, private backendService: BackendsService) { }

  ngOnInit() {
    this.checkLogin();
    this.checkBackends();
  }

    /* checkLogin function is checking if user is logged IN, or not */
    checkLogin(){
      this.authService.isLoggedINfunction();
      console.log(this.authService.isLoggedIN);
    }

    /* get Backends je funkce, který mi vráti list všech backendu - z BackendService */
    checkBackends(){
      this.backendService.getBackends()
        .subscribe( data => {
          console.log(data);
        })
    }


}


