import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StanoviService} from "../stanovi.service";
import {Stan} from "../stan";

@Component({
  selector: 'app-prikaz-stana',
  templateUrl: './prikaz-stana.page.html',
  styleUrls: ['./prikaz-stana.page.scss'],
})
export class PrikazStanaPage implements OnInit {

  stan: Stan;
  datum;

  constructor(private route: ActivatedRoute, private serviceStanovi: StanoviService) {

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
    this.stan = this.serviceStanovi.vratiStan(id);
  }

  zakaziPosetu() {

  }
}
