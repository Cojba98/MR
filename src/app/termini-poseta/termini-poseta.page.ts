import {Component, OnInit} from '@angular/core';
import {TerminiService} from '../termini.service';
import {StatusTermina} from '../status-termina.enum';
import {AuthService} from "../auth/auth.service";

export interface Termin {

  id: string;
  idStana: string;
  grad: string;
  adresa: string;
  broj: string;
  brojTelefonaVlasnika: string;
  emailVlasnika: string;
  datum: string;
  vreme: string;
  emailKupca: string;
  status: string;

}
@Component({
  selector: 'app-termini-poseta',
  templateUrl: './termini-poseta.page.html',
  styleUrls: ['./termini-poseta.page.scss'],
})
export class TerminiPosetaPage implements OnInit {

  termini: Termin[] = [];
  activeUserEmail: string;
  terminiVlasnika: Termin[] = [];

  constructor(private terminiServis: TerminiService, private authService: AuthService) {
  }

  ngOnInit() {
    this.terminiServis.ucitajTerminIzBaze().subscribe((podaciTermin) => {
      this.termini = podaciTermin;
      console.log(this.termini);
      this.activeUserEmail = this.authService.userEmail;
      if(this.termini){
        this.terminiVlasnika = this.termini.filter(s => s.emailVlasnika == this.activeUserEmail);
      }
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
    this.terminiServis.izmeniTermin(termin.id, termin.idStana, termin.grad, termin.adresa,
      termin.broj, termin.brojTelefonaVlasnika, termin.emailVlasnika, termin.datum, termin.vreme,
      termin.emailKupca, termin.status).subscribe();
  }

  odbijTermin(termin: Termin) {
    termin.status = 'odbijeno';
    this.terminiServis.izmeniTermin(termin.id, termin.idStana, termin.grad, termin.adresa,
      termin.broj, termin.brojTelefonaVlasnika, termin.emailVlasnika, termin.datum, termin.vreme,
      termin.emailKupca, termin.status).subscribe();
  }

  sirina(status: string): number {
    if (status === 'na cekanju') {
      return 5;
    }
    return 6;
  }

}
