import { Component, OnInit } from '@angular/core';
import {Form, NgForm} from "@angular/forms";

@Component({
  selector: 'app-novi-oglas',
  templateUrl: './novi-oglas.page.html',
  styleUrls: ['./novi-oglas.page.scss'],
})
export class NoviOglasPage implements OnInit {
  godine;
  spratovi;
  korak = 1;
  prvaBoja;
  drugaBoja;
  trecaBoja;
  cetvrtaBoja;
  petaBoja;

  constructor() {
    this.prvaBoja = 'dark';
    this.drugaBoja = 'medium';
    this.trecaBoja = 'medium';
    this.cetvrtaBoja = 'medium';
    this.petaBoja = 'medium';
    this.godine = [];
    for(let i = 2021; i>=1900; i--){
      this.godine.push(i);
    }
    this.spratovi = [];

    for(let i = 1; i<=30; i++) {
      this.spratovi.push(i + '. sprat');
    }
  }

  ngOnInit() {
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
console.log(form);
  }
}
