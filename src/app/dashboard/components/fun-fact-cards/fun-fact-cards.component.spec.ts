import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFactCardsComponent } from './fun-fact-cards.component';

describe('FunFactCardsComponent', () => {
  let component: FunFactCardsComponent;
  let fixture: ComponentFixture<FunFactCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunFactCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FunFactCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
