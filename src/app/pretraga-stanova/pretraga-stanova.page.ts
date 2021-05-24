import { Component, OnInit } from '@angular/core';
import {StanoviService} from "../stanovi.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Spratnost} from "../spratnost.enum";
import {Grejanje} from "../grejanje.enum";
import {IonCheckbox} from "@ionic/angular";
import {GradoviService} from "../gradovi.service";

@Component({
  selector: 'app-pretraga-stanova',
  templateUrl: './pretraga-stanova.page.html',
  styleUrls: ['./pretraga-stanova.page.scss'],
})
export class PretragaStanovaPage implements OnInit {

  vrednosti = {
    upper: 5000,
    lower: 1000
  };

  kvadratura= {
    upper: 200,
    lower: 20
  };

  minCena: number;
  private maxCena: number;
  private minPovrsina: number;
  private maxPovrsina: number;
private spratovi = [];
private grejanje = []
  private grejanjePretraga=[];
  parking: any;
  uknjizeno: any;
  terasa: any;
  gradovi: string[];

  constructor( private servisStanovi: StanoviService, private router: Router, private gradoviServis: GradoviService) {

    this.gradovi = this.gradoviServis.uzmiSve();

    this.servisStanovi.ucitajStanIzBaze().subscribe(()=>{
      console.log("Stanovi ucitani");


      this.minCena = this.servisStanovi.minCena();
      this.maxCena = this.servisStanovi.maxCena();
      this.minPovrsina = this.servisStanovi.minPovrsina();
      this.maxPovrsina = this.servisStanovi.maxPovrsina();
      this.vrednosti.upper = this.maxCena;
      this.vrednosti.lower = this.minCena;
      this.kvadratura.upper = this.maxPovrsina;
      this.kvadratura.lower = this.minPovrsina

      console.log(this.vrednosti.upper);
      console.log(this.vrednosti.lower)
      console.log(this.kvadratura.upper);
      console.log(this.kvadratura.lower);

    })

  }

  ngOnInit() {

    for(const sprat in Spratnost) {
      if(isNaN(Number(sprat))) {
        this.spratovi.push(sprat);
      }
    }

    for(const grejanje in Grejanje) {
      if(isNaN(Number(grejanje))) {
        this.grejanje.push(grejanje);
      }
    }
  this.grejanjePretraga = this.grejanje;



  }

  pretraziStanove(OsnovnaPretraga: NgForm) {
    let grejanje = [];
    if(OsnovnaPretraga.value.TA){
      grejanje.push(Grejanje["TA pec"]);
    }

    console.log(OsnovnaPretraga);
    console.log(this.parking);

    this.servisStanovi.ucitajStanIzBaze().subscribe(()=>{


      this.servisStanovi.filtrirajStanove(OsnovnaPretraga.value.grad, this.vrednosti.lower, this.vrednosti.upper,
        // @ts-ignore
        this.kvadratura.lower, this.kvadratura.upper, Spratnost[OsnovnaPretraga.value.spratOD],
      Spratnost[OsnovnaPretraga.value.spratDO], this.grejanjePretraga, OsnovnaPretraga.value.parking, OsnovnaPretraga.value.uknjizeno,
      OsnovnaPretraga.value.terasa);
    this.router.navigate(['stanovi'], {queryParams: {filter: true}});
    })
  }

  dodajGrejanje(grej: any | IonCheckbox) {
    if(this.grejanjePretraga.includes(grej)){
      this.grejanjePretraga = this.grejanjePretraga.filter(s=>s!=grej);
    }else{
      this.grejanjePretraga.push(grej);
    }

  }
}
