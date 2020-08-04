import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBarComponent } from './two-bar.component';

describe('TwoBarComponent', () => {
  let component: TwoBarComponent;
  let fixture: ComponentFixture<TwoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
