import { Injectable, Component, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SidebarItem = {
  name: string,
  component: Type<unknown>,
};

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public activeSidebar$: BehaviorSubject<SidebarItem> = new BehaviorSubject<SidebarItem>(null);

  constructor() { }

  public show(item: SidebarItem): void {
    this.activeSidebar$.next(item);
  }

  public close(): void {
    this.activeSidebar$.next(null);
  }
}
