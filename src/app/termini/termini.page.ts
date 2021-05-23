import { Component, OnInit } from '@angular/core';
import {Termin} from "../termin";
import {TerminiService} from "../termini.service";
import {StatusTermina} from "../status-termina.enum";

@Component({
  selector: 'app-termini',
  templateUrl: './termini.page.html',
  styleUrls: ['./termini.page.scss'],
})
export class TerminiPage implements OnInit {

  private termini: Termin[];

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
}
