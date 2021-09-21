import {Injectable, OnDestroy} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LeftMenuService} from "./left-menu.service";
import {RightMenuService} from "./right-menu.service";

@Injectable({
  providedIn: 'root'
})
export class AppService implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  title = 'Echoeus';

  constructor(private http: HttpClient, private leftMenu: LeftMenuService, private rightMenu: RightMenuService) {
    // http.get<Greeting>('/api/resource').pipe(takeUntil(this.destroy$)).subscribe(data => this.greeting = data);
  }

  get menuState() {
    return this.leftMenu.collapsed && this.rightMenu.collapsed
      ? 'full'
      : this.leftMenu.collapsed
        ? 'left'
        : this.rightMenu.collapsed
          ? 'right'
          : 'min';
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
