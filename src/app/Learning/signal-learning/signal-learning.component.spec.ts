import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalLearningComponent } from './signal-learning.component';

describe('SignalLearningComponent', () => {
  let component: SignalLearningComponent;
  let fixture: ComponentFixture<SignalLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalLearningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
