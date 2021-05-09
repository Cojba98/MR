import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pretraga-stanova',
  templateUrl: './pretraga-stanova.page.html',
  styleUrls: ['./pretraga-stanova.page.scss'],
})
export class PretragaStanovaPage implements OnInit {

  vrednosti = {
    upper: 5000,
    lower: 1000
  }
  kvadratura= {
    upper: 200,
    lower: 20
  }

  constructor() { }

  ngOnInit() {
  }

}
