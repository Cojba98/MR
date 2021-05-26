import {Component, OnInit} from '@angular/core';
import {TerminiService} from '../termini.service';
import {StatusTermina} from '../status-termina.enum';
import {Termin} from '../termin';

@Component({
  selector: 'app-termini-poseta',
  templateUrl: './termini-poseta.page.html',
  styleUrls: ['./termini-poseta.page.scss'],
})
export class TerminiPosetaPage implements OnInit {

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

  potvrdiTermin(termin: Termin) {
    termin.status = 'potvrdjeno';
  }

  odbijTermin(termin: Termin) {
    termin.status = 'odbijeno';
  }

  sirina(status: string): number {
    if (status === 'na cekanju') {
      return 5;
    }
    return 6;
  }

}
