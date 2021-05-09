import {Component, Input, OnInit} from '@angular/core';
import {StanModule} from "../stan/stan.module";

@Component({
  selector: 'app-stan-list-item',
  templateUrl: './stan-list-item.component.html',
  styleUrls: ['./stan-list-item.component.scss'],
})
export class StanListItemComponent implements OnInit {

  @Input() stan: StanModule;

  constructor() { }

  ngOnInit() {}

}
