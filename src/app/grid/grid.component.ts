import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
  ɵBrowserAnimationBuilder,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('blendInOut', [
      transition(':enter', [
        style({ opacity: 0, scale: 0 }),
        // animate('250ms ease-in-out', style({opacity: 1, scale: 1})),
        animate(
          '250ms ease-in-out',
          keyframes([
            style({ opacity: 0, transform: 'rotate(0deg)', scale: 0 }),
            style({ opacity: 0.25, transform: 'rotate(90deg)', scale: 0.25 }),
            style({ opacity: 5, transform: 'rotate(180deg)', scale: .5 }),
            style({ opacity: 0.75, transform: 'rotate(270deg)', scale: .75 }),
            style({ opacity: 1, transform: 'rotate(360deg)', scale: 1 }),
          ])
        )
      ]),
        // transition(':leave', [
        //   style({ opacity: '!' }),
        //   animate(
        //     '500ms ease-out',
        //     keyframes([
        //       style({ opacity: 1, transform: 'rotate(0deg)', scale: 1 }),
        //       style({ opacity: 0.75, transform: 'rotate(90deg)', scale: 1.25 }),
        //       style({ opacity: 5, transform: 'rotate(180deg)', scale: 1 }),
        //       style({ opacity: 0.25, transform: 'rotate(270deg)', scale: 1 }),
        //       style({ opacity: 0, transform: 'rotate(360deg)', scale: 1 }),
        //     ])
        //   )  
        // ]),
    ]),
  ],
})
export class GridComponent {
  @HostBinding('class.compact') @Input({ required: true }) compact = false;
}
