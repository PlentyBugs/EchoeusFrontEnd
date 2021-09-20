import {Component} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {LeftMenuService} from "./left-menu.service";

@Component({
  selector: 'app-left-menu',
  template: `
    <div class="left-menu d-inline-flex" [@leftMenuState]="collapsedState">
      <div class="trigger left-trigger" (click)="toggle()"></div>
    </div>
  `,
  styleUrls: ['./left-menu.component.scss'],
  animations: [
    trigger('leftMenuState', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hide', style({
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])
  ]
})
export class LeftMenuComponent {
  constructor(private lms: LeftMenuService) {}

  get collapsedState() {
    return this.lms.collapsedState;
  }

  toggle() {
    this.lms.toggle();
  }
}
