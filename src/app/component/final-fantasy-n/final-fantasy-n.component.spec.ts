import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFantasyNComponent } from './final-fantasy-n.component';

describe('FinalFantasyNComponent', () => {
  let component: FinalFantasyNComponent;
  let fixture: ComponentFixture<FinalFantasyNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalFantasyNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalFantasyNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
