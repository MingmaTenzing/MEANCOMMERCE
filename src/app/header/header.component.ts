import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  NgModule,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BottomNavComponent } from './bottom-nav/bottom-nav.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { SearchModalService } from '../../../services/search-modal.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BottomNavComponent, SearchModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  modalState: Boolean = false;
  loginModal: Boolean = false;
  constructor(private SearchModalService: SearchModalService) {}

  ngOnInit(): void {
    const data = this.SearchModalService.watch();
    data.subscribe((value) => {
      if (value == false) {
        this.modalState = false;
      } else {
        this.modalState = true;
      }
    });
  }

  changeState() {
    this.SearchModalService.open();
    console.log(this.modalState);
  }

  userLoginModal() {
    this.loginModal = !this.loginModal;
  }

  // changeModalState() {
  //   this.SearchModalService.changeModalState();
  //   console.log(this.SearchModalService.isSearchModalOpen);
  // }

  ngOnDestroy(): void {}
}
