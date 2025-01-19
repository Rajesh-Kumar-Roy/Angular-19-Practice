import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalHousingLocationComponent } from './signal-housing-location.component';

describe('SignalHousingLocationComponent', () => {
  let component: SignalHousingLocationComponent;
  let fixture: ComponentFixture<SignalHousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalHousingLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalHousingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
