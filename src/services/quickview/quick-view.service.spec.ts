import { TestBed } from '@angular/core/testing';

import { QuickViewService } from './quick-view.service';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('QuickViewService', () => {
  let service: QuickViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickViewService],
    });
    service = TestBed.inject(QuickViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
