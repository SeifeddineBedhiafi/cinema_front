import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsigninComponent } from './detailsignin.component';

describe('DetailsigninComponent', () => {
  let component: DetailsigninComponent;
  let fixture: ComponentFixture<DetailsigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
