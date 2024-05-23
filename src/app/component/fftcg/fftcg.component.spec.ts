import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FftcgComponent } from './fftcg.component';

describe('FftcgComponent', () => {
  let component: FftcgComponent;
  let fixture: ComponentFixture<FftcgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FftcgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FftcgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
