import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayFairComponent } from './play-fair.component';

describe('PlayFairComponent', () => {
  let component: PlayFairComponent;
  let fixture: ComponentFixture<PlayFairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayFairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayFairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
