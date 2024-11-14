import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrderComponent } from './recent-order.component';
import { provideHttpClient } from '@angular/common/http';

describe('RecentOrderComponent', () => {
  let component: RecentOrderComponent;
  let fixture: ComponentFixture<RecentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],

      imports: [RecentOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
