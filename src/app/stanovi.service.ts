import {Injectable} from '@angular/core';
import {Stan} from './stan';
import {Spratnost} from './spratnost.enum';
import {Grejanje} from './grejanje.enum';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

interface StanPodaci{
  id: string;
  izdavanje: string;
  brojSoba: string;
  povrsina: number;
  cena: number;
  grad: string;
  adresa: string;
  broj: string;
  status: string;
  godinaIzgradnje: number;
  sprat: Spratnost;
  grejanje: Grejanje;
  brojTerasa: number;
  parking: string;
  opis: string;
  fotografije: string[];
  userEmail: string;
  userKontaktBroj: string;
}

@Injectable({
  providedIn: 'root'
})
export class StanoviService {

  stanovi = new BehaviorSubject<Stan[]>([]);
  fitriraniStanovi: Stan[];
  constructor(private  http: HttpClient) {

    //this.stanovi = [];

    // this.ucitajStanIzBaze().subscribe((podaciStan)=> {
    //   console.log('Ucitan stan iz baze');
    //   const stan: Stan[] = [];
    //
    //   for (const key in podaciStan){
    //     if(podaciStan.hasOwnProperty(key)){
    //       stan.push({
    //         id: key,
    //         izdavanje: podaciStan[key].izdavanje,
    //         adresa: podaciStan[key].adresa,
    //         broj: podaciStan[key].broj,
    //         brojSoba: podaciStan[key].brojSoba,
    //         brojTerasa: podaciStan[key].brojTerasa,
    //         cena: podaciStan[key].cena,
    //         fotografije: podaciStan[key].fotografije,
    //         godinaIzgradnje: podaciStan[key].godinaIzgradnje,
    //         grad: podaciStan[key].grad,
    //         grejanje: podaciStan[key].grejanje,
    //         opis: podaciStan[key].opis,
    //         parking: podaciStan[key].parking,
    //         povrsina: podaciStan[key].povrsina,
    //         sprat: podaciStan[key].sprat,
    //         status: podaciStan[key].status
    //       });
    //     }
    //     console.log(key);
    //   }
    //   this.stanovi = stan;
    //   console.log('Ucitani stanovi iz baze');
    // });
    // const s1: Stan = {
    //
    //   adresa: 'Tosin bunar',
    //   izdavanje: false,
    //   broj :'155',
    //   brojSoba : 'Dvosoban',
    //   brojTerasa : 1,
    //   cena : 35000,
    //   godinaIzgradnje : 2016,
    //   grad : 'Beograd',
    //   grejanje : Grejanje['TA pec'],
    //   id : '1',
    //   opis : 'Odlican stan',
    //   parking : true,
    //   povrsina : 55,
    //   sprat : Spratnost.Prizemlje,
    //   status : 'Uknjizen',
    //   fotografije: [],
    // };
    // s1.fotografije.push('https://resizer.4zida.rs/4gQ9rPGUcyd3ReBs8Vptnd0aOB1S37zkwrN-_2B04tU/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzZiMWE4NjRiMjQwZmM3N2UzYTkwMWUzNDcwYjI0M2Y5.jpeg');
    // s1.fotografije.push('https://resizer.4zida.rs/3WX5j3JiDi65x7W5zM1eNl44Q8aqTDVHDWRnbVsDjqQ/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzYyMWViMGI4MjdjMDlkZDE4MDRlODdiZDc0Zjc5Mzgz.jpeg');
    // s1.fotografije.push('https://resizer.4zida.rs/fnC5Zx1J3QHNWUf8TAdxB1cxauH0hkB1k9KqCbmXMbw/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4Lzk3MmNkYTFlNjJiNzI2NDBjYjdhYzcwMjcxNGExMTVm.jpeg');
    // s1.fotografije.push('https://resizer.4zida.rs/Nsh2lksGnQz1rqempVS6FTg98SGgyY48cNzv1HnqMU0/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzUxZjE1ZWZkZDE3MGU2MDQzZmEwMmE3NDg4MmYwNDcw.jpeg');
    //
    // this.stanovi.push(s1);
    //
    // const s2: Stan = {
    //
    //   adresa: 'Bulevar Kralja Aleksandra',
    //   izdavanje: false,
    //   broj :'34',
    //   brojSoba : 'Jednosoban',
    //   brojTerasa : 1,
    //   cena : 44000,
    //   godinaIzgradnje : 2016,
    //   grad : 'Beograd',
    //   grejanje : Grejanje.Centralno,
    //   id : '1',
    //   opis : 'Prva liga stan',
    //   parking : false,
    //   povrsina : 32,
    //   sprat : Spratnost['1. sprat'],
    //   status : 'Nije uknjizen',
    //   fotografije: [],
    // };
    //
    // s2.fotografije.push('https://resizer.4zida.rs/4gQ9rPGUcyd3ReBs8Vptnd0aOB1S37zkwrN-_2B04tU/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzZiMWE4NjRiMjQwZmM3N2UzYTkwMWUzNDcwYjI0M2Y5.jpeg');
    // s2.fotografije.push('https://resizer.4zida.rs/3WX5j3JiDi65x7W5zM1eNl44Q8aqTDVHDWRnbVsDjqQ/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzYyMWViMGI4MjdjMDlkZDE4MDRlODdiZDc0Zjc5Mzgz.jpeg');
    // s2.fotografije.push('https://resizer.4zida.rs/fnC5Zx1J3QHNWUf8TAdxB1cxauH0hkB1k9KqCbmXMbw/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4Lzk3MmNkYTFlNjJiNzI2NDBjYjdhYzcwMjcxNGExMTVm.jpeg');
    // s2.fotografije.push('https://resizer.4zida.rs/Nsh2lksGnQz1rqempVS6FTg98SGgyY48cNzv1HnqMU0/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzUxZjE1ZWZkZDE3MGU2MDQzZmEwMmE3NDg4MmYwNDcw.jpeg');
    //
    //
    // this.stanovi.push(s2);
    // this.stanovi.push(s1);
    // this.stanovi.push(s2);
    //
    // this.dodajStanUBazu(s1.id,s1.izdavanje,s1.brojSoba,s1.povrsina,s1.cena,s1.grad,s1.adresa,s1.broj,s1.status,
    //   s1.godinaIzgradnje,s1.sprat,s1.grejanje,s1.brojTerasa,s1.parking,s1.opis,s1.fotografije);
  }

