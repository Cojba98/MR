import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IzmenaOglasaPage } from './izmena-oglasa.page';

describe('IzmenaOglasaPage', () => {
  let component: IzmenaOglasaPage;
  let fixture: ComponentFixture<IzmenaOglasaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaOglasaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IzmenaOglasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
