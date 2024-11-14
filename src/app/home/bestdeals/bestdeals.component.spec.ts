import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestdealsComponent } from './bestdeals.component';
import { provideHttpClient } from '@angular/common/http';

describe('BestdealsComponent', () => {
  let component: BestdealsComponent;
  let fixture: ComponentFixture<BestdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient()],

      imports: [BestdealsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BestdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
