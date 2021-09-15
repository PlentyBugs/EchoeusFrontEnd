import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-dark bg-dark navbar-custom">
      <div class="w-100 text-center" id="navbarSupportedContent">
        <a href="/" class="d-inline-block float-start mx-1 unselectable disabled">
          <img src="../assets/logo.svg" alt="" class="d-inline-block">
          <span class="logo-name">Echoeus</span>
        </a>
      </div>
    </nav>
  `,
  styles: []
})

export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
