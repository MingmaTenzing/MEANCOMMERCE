import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileShoppingCartItemComponent } from './mobile-shopping-cart-item.component';

describe('MobileShoppingCartItemComponent', () => {
  let component: MobileShoppingCartItemComponent;
  let fixture: ComponentFixture<MobileShoppingCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileShoppingCartItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileShoppingCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
