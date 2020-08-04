import { Component, OnInit, Type } from '@angular/core';
import { SidebarService } from '../side/sidebar.service';
import { OneBarComponent } from '../side/one-bar/one-bar.component';
import { TwoBarComponent } from '../side/two-bar/two-bar.component';
import { ThreeBarComponent } from '../side/three-bar/three-bar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    public sidebarService: SidebarService
  ) { }

  show(name: string) {
    let component: Type<unknown>;

    // doesn't have to be a switch
    // just did it that way to be easy
    switch (name) {
      case 'one':
        component = OneBarComponent;
        break;
      case 'two':
        component = TwoBarComponent;
        break;
      case 'three':
        component = ThreeBarComponent;
        break;
    }

    if (component) {
      this.sidebarService.show({
        name,
        component,
      });
    }
  }
}
