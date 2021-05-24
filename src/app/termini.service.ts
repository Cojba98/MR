import { Injectable } from '@angular/core';
import {Termin} from "./termin";
import {StanoviService} from "./stanovi.service";
import {StatusTermina} from "./status-termina.enum";

@Injectable({
  providedIn: 'root'
})
export class TerminiService {

  private termini: Termin[] = [];

  constructor(private serviceStanovi: StanoviService) {

    serviceStanovi.ucitajStanIzBaze().subscribe((podaci) =>{

    const termin: Termin = {
    stan: podaci[0],
    datum: new Date(2021, 11, 11, 23, 23),
      status: StatusTermina.NEPOTVRDJENO
    };
    this.termini.push(termin);

    const termin2: Termin = {
      stan: podaci[0],
      datum: new Date(2030, 10, 23, 12, 32),
      status: StatusTermina.POTVRJDJENO
    };
    this.termini.push(termin2);

    const termin3: Termin = {
      stan: podaci[1],
      datum: new Date(2022, 10, 9, 12, 32),
      status: StatusTermina.ODBIJENO
    };
    this.termini.push(termin3);

    this.termini = this.termini.filter(t => t.datum>new Date());
    this.sorirajTermine();
    })
  }

  public uzmiSve(){
    return this.termini;
  }

  sorirajTermine(){
    this.termini.sort(this.compare);
  }
  private compare(a: Termin, b: Termin){
    if(a.datum<b.datum) {
      return -1;
    }
    if(a.datum>b.datum) {
      return 1;
    }
    return 0;
  }



}
