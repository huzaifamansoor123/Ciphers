import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealfenceComponent } from './realfence.component';

describe('RealfenceComponent', () => {
  let component: RealfenceComponent;
  let fixture: ComponentFixture<RealfenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealfenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealfenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
