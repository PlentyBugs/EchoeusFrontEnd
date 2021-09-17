import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LeftMenuComponent } from "./left-menu.component";
import { RightMenuComponent } from "./right-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {CodingComponent} from "./coding.component";

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
    CodingComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
