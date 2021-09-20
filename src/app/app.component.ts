import {Component, Inject, Injectable, OnDestroy} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('mainState', [
      state('full', style({
        transform: 'translateX(-20%)',
        width: '100vw'
      })),
      state('min', style({
        transform: 'translateX(0%)',
        width: '60vw'
      })),
      state('left', style({
        transform: 'translateX(-25%)',
        width: '80vw'
      })),
      state('right', style({
        transform: 'translateX(0%)',
        width: '80vw'
      })),
      transition('* <=> *', animate('200ms ease-in-out'))
    ])
  ]
})

export class AppComponent implements OnDestroy {

  constructor(private appService: AppService) {}

  get menuState() {
    return this.appService.menuState;
  }

  ngOnDestroy(): void {
    this.appService.ngOnDestroy();
  }
}
