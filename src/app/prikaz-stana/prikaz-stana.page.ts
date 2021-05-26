import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StanoviService} from "../stanovi.service";
import {Stan} from "../stan";
import {TerminiService} from "../termini.service";
import {StatusTermina} from "../status-termina.enum";
import {NgModel} from "@angular/forms";
import {formatDate} from "@angular/common";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-prikaz-stana',
  templateUrl: './prikaz-stana.page.html',
  styleUrls: ['./prikaz-stana.page.scss'],
})
export class PrikazStanaPage implements OnInit {

  stan: Stan;
  datum;

  constructor(private route: ActivatedRoute, private serviceStanovi: StanoviService,
              private terminiServis: TerminiService, private authService : AuthService) {

  }


  ngOnInit() {

    let danas = new Date();
    this.datum = danas.getFullYear();
    this.datum+= ('-' + String(danas.getMonth() + 1).padStart(2, '0'));
    this.datum+= ('-' + String(danas.getDate()).padStart(2, '0'));
    console.log(this.datum);
     const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // @ts-ignore
    this.stan = this.serviceStanovi.ucitajStanIzBaze().subscribe(()=>{
      this.stan = this.serviceStanovi.vratiStan(id);
    });
  }

  zakaziPosetu(idStana: string, brojTelefonaVlasnika: string, emailVlasnika: string, datum: string, vreme: string,
               emailKupca: string, status: string) {
    console.log(datum);
    console.log(vreme);
    this.terminiServis.dodajTerminUBazu(idStana, brojTelefonaVlasnika, emailVlasnika, datum, vreme, this.authService.userEmail, status)
      .subscribe();
  }

  pretvoriDatumUString(datum) {
    return formatDate(datum,'mediumDate','en-US');
  }

  pretvoriVremeUString(vreme) {
    return formatDate(vreme,'shortTime','en-US');
  }
}
