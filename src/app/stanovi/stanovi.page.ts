import {Component, OnInit} from '@angular/core';
import {StanoviService} from '../stanovi.service';
import {Stan} from '../stan';
import {ActivatedRoute} from '@angular/router';
import {Spratnost} from '../spratnost.enum';
import {Grejanje} from '../grejanje.enum';


@Component({
  selector: 'app-stanovi',
  templateUrl: './stanovi.page.html',
  styleUrls: ['./stanovi.page.scss'],
})
export class StanoviPage implements OnInit{

  stanovi: Stan[];
  grid: boolean;

  constructor(private stanoviServis: StanoviService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.stanoviServis.stanovi.subscribe((podaciStan) => {
      this.stanovi = podaciStan;
    });
    if (this.route.snapshot.queryParams.filter) {
      this.stanovi = this.stanoviServis.uzmiFiltrirane();
    }

    //this.stanoviServis.dodajStanUBazu('1',true,'tri',32,22323,'bg','vs','21','status',
    //1989, Spratnost['1. sprat'],Grejanje.Etazno, 2,true,'najbolje',[] ).subscribe(()=> {
    //console.log('Upisan stan');
    //});
  }

 ionViewWillEnter(){
   this.stanoviServis.ucitajStanIzBaze().subscribe((podaciStan) => {
     this.stanovi = podaciStan;
   });
   if (this.route.snapshot.queryParams.filter) {
     this.stanovi = this.stanoviServis.uzmiFiltrirane();
   }
 }

}
