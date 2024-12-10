import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ai_assistant_chat, user } from '../../types';
import { from, Observable, Subject, takeUntil } from 'rxjs';
import { BackendService } from '../../services/backend/backend.service';

@Component({
  selector: 'app-ai-assistant',
  imports: [FormsModule, CommonModule, NgClass],
  templateUrl: './ai-assistant.component.html',
  styleUrl: './ai-assistant.component.css',
})
export class AiAssistantComponent implements OnDestroy {
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
      role: 'system',
    },
    {
      message: 'my name is',
      role: 'user',
    },
  ];
  user_query: string = '';
  $destroy: Subject<void> = new Subject<void>();

  constructor(private backend: BackendService) {}

  send_query() {
    this.conversation.push({
      message: this.user_query,
      role: 'user',
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
