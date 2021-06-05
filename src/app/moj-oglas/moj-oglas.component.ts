import {Component, Input, OnInit} from '@angular/core';
import {Stan} from "../stan";
import {Router} from "@angular/router";
import {StanoviService} from "../stanovi.service";

@Component({
  selector: 'app-moj-oglas',
  templateUrl: './moj-oglas.component.html',
  styleUrls: ['./moj-oglas.component.scss'],
})
export class MojOglasComponent implements OnInit {

  @Input() stan: Stan;

  constructor(private router: Router, private stanoviServis: StanoviService) { }

  ngOnInit() {}

  prikazStana() {
    this.router.navigateByUrl('izmena-oglasa/'+this.stan.id);
  }

  brisanjeStana() {
    console.log("Brisanje stana: " + this.stan.id);
    this.stanoviServis.ukloniStan(this.stan.id).subscribe();
  }
}
