import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StanoviPage } from './stanovi.page';
import {StanListItemComponent} from "../stan-list-item/stan-list-item.component";

describe('StanoviPage', () => {
  let component: StanoviPage;
  let fixture: ComponentFixture<StanoviPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StanoviPage, StanListItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StanoviPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
