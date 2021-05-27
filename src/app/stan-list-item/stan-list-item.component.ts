import {Component, Input, OnInit} from '@angular/core';
import {Stan} from "../stan";

@Component({
  selector: 'app-stan-list-item',
  templateUrl: './stan-list-item.component.html',
  styleUrls: ['./stan-list-item.component.scss'],
})
export class StanListItemComponent implements OnInit {

  @Input() stan: Stan;
  boja = '#e04055';

  constructor() {

  }

  ngOnInit() {
    if(this.stan.izdavanje == 'izdavanje'){
      this.boja = '#e04055';
    }else{
    this.boja = '#36abe0';
    }
  }

}
