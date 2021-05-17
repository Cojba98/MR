import { Component, OnInit } from '@angular/core';
import {StanoviService} from "../stanovi.service";
import {IonToggle} from "@ionic/angular";
import {Stan} from "../stan";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stanovi',
  templateUrl: './stanovi.page.html',
  styleUrls: ['./stanovi.page.scss'],
})
export class StanoviPage implements OnInit {

  stanovi: Stan[];
  grid: boolean;

  constructor(private stanoviServis: StanoviService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    if(this.route.snapshot.queryParams.filter) {
    this.stanovi = this.stanoviServis.uzmiFiltrirane();
    }else {
      this.stanovi = this.stanoviServis.uzmiSve();
    }
    console.log("Prikazz: " + this.stanovi.length);

  }

}
