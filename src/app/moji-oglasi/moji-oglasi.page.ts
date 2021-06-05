import { Component, OnInit } from '@angular/core';
import {Stan} from "../stan";
import {StanoviService} from "../stanovi.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-moji-oglasi',
  templateUrl: './moji-oglasi.page.html',
  styleUrls: ['./moji-oglasi.page.scss'],
})
export class MojiOglasiPage implements OnInit {

  stanovi: Stan[] = [];
  mojiStanovi: Stan[] = [];
  activeUserEmail: string;

  constructor(private stanoviServis: StanoviService, private authService: AuthService) { }

  ngOnInit() {
    this.stanoviServis.ucitajStanIzBaze().subscribe((podaciStan) => {
      this.stanovi = podaciStan;
      console.log(this.stanovi);
      this.activeUserEmail = this.authService.userEmail;
      if(this.stanovi){
        this.mojiStanovi = this.stanovi.filter(s => s.userEmail == this.activeUserEmail);
      }
    });
  }

}
