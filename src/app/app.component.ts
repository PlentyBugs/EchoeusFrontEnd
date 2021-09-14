import {Component, OnDestroy} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";
import {Greeting} from "./greeting.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  title = 'EchoeusFrontEnd';
  greeting: Greeting = {id: "", content: ""};
  constructor(private http: HttpClient) {
    http.get<Greeting>('/api/resource').pipe(takeUntil(this.destroy$)).subscribe(data => this.greeting = data);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
