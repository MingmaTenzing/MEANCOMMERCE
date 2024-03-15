import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchModalService {
  isSearchModalOpen: Boolean = false;

  constructor() {}
  changeSearchModalState() {
    this.isSearchModalOpen = !this.isSearchModalOpen;
    console.log(this.isSearchModalOpen);
  }
}
