import {Component, Injectable, OnInit} from "@angular/core";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-left-menu',
  template: `
    <div class="left-menu d-inline-flex" [@leftMenuState]="collapsedState" (click)="toggle()">
      <div class="trigger left-trigger"></div>
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

export class LeftMenuComponent implements OnInit {
  static collapsed: boolean = false;

  constructor() {}
  ngOnInit() {}

  get collapsedState() {
    return LeftMenuComponent.collapsed ? 'hide': 'show';
  }

  toggle() {
    LeftMenuComponent.collapsed = !LeftMenuComponent.collapsed;
  }
}
