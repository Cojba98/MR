import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MeniPrijavljenComponent } from './meni-prijavljen.component';

describe('MeniPrijavljenComponent', () => {
  let component: MeniPrijavljenComponent;
  let fixture: ComponentFixture<MeniPrijavljenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeniPrijavljenComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeniPrijavljenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
