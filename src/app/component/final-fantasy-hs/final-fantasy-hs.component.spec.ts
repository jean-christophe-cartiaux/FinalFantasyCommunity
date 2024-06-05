import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFantasyHsComponent } from './final-fantasy-hs.component';

describe('FinalFantasyHsComponent', () => {
  let component: FinalFantasyHsComponent;
  let fixture: ComponentFixture<FinalFantasyHsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalFantasyHsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalFantasyHsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