  public dodajStanUBazu(id: string, izdavanje: string, brojSoba: string, povrsina: number, cena: number, grad: string,
                        adresa: string, broj: string, status: string, godinaIzgradnje: number, sprat: Spratnost,
                        grejanje: Grejanje, brojTerasa: number, parking: string, opis: string, fotografije: string[],
                        userEmail: string, userKontaktBroj: string) {
    return this.http.post<{name: string}>('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/stan.json',
     {id,izdavanje,brojSoba,povrsina,cena,grad,adresa,broj,status,godinaIzgradnje,sprat,grejanje,brojTerasa,parking,opis,fotografije,userEmail, userKontaktBroj})
      .pipe(map((resData) =>{
          this.stanovi.getValue().push({
            id: resData.name,
            izdavanje,
            brojSoba,
            adresa,
            broj,
            brojTerasa,
            cena,
            fotografije,
            godinaIzgradnje,
            grad,
            grejanje,
            opis,
            parking,
            povrsina,
            sprat,
            status,
            userEmail,
            userKontaktBroj
          })
        return this.stanovi;
    }));
  }

  // public ucitajStanIzBaze(){
  //   return this.http.get<{[key: string]: StanPodaci}>('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/stan.json');
  // }

  public ucitajStanIzBaze() {
    return this.http.get<{ [key: string]: StanPodaci }>('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/stan.json')
      .pipe(map((podaciStan) => {
        const stan: Stan[] = [];

        for (const key in podaciStan) {
          if (podaciStan.hasOwnProperty(key)) {
            stan.push({
              id: key,
              izdavanje: podaciStan[key].izdavanje,
              adresa: podaciStan[key].adresa,
              broj: podaciStan[key].broj,
              brojSoba: podaciStan[key].brojSoba,
              brojTerasa: podaciStan[key].brojTerasa,
              cena: podaciStan[key].cena,
              fotografije: podaciStan[key].fotografije,
              godinaIzgradnje: podaciStan[key].godinaIzgradnje,
              grad: podaciStan[key].grad,
              grejanje: podaciStan[key].grejanje,
              opis: podaciStan[key].opis,
              parking: podaciStan[key].parking,
              povrsina: podaciStan[key].povrsina,
              sprat: podaciStan[key].sprat,
              status: podaciStan[key].status,
              userEmail: podaciStan[key].userEmail,
              userKontaktBroj: podaciStan[key].userKontaktBroj
            });
          }
        }
        this.stanovi.next(stan);
        return stan;
      }));
  }

  public uzmiSve(){
    return this.stanovi.asObservable();
  }

  public minCena(): number{
    let min = this.stanovi.getValue()[0].cena;
    for(const stan of this.stanovi.getValue()){
      if(stan.cena <= Number(min)){
        min = stan.cena;
      }
    }
    return min;
  }

  public maxCena(): number{
    let max = this.stanovi.getValue()[0].cena;
    for(const stan of this.stanovi.getValue()){
      if(stan.cena> Number(max)){
        max = stan.cena;
      }
    }
    return max;
  }

