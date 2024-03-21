import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestDealProductComponent } from './best-deal-product.component';

describe('BestDealProductComponent', () => {
  let component: BestDealProductComponent;
  let fixture: ComponentFixture<BestDealProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestDealProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestDealProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
