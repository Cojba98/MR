import {Injectable} from '@angular/core';
import {Stan} from "./stan";
import {Spratnost} from "./spratnost.enum";
import {Grejanje} from "./grejanje.enum";

@Injectable({
  providedIn: 'root'
})
export class StanoviService {

   stanovi: Stan[];
  fitriraniStanovi: Stan[];
  constructor() {
    this.stanovi = [];
    const s1: Stan = {

      adresa: 'Tosin bunar',
      izdavanje: false,
      broj :'155',
      brojSoba : 'Dvosoban',
      brojTerasa : 1,
      cena : 35000,
      godinaIzgradnje : 2016,
      grad : 'Beograd',
      grejanje : Grejanje["TA pec"],
      id : 1,
      opis : 'Odlican stan',
      parking : true,
      povrsina : 55,
      sprat : Spratnost.Prizemlje,
      status : 'Uknjizen',
      fotografije: [],
    };
    s1.fotografije.push('https://resizer.4zida.rs/4gQ9rPGUcyd3ReBs8Vptnd0aOB1S37zkwrN-_2B04tU/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzZiMWE4NjRiMjQwZmM3N2UzYTkwMWUzNDcwYjI0M2Y5.jpeg');
    s1.fotografije.push('https://resizer.4zida.rs/3WX5j3JiDi65x7W5zM1eNl44Q8aqTDVHDWRnbVsDjqQ/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzYyMWViMGI4MjdjMDlkZDE4MDRlODdiZDc0Zjc5Mzgz.jpeg');
    s1.fotografije.push('https://resizer.4zida.rs/fnC5Zx1J3QHNWUf8TAdxB1cxauH0hkB1k9KqCbmXMbw/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4Lzk3MmNkYTFlNjJiNzI2NDBjYjdhYzcwMjcxNGExMTVm.jpeg');
    s1.fotografije.push('https://resizer.4zida.rs/Nsh2lksGnQz1rqempVS6FTg98SGgyY48cNzv1HnqMU0/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzUxZjE1ZWZkZDE3MGU2MDQzZmEwMmE3NDg4MmYwNDcw.jpeg');

    this.stanovi.push(s1);

    const s2: Stan = {

      adresa: 'Bulevar Kralja Aleksandra',
      izdavanje: false,
      broj :'34',
      brojSoba : 'Jednosoban',
      brojTerasa : 1,
      cena : 44000,
      godinaIzgradnje : 2016,
      grad : 'Beograd',
      grejanje : Grejanje.Centralno,
      id : 1,
      opis : 'Prva liga stan',
      parking : false,
      povrsina : 32,
      sprat : Spratnost["1. sprat"],
      status : 'Nije uknjizen',
      fotografije: [],
    };

    s2.fotografije.push('https://resizer.4zida.rs/4gQ9rPGUcyd3ReBs8Vptnd0aOB1S37zkwrN-_2B04tU/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzZiMWE4NjRiMjQwZmM3N2UzYTkwMWUzNDcwYjI0M2Y5.jpeg');
    s2.fotografije.push('https://resizer.4zida.rs/3WX5j3JiDi65x7W5zM1eNl44Q8aqTDVHDWRnbVsDjqQ/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzYyMWViMGI4MjdjMDlkZDE4MDRlODdiZDc0Zjc5Mzgz.jpeg');
    s2.fotografije.push('https://resizer.4zida.rs/fnC5Zx1J3QHNWUf8TAdxB1cxauH0hkB1k9KqCbmXMbw/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4Lzk3MmNkYTFlNjJiNzI2NDBjYjdhYzcwMjcxNGExMTVm.jpeg');
    s2.fotografije.push('https://resizer.4zida.rs/Nsh2lksGnQz1rqempVS6FTg98SGgyY48cNzv1HnqMU0/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzUxZjE1ZWZkZDE3MGU2MDQzZmEwMmE3NDg4MmYwNDcw.jpeg');


    this.stanovi.push(s2);
    this.stanovi.push(s1);
    this.stanovi.push(s2);
  }

  public uzmiSve(){
    return this.stanovi;
  }

  public minCena(): number{
    let min = this.stanovi[0].cena;
    for(const stan of this.stanovi){
      if(stan.cena< min){
        min = stan.cena;
      }
    }
    return min;
  }

  public maxCena(): number{
    let max = this.stanovi[0].cena;
    for(const stan of this.stanovi){
      if(stan.cena> max){
        max = stan.cena;
      }
    }
    return max;
  }

  public maxPovrsina(): number{
    let max = this.stanovi[0].povrsina;
    for(const stan of this.stanovi){
      if(stan.povrsina > max){
        max = stan.povrsina;
      }
    }
    return max;
  }

  public minPovrsina(): number{
    let max = this.stanovi[0].povrsina;
    for(const stan of this.stanovi){
      if(stan.povrsina < max){
        max = stan.povrsina;
      }
    }
    return max;
  }

  public filtrirajStanove(grad: string, minCena: number, maxCena: number, minPovrsina: number, maxPovrsina: number, spratOD?: Spratnost, spratDO?: Spratnost, grejanje?: string[], parking?: any, uknjizeno?: any, terasa?: any){
    let filtriraniStanovi;
    filtriraniStanovi = this.stanovi.filter(s => s.cena>=minCena && s.cena<=maxCena && s.povrsina>=minPovrsina && s.povrsina<=maxPovrsina && s.grad==grad);
    if(spratOD){
      filtriraniStanovi = filtriraniStanovi.filter(s=> s.sprat>=Spratnost[spratOD]);
    }
    if(spratDO){
      filtriraniStanovi = filtriraniStanovi.filter(s=> s.sprat<=Spratnost[spratDO]);
    }
    if(grejanje){
      filtriraniStanovi = filtriraniStanovi.filter(s=> grejanje.includes(Grejanje[s.grejanje]));
    }

    console.log("Parking: " + parking);

    if(parking){
      filtriraniStanovi = filtriraniStanovi.filter(s=>s.parking==true);
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
    return this.stanovi[0];
  }

}
