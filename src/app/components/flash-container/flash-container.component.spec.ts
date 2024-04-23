import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashContainerComponent } from './flash-container.component';

describe('FlashContainerComponent', () => {
  let component: FlashContainerComponent;
  let fixture: ComponentFixture<FlashContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
