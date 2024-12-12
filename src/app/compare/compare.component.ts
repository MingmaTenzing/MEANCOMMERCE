import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  viewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCompareItems } from '../states/compare-items/selector';
import { Subject, takeUntil } from 'rxjs';
import { ai_assistant_chat, MeanProducts } from '../../types';
import { FormsModule } from '@angular/forms';
import { Block } from '@angular/compiler';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-compare',
  imports: [NgOptimizedImage, CommonModule, FormsModule],
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.css',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(20%)',
          height: 0,
        }),
        animate(
          '120ms ease',
          style({ opacity: 1, transform: 'translateX(0%)', height: '*' })
        ),
      ]),
      transition(':leave', [
        animate(
          '100ms ease-out',
          style({ opacity: 0, transform: 'translateX(20%)', height: 0 })
        ),
      ]),
    ]),
  ],
})
export class CompareComponent implements OnInit, OnDestroy {
  @ViewChild('lastelementRef')
  lastMessageRef!: ElementRef;
  $destroy = new Subject<void>();
  ai_modal_openclose: boolean = false;
  compare_items: MeanProducts[] = [];
  constructor(private store: Store) {}

  conversation: ai_assistant_chat[] = [
    {
      message:
        "Hi, I'm your assistant. I can help you with your tech queries or suggest you on which product is better suited for you.",
      role: 'system',
    },
    {
      message: "Hi, I'm your assistant. .",
      role: 'user',
    },
    {
      message:
        'I can help you with your tech queries or suggest you on which product is better suited for you.',
      role: 'system',
    },
    {
      message: "Hi, I'm yourted for you.",
      role: 'user',
    },
    {
      message:
        "Hi, I'm your assistant. I can help you with your tech queries or suggest you on which product is better suited for you.",
      role: 'user',
    },
    {
      message: 'my name is',
      role: 'user',
    },
  ];
  user_query: string = '';

  ngOnInit(): void {
    this.store
      .select(selectCompareItems)
      .pipe(takeUntil(this.$destroy))
      .subscribe((products) => (this.compare_items = products));
  }
  change_modal_sate() {
    this.ai_modal_openclose = !this.ai_modal_openclose;
    console.log(this.ai_modal_openclose);
  }
  send_query() {
    this.conversation.push({
      message: this.user_query,
      role: 'user',
    });
    this.user_query = '';

    this.lastMessageRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
    // this.backend
    //   .chat_OpenAI(this.user_query)
    //   .pipe(takeUntil(this.$destroy))
    //   .subscribe((message) => {
    //     console.log(message);
    //     this.conversation.push(message);
    //     this.user_query = '';
    //   });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
