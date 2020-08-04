import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeBarComponent } from './three-bar.component';

describe('ThreeBarComponent', () => {
  let component: ThreeBarComponent;
  let fixture: ComponentFixture<ThreeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
