import {Component, OnInit} from '@angular/core';
import {TerminiService} from "../termini.service";
import {StatusTermina} from "../status-termina.enum";
import {Termin} from "../termin";

@Component({
  selector: 'app-termini-poseta',
  templateUrl: './termini-poseta.page.html',
  styleUrls: ['./termini-poseta.page.scss'],
})
export class TerminiPosetaPage implements OnInit {

  termini: Termin[]

  constructor(private serviceTermin: TerminiService) {
  }

  ngOnInit() {
    this.termini = this.serviceTermin.uzmiSve();
    console.log(this.termini);
  }

  datum(datum: Date) {
    return datum.getDate() + '/' + datum.getMonth() + '/' + datum.getFullYear();
  }

  vreme(datum: Date) {
    return datum.getHours() + ':' + datum.getMinutes();
  }

  boja(status: StatusTermina) {
    switch (status) {
      case StatusTermina.NEPOTVRDJENO:
        return 'light';
      case StatusTermina.POTVRJDJENO:
        return 'success';
        break;
      case StatusTermina.ODBIJENO:
        return 'danger';
    }
    return 'primary';
  }

  potvrdiTermin(termin: Termin){
termin.status= StatusTermina.POTVRJDJENO;
  }

  odbijTermin(termin: Termin){
termin.status = StatusTermina.ODBIJENO;
  }

  sirina(status: StatusTermina) : number{
    if(status===StatusTermina.NEPOTVRDJENO){
      return 5;
    }
    return 6;
  }

}
