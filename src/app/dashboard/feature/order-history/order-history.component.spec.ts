import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryComponent } from './order-history.component';
import { provideHttpClient } from '@angular/common/http';

describe('OrderHistoryComponent', () => {
  let component: OrderHistoryComponent;
  let fixture: ComponentFixture<OrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],

      imports: [OrderHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
