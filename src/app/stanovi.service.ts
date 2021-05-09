import { Injectable } from '@angular/core';
import {StanModule} from "./stan/stan.module";

@Injectable({
  providedIn: 'root'
})
export class StanoviService {

  stanovi: StanModule[];

  constructor() {
    this.stanovi = [];
    const s1 = new StanModule();
    s1.adresa = 'Tosin bunar';
    s1.broj = '155';
    s1.brojSoba = 'Dvosoban';
    s1.brojTerasa = 1;
    s1.cena = 35000;
    s1.godinaIzgradnje = 2016;
    s1.grad = 'Beograd';
    s1.grejanje = 'TA pec';
    s1.id = 1;
    s1.opis = 'Odlican stan';
    s1.parking = true;
    s1.povrsina = 55;
    s1.sprat = '2. sprat';
    s1.status = 'Uknjizen';
    s1.fotografije = [];
    s1.fotografije.push('https://resizer.4zida.rs/4gQ9rPGUcyd3ReBs8Vptnd0aOB1S37zkwrN-_2B04tU/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzZiMWE4NjRiMjQwZmM3N2UzYTkwMWUzNDcwYjI0M2Y5.jpeg');
    s1.fotografije.push('https://resizer.4zida.rs/3WX5j3JiDi65x7W5zM1eNl44Q8aqTDVHDWRnbVsDjqQ/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzYyMWViMGI4MjdjMDlkZDE4MDRlODdiZDc0Zjc5Mzgz.jpeg');
    s1.fotografije.push('https://resizer.4zida.rs/fnC5Zx1J3QHNWUf8TAdxB1cxauH0hkB1k9KqCbmXMbw/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4Lzk3MmNkYTFlNjJiNzI2NDBjYjdhYzcwMjcxNGExMTVm.jpeg');
    s1.fotografije.push('https://resizer.4zida.rs/Nsh2lksGnQz1rqempVS6FTg98SGgyY48cNzv1HnqMU0/fit/1920/1080/ce/0/bG9jYWw6Ly8vNjA1ODhkOTMxMzk2ZmIzYWFlNDc1Yjg4LzUxZjE1ZWZkZDE3MGU2MDQzZmEwMmE3NDg4MmYwNDcw.jpeg');
    this.stanovi.push(s1);
    this.stanovi.push(s1);
    this.stanovi.push(s1);
    this.stanovi.push(s1);
  }

  vratiStan(id){
    for(let i = 0; i<this.stanovi.length; i++) {
      if (this.stanovi[i].id == id) {
        return this.stanovi[i];
      }
    }
  }
}
