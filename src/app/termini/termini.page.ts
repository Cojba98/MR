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

  termini: Termin[];

  constructor(private terminiServis: TerminiService) {
  }

  ngOnInit() {
    this.terminiServis.ucitajTerminIzBaze().subscribe((podaciTermin) => {
      this.termini = podaciTermin;
      console.log(this.termini);
    });
  }

  datum(datum: Date) {
    return datum.getDate() + '/' + datum.getMonth() + '/' + datum.getFullYear();
  }

  vreme(datum: Date) {
    return datum.getHours() + ':' + datum.getMinutes();
  }

  boja(status: string) {
    switch (status) {
      case 'na cekanju':
        return 'light';
      case 'potvrdjeno':
        return 'success';
        break;
      case 'odbijeno':
        return 'danger';
    }
    return 'primary';
  }
}
