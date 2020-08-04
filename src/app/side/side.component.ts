import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { SidebarService, SidebarItem } from './sidebar.service';
import { AdDirective } from '../ad.directive';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {

  @ViewChild(AdDirective, {static: true}) adHost: AdDirective;

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.sidebarService.activeSidebar$.subscribe(this.changeSidebar);
  }

  public changeSidebar = (item: SidebarItem): void => {

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    if (!!item) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);

      const componentRef = viewContainerRef.createComponent<any>(componentFactory);
      // instead of <any> we can have some common interface for the component to adhere to
      // which would allow us to pass data down to the component instance...
      // componentRef.instance.data = item.data;
    }
  }

}
