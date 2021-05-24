import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GradoviService {

  gradovi: string[] = [];

  constructor() {
    this.gradovi.push("Beograd");
    this.gradovi.push("Nis");
    this.gradovi.push("Novi Sad");
    this.gradovi.push("Kragujevac");
    this.gradovi.push("Krusevac");

  }

  uzmiSve() {
    return this.gradovi;
  }
}
