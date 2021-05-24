import {Component, OnInit} from '@angular/core';
import {StanoviService} from '../stanovi.service';
import {Stan} from '../stan';
import {ActivatedRoute, Router} from '@angular/router';
import {Spratnost} from '../spratnost.enum';
import {Grejanje} from '../grejanje.enum';


@Component({
  selector: 'app-stanovi',
  templateUrl: './stanovi.page.html',
  styleUrls: ['./stanovi.page.scss'],
})
export class StanoviPage implements OnInit{

  stanovi: Stan[];
  grid: boolean;

  constructor(private stanoviServis: StanoviService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    if (this.route.snapshot.queryParams.filter) {
      console.log("Uzima filtrirane")
      this.stanovi = this.stanoviServis.uzmiFiltrirane();
      console.log(this.stanovi);
    }else {
      console.log("Uzima nefiltrirane")
      this.stanoviServis.ucitajStanIzBaze().subscribe((podaciStan) => {
        this.stanovi = podaciStan;
        console.log(this.stanovi);
      });
    }

  }

 ionViewWillEnter(){
   if (this.route.snapshot.queryParams.filter) {
     console.log("Uzima filtrirane")
     this.stanovi = this.stanoviServis.uzmiFiltrirane();
     console.log(this.stanovi);
   }else {
     console.log("Uzima nefiltrirane")
     this.stanoviServis.ucitajStanIzBaze().subscribe((podaciStan) => {
       this.stanovi = podaciStan;
       console.log(this.stanovi);
     });
   }

  }

  prikaziStan(id: string) {
  this.router.navigateByUrl('stanovi/prikaz-stana/'+id);
  }
}
