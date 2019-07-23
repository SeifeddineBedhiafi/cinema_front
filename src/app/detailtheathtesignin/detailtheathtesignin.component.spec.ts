import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailtheathtesigninComponent } from './detailtheathtesignin.component';

describe('DetailtheathtesigninComponent', () => {
  let component: DetailtheathtesigninComponent;
  let fixture: ComponentFixture<DetailtheathtesigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailtheathtesigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailtheathtesigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
