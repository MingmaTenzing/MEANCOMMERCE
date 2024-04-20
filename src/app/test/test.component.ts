import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Observable } from 'rxjs';
import { MeanProducts } from '../../types';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit {
  products$!: Observable<MeanProducts[]>;
  constructor(private MeanBackend: BackendService) {}
  ngOnInit(): void {
    this.products$ = this.MeanBackend.getData();
  }
}
