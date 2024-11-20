import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { NgOptimizedImage } from '@angular/common';
@Component({
    selector: 'app-side-panel',
    imports: [SidebarModule, ButtonModule, NgOptimizedImage],
    templateUrl: './side-panel.component.html',
    styleUrl: './side-panel.component.css'
})
export class SidePanelComponent {
  sidebarVisible: boolean = false;
}
