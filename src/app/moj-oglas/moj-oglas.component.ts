import {Component, Input, OnInit} from '@angular/core';
import {Stan} from "../stan";
import {Router} from "@angular/router";

@Component({
  selector: 'app-moj-oglas',
  templateUrl: './moj-oglas.component.html',
  styleUrls: ['./moj-oglas.component.scss'],
})
export class MojOglasComponent implements OnInit {

  @Input() stan: Stan;

  constructor(private router: Router) { }

  ngOnInit() {}

  prikazStana() {
    this.router.navigateByUrl('izmena-oglasa/'+this.stan.id);
  }

  brisanjeStana() {
    //treba implementirati ovde brisanje stana
  }
}
