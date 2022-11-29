import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public isSidebarCollapsed = new Subject<boolean>();

  constructor() { }

  collapse(state: boolean) {
    this.isSidebarCollapsed.next(state);
  }
}
