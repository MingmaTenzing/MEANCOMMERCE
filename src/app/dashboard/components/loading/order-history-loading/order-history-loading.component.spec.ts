import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryLoadingComponent } from './order-history-loading.component';

describe('OrderHistoryLoadingComponent', () => {
  let component: OrderHistoryLoadingComponent;
  let fixture: ComponentFixture<OrderHistoryLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderHistoryLoadingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderHistoryLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
