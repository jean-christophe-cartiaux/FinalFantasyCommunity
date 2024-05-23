import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBisComponent } from './nav-bis.component';

describe('NavBisComponent', () => {
  let component: NavBisComponent;
  let fixture: ComponentFixture<NavBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
