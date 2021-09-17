import {Component, Inject, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Greeting} from "./greeting.component";
import {LeftMenuComponent} from "./left-menu.component";
import {RightMenuComponent} from "./right-menu.component";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
  destroy$: Subject<boolean> = new Subject<boolean>();
  title = 'Echoeus';
  greeting: Greeting = {id: "", content: ""};
  constructor(private http: HttpClient) {
    // http.get<Greeting>('/api/resource').pipe(takeUntil(this.destroy$)).subscribe(data => this.greeting = data);
  }

  get menuState() {
    return LeftMenuComponent.collapsed && RightMenuComponent.collapsed
      ? 'full'
      : LeftMenuComponent.collapsed
        ? 'left'
        : RightMenuComponent.collapsed
          ? 'right'
          : 'min';
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
