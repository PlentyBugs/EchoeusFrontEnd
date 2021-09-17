import {Component, Injectable, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-right-menu',
  template: `
    <div class="right-menu d-inline-flex" [@rightMenuState]="collapsedState" (click)="toggle()">
      <div class="trigger right-trigger"></div>
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

export class RightMenuComponent implements OnInit {
  static collapsed: boolean = false;

  constructor() {}
  ngOnInit() {}

  get collapsedState() {
    return RightMenuComponent.collapsed ? 'hide': 'show';
  }

  toggle() {
    RightMenuComponent.collapsed = !RightMenuComponent.collapsed;
  }
}
