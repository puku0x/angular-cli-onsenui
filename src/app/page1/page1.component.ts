import { Component, OnInit } from '@angular/core';
import { OnsNavigator } from 'ngx-onsenui';
import { Page2Component } from '../page2/page2.component';

@Component({
  selector: 'ons-page[page1]',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private navi: OnsNavigator) { }

  ngOnInit() {
  }

  push() {
    this.navi.nativeElement.pushPage(Page2Component);
  }

}
