import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StanoviService} from "../stanovi.service";
import {Stan} from "../stan";
import {TerminiService} from "../termini.service";
import {StatusTermina} from "../status-termina.enum";
import {NgModel} from "@angular/forms";
import {formatDate} from "@angular/common";
import {AuthService} from "../auth/auth.service";
import * as uuid from 'uuid';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-prikaz-stana',
  templateUrl: './prikaz-stana.page.html',
  styleUrls: ['./prikaz-stana.page.scss'],
})
export class PrikazStanaPage implements OnInit {

  stan: Stan;
  datum;

  constructor(private route: ActivatedRoute, private serviceStanovi: StanoviService,
              private terminiServis: TerminiService, private authService : AuthService,
              private toastController: ToastController) {

  }


  ngOnInit() {

    let danas = new Date();
    this.datum = danas.getFullYear();
    this.datum+= ('-' + String(danas.getMonth() + 1).padStart(2, '0'));
    this.datum+= ('-' + String(danas.getDate()).padStart(2, '0'));
     const id = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.stan = this.serviceStanovi.ucitajStanIzBaze().subscribe(()=>{
      this.stan = this.serviceStanovi.vratiStan(id);
      console.log(this.stan);
    });
  }

  zakaziPosetu(idStana: string, grad: string, adresa: string, broj: string, brojTelefonaVlasnika: string, emailVlasnika: string, datum: string, vreme: string,
               emailKupca: string, status: string) {
    console.log(datum);
    console.log(vreme);
    this.terminiServis.dodajTerminUBazu(uuid.v4(),idStana, grad, adresa, broj, brojTelefonaVlasnika, emailVlasnika, datum, vreme, this.authService.userEmail, status)
      .subscribe(()=>{
        this.presentToast();
      });
  }

  pretvoriDatumUString(datum) {
    return formatDate(datum,'mediumDate','en-US');
  }

  pretvoriVremeUString(vreme) {
    return formatDate(vreme,'shortTime','en-US');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Predlog termina za posetu je poslat vlasniku na potvrdjivanje',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Zakazivanje termina',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
