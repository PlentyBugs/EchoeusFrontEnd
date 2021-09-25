import {Component} from "@angular/core";
import {EditorService} from "./editor.service";

@Component({
  selector: 'editor',
  template: `
    <div class="editor-header">
      <mat-form-field appearance="fill">
        <mat-label>Language</mat-label>
        <mat-select [(value)]="editorOptions.language" (selectionChange)="changeLanguage()">
          <mat-option *ngFor="let language of languages" [value]="language">
            {{language}}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <ngx-monaco-editor class="editor-body" [options]="editorOptions" [(ngModel)]="code"></ngx-monaco-editor>
  `,
  styleUrls: ['./editor.component.scss']
})

export class EditorComponent {

  constructor(private editorService: EditorService) {}

  get languages() {
    return this.editorService.languages;
  }

  get editorOptions() {
    return this.editorService.editorOptions;
  }

  get code() {
    return this.editorService.code;
  }

  set code(val: string) {
    this.editorService.code = val;
  }

  changeLanguage() {
    this.editorService.changeLanguage();
  }
}
