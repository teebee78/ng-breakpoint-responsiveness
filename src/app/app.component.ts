import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { GridAreaComponent } from "./grid-area/grid-area.component";
import {BreakpointObserver, BreakpointState, LayoutModule} from '@angular/cdk/layout'; 
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, GridComponent, GridAreaComponent, LayoutModule]
})
export class AppComponent {
  title = 'ng-breakpoint-responsiveness';
  compact = toSignal(this.breakpointObserver.observe('(max-width: 650px)').pipe(map(state => state.matches)));

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}

