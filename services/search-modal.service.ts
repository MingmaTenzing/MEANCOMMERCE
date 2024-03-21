import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SearchModalService {
  private display: BehaviorSubject<true | false> = new BehaviorSubject<
    true | false
  >(false);

  watch(): Observable<true | false> {
    return this.display.asObservable();
  }
  open() {
    this.display.next(true);
  }
  close() {
    this.display.next(false);
  }
}
