import { Component, OnInit } from '@angular/core';
import {Stan} from "../stan";
import {StanoviService} from "../stanovi.service";

@Component({
  selector: 'app-moji-oglasi',
  templateUrl: './moji-oglasi.page.html',
  styleUrls: ['./moji-oglasi.page.scss'],
})
export class MojiOglasiPage implements OnInit {
  stanovi: Stan[];

  constructor(private stanoviServis: StanoviService) { }

  ngOnInit() {
    this.stanoviServis.ucitajStanIzBaze().subscribe((podaciStan) => {
      this.stanovi = podaciStan;
      console.log(this.stanovi);
    });
  }

}
