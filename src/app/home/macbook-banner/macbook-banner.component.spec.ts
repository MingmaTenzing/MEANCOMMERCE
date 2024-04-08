import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacbookBannerComponent } from './macbook-banner.component';

describe('MacbookBannerComponent', () => {
  let component: MacbookBannerComponent;
  let fixture: ComponentFixture<MacbookBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacbookBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MacbookBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
