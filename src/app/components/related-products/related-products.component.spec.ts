import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductsComponent } from './related-products.component';
import { provideRouter } from '@angular/router';

describe('RelatedProductsComponent', () => {
  let component: RelatedProductsComponent;
  let fixture: ComponentFixture<RelatedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([])],
      imports: [RelatedProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RelatedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
