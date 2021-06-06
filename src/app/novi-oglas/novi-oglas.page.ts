import { Component, OnInit } from '@angular/core';
import {Form, NgForm} from "@angular/forms";
import {Spratnost} from "../spratnost.enum";
import {StanoviService} from "../stanovi.service";
import {GradoviService} from "../gradovi.service";
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import * as uuid from 'uuid';

@Component({
  selector: 'app-novi-oglas',
  templateUrl: './novi-oglas.page.html',
  styleUrls: ['./novi-oglas.page.scss'],
})
export class NoviOglasPage implements OnInit {

  fotografije = [];
  godine;
  spratovi = [];
  korak = 1;
  prvaBoja;
  drugaBoja;
  trecaBoja;
  cetvrtaBoja;
  petaBoja;
  linkFotografije = '';
  izdavanje: boolean = true;
  gradovi: string[];

  constructor(private stanoviServis: StanoviService, private gradoviServis: GradoviService, private authService: AuthService,
              private router: Router) {
    this.prvaBoja = 'dark';
    this.drugaBoja = 'medium';
    this.trecaBoja = 'medium';
    this.cetvrtaBoja = 'medium';
    this.petaBoja = 'medium';
    this.godine = [];
    for(let i = (new Date()).getFullYear(); i>=1900; i--){
      this.godine.push(i);
    }
     }

  ngOnInit() {

    this.gradovi = this.gradoviServis.uzmiSve();

    for(const sprat in Spratnost) {
      if(isNaN(Number(sprat))) {
        this.spratovi.push(sprat);
      }
    }
    console.log(this.spratovi);
  }


  postaviKorak(korak: number){
    this.korak = korak;
    switch (korak){
      case 1:
        this.prvaBoja = 'dark';
        this.drugaBoja = 'medium';
        this.trecaBoja = 'medium';
        this.cetvrtaBoja = 'medium';
        this.petaBoja = 'medium';
        break;
      case 2:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'dark';
        this.trecaBoja = 'medium';
        this.cetvrtaBoja = 'medium';
        this.petaBoja = 'medium';
        break;
      case 3:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'primary';
        this.trecaBoja = 'dark';
        this.cetvrtaBoja = 'medium';
        this.petaBoja = 'medium';
        break;
      case 4:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'primary';
        this.trecaBoja = 'primary';
        this.cetvrtaBoja = 'dark';
        this.petaBoja = 'medium';
        break;
      case 5:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'primary';
        this.trecaBoja = 'primary';
        this.cetvrtaBoja = 'primary';
        this.petaBoja = 'dark';
        break;
    }
  }

  postaviOglas(form: NgForm) {
    this.stanoviServis.dodajStanUBazu(uuid.v4(), String(this.izdavanje), form.value.brojSoba, form.value.povrsina,
      form.value.cena, form.value.grad, form.value.adresa, form.value.broj, form.value.status, form.value.godinaIzgradnje,
      form.value.sprat, form.value.grejanje, form.value.terase, form.value.parking ? 'da' : 'ne', form.value.opis, this.fotografije,
      this.authService.userEmail, form.value.kontaktBroj).subscribe();
    console.log("Oglas se postavlja");
    this.router.navigateByUrl("/stanovi");
  }

  dodajFotografiju() {
    if( this.linkFotografije && this.linkFotografije!=''){
      console.log('Dodata fotografija');
      this.fotografije.push(this.linkFotografije);
    }
    this.linkFotografije = '';
  }

  promeniSegment() {
    this.izdavanje = !this.izdavanje;
    console.log(this.izdavanje);
  }
}