  public maxPovrsina(): number{
    let max = this.stanovi.getValue()[0].povrsina;
    for(const stan of this.stanovi.getValue()){
      if(stan.povrsina > Number(max)){
        max = stan.povrsina;
      }
    }
    return max;
  }

  public minPovrsina(): number{
    let max = this.stanovi.getValue()[0].povrsina;
    for(const stan of this.stanovi.getValue()){
      if(stan.povrsina < Number(max)){
        max = stan.povrsina;
      }
    }
    return max;
  }

  public konvertujStanove(stanovi: Stan[]): Stan[]{
    let novi = [];
    let stan: Stan;
    for(let s of stanovi){
      stan = new class implements Stan {
        adresa: string = s.adresa;
        broj: string = s.broj;
        brojSoba: string = s.brojSoba;
        brojTerasa: number = Number(s.brojTerasa);
        cena: number = Number(s.cena);
        fotografije: string[] = s.fotografije;
        godinaIzgradnje: number = Number(s.godinaIzgradnje);
        grad: string = s.grad;
        grejanje: Grejanje = s.grejanje;
        id: string = s.id;
        izdavanje: string = (s.izdavanje);
        opis: string = s.opis;
        parking: string = (s.parking);
        povrsina: number = Number(s.povrsina);
        // @ts-ignore
        sprat: Spratnost = Spratnost[s.sprat];
        status: string = s.status;
        userEmail: string = s.userEmail;
        userKontaktBroj: string = s.userKontaktBroj;
      }
      if(stan.sprat>Spratnost["Potkrovlje"]){
        console.log('Vece nego podrum');
      }else{
        console.log('Nije vece nego podrum')
      }
      novi.push(stan);
    }
    return novi;
  }


  public filtrirajStanove(grad: string, minCena: number, maxCena: number, minPovrsina: number, maxPovrsina: number, spratOD?: Spratnost, spratDO?: Spratnost, grejanje?: string[], parking?: any, uknjizeno?: any, terasa?: any){
    let filtriraniStanovi = this.konvertujStanove(this.stanovi.getValue());
    filtriraniStanovi = filtriraniStanovi.filter(s => s.cena>=minCena && s.cena<=maxCena && s.povrsina>=minPovrsina && s.povrsina<=maxPovrsina && s.grad==grad);
    if(spratOD){
      filtriraniStanovi = filtriraniStanovi.filter(s=> s.sprat>=spratOD);
    }
    if(spratDO){
      filtriraniStanovi = filtriraniStanovi.filter(s=> s.sprat<=spratDO);
    }

    if(parking){
      filtriraniStanovi = filtriraniStanovi.filter(s=>s.parking=='da');
    }
    if(uknjizeno){
      filtriraniStanovi = filtriraniStanovi.filter(s=>s.status=='Uknjizen');
    }
    if(terasa){
      filtriraniStanovi = filtriraniStanovi.filter(s=>s.brojTerasa>0);
    }

    this.fitriraniStanovi = filtriraniStanovi;

  }

  public uzmiFiltrirane(){
    return this.fitriraniStanovi;
  }

  public vratiStan(id){
    return this.stanovi.getValue().find(s => s.id==id);
  }

  public vratiMojeStanove(email: string){

  }


  azurirajStanUBazi(id: string, izdavanje: string, brojSoba: string, povrsina: number, cena: number, grad: string,
                    adresa: string, broj: string, status: string, godinaIzgradnje: number, sprat: Spratnost,
                    grejanje: Grejanje, brojTerasa: number, parking: string, opis: string, fotografije: string[],
                    userEmail: string, userKontaktBroj: string) {
    return this.http.put('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/stan/' + id + '.json',
      {id,izdavanje,brojSoba,povrsina,cena,grad,adresa,broj,status,godinaIzgradnje,sprat,grejanje,brojTerasa,parking,opis,fotografije,userEmail, userKontaktBroj})
      .pipe(map((resData) =>{
        this.stanovi.getValue().push({
          id,
          izdavanje,
          brojSoba,
          adresa,
          broj,
          brojTerasa,
          cena,
          fotografije,
          godinaIzgradnje,
          grad,
          grejanje,
          opis,
          parking,
          povrsina,
          sprat,
          status,
          userEmail,
          userKontaktBroj
        })
        return this.stanovi;
      }));
  }

  ukloniStan(id: string) {
    console.log("Ukloni stan: " + id);
    return this.http.delete('https://mr-app-d15ba-default-rtdb.europe-west1.firebasedatabase.app/stan/' + id + '.json')
      .pipe(map((resData) => {
        return this.stanovi;
      }));
  }
}
