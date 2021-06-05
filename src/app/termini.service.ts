import { Injectable } from '@angular/core';
import {Termin} from './termin';
import {StanoviService} from './stanovi.service';
import {StatusTermina} from './status-termina.enum';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Stan} from './stan';
import {BehaviorSubject} from 'rxjs';

interface TerminPodaci {

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

@Injectable({
  providedIn: 'root'
})
export class TerminiService {

  termini =  new BehaviorSubject<Termin[]>([]);

  constructor(private serviceStanovi: StanoviService, private  http: HttpClient) {

  }

  public uzmiSve(){
    return this.termini;
  }

  sorirajTermine(){
    //this.termini.sort(this.compare);
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
  //put za update
  //delete za brisanje
  public dodajTerminUBazu(id: string, idStana: string, grad: string, adresa: string, broj: string, brojTelefonaVlasnika: string, emailVlasnika: string, datum: string, vreme: string,
                   emailKupca: string, status: string){
    return this.http.post<{name: string}>('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/termin.json',
      {id,idStana,grad,adresa,broj,brojTelefonaVlasnika,emailVlasnika,datum,vreme,emailKupca,status})
      .pipe(map((resData) =>{
        this.termini.getValue().push({
          id,
          idStana,
          grad,
          adresa,
          broj,
          brojTelefonaVlasnika,
          emailVlasnika,
          datum,
          vreme,
          emailKupca,
          status
        });
        return this.termini;
      }));
  }

  public ucitajTerminIzBaze() {
    return this.http.get<{ [key: string]: TerminPodaci }>('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/termin.json')
      .pipe(map((podaciTermin) => {
        const termini1: Termin[] = [];

        for (const key in podaciTermin) {
          if (podaciTermin.hasOwnProperty(key)) {
            termini1.push({
              id: key,
              idStana: podaciTermin[key].idStana,
              grad: podaciTermin[key].grad,
              adresa: podaciTermin[key].adresa,
              broj: podaciTermin[key].broj,
              brojTelefonaVlasnika: podaciTermin[key].brojTelefonaVlasnika,
              emailVlasnika: podaciTermin[key].emailVlasnika,
              datum: podaciTermin[key].datum,
              vreme: podaciTermin[key].vreme,
              emailKupca: podaciTermin[key].emailKupca,
              status: podaciTermin[key].status
            });
          }
        }
        this.termini.next(termini1);
        return termini1;
      }));
  }


  public izmeniTermin(id: string, idStana: string, grad: string, adresa: string, broj: string, brojTelefonaVlasnika: string, emailVlasnika: string, datum: string, vreme: string,
                          emailKupca: string, status: string){
    console.log(id);
    return this.http.put
    ('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/termin/' + id + '.json',
      {id,idStana,grad,adresa,broj,brojTelefonaVlasnika,emailVlasnika,datum,vreme,emailKupca,status})
      .pipe(map((resData) =>{
        this.termini.getValue().push({
          id,
          idStana,
          grad,
          adresa,
          broj,
          brojTelefonaVlasnika,
          emailVlasnika,
          datum,
          vreme,
          emailKupca,
          status
        });
        return this.termini;
      }));
  }
}
