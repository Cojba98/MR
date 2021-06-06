import {Component, OnInit} from '@angular/core';
import {StanoviService} from "../stanovi.service";
import {GradoviService} from "../gradovi.service";
import {AuthService} from "../auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Spratnost} from "../spratnost.enum";
import {NgForm} from "@angular/forms";
import * as uuid from 'uuid';
import {Stan} from "../stan";

@Component({
  selector: 'app-izmena-oglasa',
  templateUrl: './izmena-oglasa.page.html',
  styleUrls: ['./izmena-oglasa.page.scss'],
})
export class IzmenaOglasaPage implements OnInit {

  fotografije = [];
  godine;
  spratovi = [];
  korak = 1;
  prvaBoja;
  drugaBoja;
  trecaBoja;
  cetvrtaBoja;
  petaBoja;
  linkFotografije = '';
  izdavanje: boolean = true;
  gradovi: string[];

  stan: Stan;
  brojSoba2: any;
  povrsina2: any;
  cena2: any;
  grad2: any;
  adresa2: any;
  godinaIzgradnje2: any;
  sprat2: any;
  grejanje2: any;
  terase2: any;
  parking2: any;
  opis2: any;
  kontaktBroj2: any;
  id2: any;
  broj2: string;
  status2: any;

  constructor(private stanoviServis: StanoviService, private gradoviServis: GradoviService, private authService: AuthService,
              private router: Router, private route: ActivatedRoute) {



    this.prvaBoja = 'dark';
    this.drugaBoja = 'medium';
    this.trecaBoja = 'medium';
    this.cetvrtaBoja = 'medium';
    this.petaBoja = 'medium';
    this.godine = [];
    for(let i = (new Date()).getFullYear(); i>=1900; i--){
      this.godine.push(i);
    }



  }

  ngOnInit() {

    this.gradovi = this.gradoviServis.uzmiSve();

    for(const sprat in Spratnost) {
      if(isNaN(Number(sprat))) {
        this.spratovi.push(sprat);
      }
    }

    const id = this.route.snapshot.paramMap.get('id');

    this.stan = this.stanoviServis.vratiStan(id);

    this.brojSoba2 = this.stan.brojSoba;
    this.povrsina2 = this.stan.povrsina;
    this.cena2=this.stan.cena;
    this.grad2= this.stan.grad;
    this.adresa2= this.stan.adresa;
    this.godinaIzgradnje2= this.stan.godinaIzgradnje;
    this.sprat2= this.stan.sprat;
    this.grejanje2= this.stan.grejanje;
    this.terase2= this.stan.brojTerasa;
    this.parking2= this.stan.parking
    this.opis2= this.stan.opis;
    this.kontaktBroj2 = this.stan.userKontaktBroj;
    this.fotografije = this.stan.fotografije;
    this.id2 = this.stan.id;
    this.broj2 = this.stan.broj;
    this.status2 = this.stan.status;
  }


  postaviKorak(korak: number){
    this.korak = korak;
    switch (korak){
      case 1:
        this.prvaBoja = 'dark';
        this.drugaBoja = 'medium';
        this.trecaBoja = 'medium';
        this.cetvrtaBoja = 'medium';
        this.petaBoja = 'medium';
        break;
      case 2:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'dark';
        this.trecaBoja = 'medium';
        this.cetvrtaBoja = 'medium';
        this.petaBoja = 'medium';
        break;
      case 3:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'primary';
        this.trecaBoja = 'dark';
        this.cetvrtaBoja = 'medium';
        this.petaBoja = 'medium';
        break;
      case 4:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'primary';
        this.trecaBoja = 'primary';
        this.cetvrtaBoja = 'dark';
        this.petaBoja = 'medium';
        break;
      case 5:
        this.prvaBoja = 'primary';
        this.drugaBoja = 'primary';
        this.trecaBoja = 'primary';
        this.cetvrtaBoja = 'primary';
        this.petaBoja = 'dark';
        break;
    }
  }

  postaviOglas(form: NgForm) {
    this.stanoviServis.dodajStanUBazu(uuid.v4(), form.value.izdavanje, form.value.brojSoba, form.value.povrsina,
      form.value.cena, form.value.grad, form.value.adresa, form.value.broj, form.value.status, form.value.godinaIzgradnje,
      form.value.sprat, form.value.grejanje, form.value.terase, form.value.parking ? 'da' : 'ne', form.value.opis, this.fotografije,
      this.authService.userEmail, form.value.kontaktBroj).subscribe();
    console.log("Oglas se postavlja");
    this.router.navigateByUrl("/stanovi");
  }

  izmeniOglas(form: NgForm){
    this.stanoviServis.azurirajStanUBazi(this.id2, String(this.izdavanje), form.value.brojSoba, form.value.povrsina,
      form.value.cena, form.value.grad, form.value.adresa, form.value.broj, form.value.status, form.value.godinaIzgradnje,
      form.value.sprat, form.value.grejanje, form.value.terase, form.value.parking ? 'da' : 'ne', form.value.opis, this.fotografije,
      this.authService.userEmail, form.value.kontaktBroj).subscribe();
    console.log("Oglas se postavlja");
    this.router.navigateByUrl("/stanovi");
  }

  dodajFotografiju() {
    if( this.linkFotografije && this.linkFotografije!=''){
      console.log('Dodata fotografija');
      this.fotografije.push(this.linkFotografije);
    }
    this.linkFotografije = '';
  }

  promeniSegment() {
    this.izdavanje = !this.izdavanje;
  }

}
