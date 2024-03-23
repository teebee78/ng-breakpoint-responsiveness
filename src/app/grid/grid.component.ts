import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {

  @ HostBinding('class.compact') @Input({required: true}) compact: boolean = false;
}
