import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LeftMenuComponent} from "./left-menu.component";
import { RightMenuComponent } from "./right-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {EditorComponent} from "./editor.component";
import {FormsModule} from "@angular/forms";
import {MonacoEditorModule} from "ngx-monaco-editor";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";

@NgModule({
  declarations: [
    HeaderComponent,
    LeftMenuComponent,
    RightMenuComponent,
    EditorComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MonacoEditorModule.forRoot(),
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
