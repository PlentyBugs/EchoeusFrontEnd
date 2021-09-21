import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class EditorService {
  editorOptions = {theme: 'vs-dark', language: 'javascript', automaticLayout: true};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';
  languages = [
    "html",
    "javascript",
    "java",
    "scala",
    "kotlin",
    "cpp",
  ]

  changeLanguage() {
    this.editorOptions = { ...this.editorOptions, language: this.editorOptions.language}
  }
}
