import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-meni-prijavljen',
  templateUrl: './meni-prijavljen.component.html',
  styleUrls: ['./meni-prijavljen.component.scss'],
})
export class MeniPrijavljenComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  onLogOut() {
    this.authService.logOut();
    this.router.navigateByUrl('/home');
  }

}
