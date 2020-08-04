import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdDirective } from './ad.directive';
import { OneBarComponent } from './side/one-bar/one-bar.component';
import { TwoBarComponent } from './side/two-bar/two-bar.component';
import { ThreeBarComponent } from './side/three-bar/three-bar.component';
import { MainComponent } from './main/main.component';
import { SideComponent } from './side/side.component';
import { SidebarService } from './side/sidebar.service';

@NgModule({
  imports: [ BrowserModule ],
  providers: [SidebarService],
  declarations: [ AppComponent,
                  AdDirective,
                  OneBarComponent,
                  TwoBarComponent,
                  ThreeBarComponent,
                  MainComponent,
                  SideComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {}
}

