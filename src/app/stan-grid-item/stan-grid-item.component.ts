import {Component, Input, OnInit} from '@angular/core';
import {Stan} from "../stan";

@Component({
  selector: 'app-stan-grid-item',
  templateUrl: './stan-grid-item.component.html',
  styleUrls: ['./stan-grid-item.component.scss'],
})
export class StanGridItemComponent implements OnInit {

  @Input() stan: Stan;

  constructor() { }

  ngOnInit() {}

}
