import { Component, OnInit } from '@angular/core';
import {StanModule} from "../stan/stan.module";
import {StanoviService} from "../stanovi.service";
import {IonToggle} from "@ionic/angular";

@Component({
  selector: 'app-stanovi',
  templateUrl: './stanovi.page.html',
  styleUrls: ['./stanovi.page.scss'],
})
export class StanoviPage implements OnInit {

  stanovi: StanModule[];
  grid: boolean;

  constructor(private stanoviServis: StanoviService) {
    this.stanovi = stanoviServis.stanovi;
  }

  ngOnInit() {
  }

}
