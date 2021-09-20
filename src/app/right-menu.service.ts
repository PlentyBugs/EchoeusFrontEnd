import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class RightMenuService {
  collapsed: boolean;

  constructor() {
    this.collapsed = false;
  }

  get collapsedState() {
    return this.collapsed ? 'hide': 'show';
  }

  toggle() {
    this.collapsed = !this.collapsed;
  }
}
