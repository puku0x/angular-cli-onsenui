import { Component, OnInit } from '@angular/core';
import { OnsNavigator, Params } from 'ngx-onsenui';

import { Page2Component } from '../page2/page2.component';

@Component({
  selector: 'ons-page[page1]',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private navi: OnsNavigator, private params: Params) { }

  push() {
    this.navi.element.pushPage(Page2Component);
  }

  ngOnInit() {
  }

}
