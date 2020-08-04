import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-side></app-side>
      <app-main></app-main>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

