import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {BackendsComponent} from "./backends/backends.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'backends', component: BackendsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
