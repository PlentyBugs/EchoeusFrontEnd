import {Component} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {RightMenuService} from "./right-menu.service";

@Component({
  selector: 'app-right-menu',
  template: `
    <div class="right-menu d-inline-flex" [@rightMenuState]="collapsedState">
      <div class="trigger right-trigger" (click)="toggle()"></div>
    </div>
  `,
  styleUrls: ['./right-menu.component.scss'],
  animations: [
    trigger('rightMenuState', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hide', style({
        transform: 'translateX(100%)'
      })),
      transition('show => hide', animate('200ms ease-out')),
      transition('hide => show', animate('200ms ease-in'))
    ])
  ]
})
export class RightMenuComponent {

  constructor(private rms: RightMenuService) {}

  get collapsedState() {
    return this.rms.collapsedState;
  }

  toggle() {
    this.rms.toggle();
  }
}
