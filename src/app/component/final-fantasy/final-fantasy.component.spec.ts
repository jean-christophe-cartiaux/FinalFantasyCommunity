import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFantasyComponent } from './final-fantasy.component';

describe('FinalFantasyComponent', () => {
  let component: FinalFantasyComponent;
  let fixture: ComponentFixture<FinalFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalFantasyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
