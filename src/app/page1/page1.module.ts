import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnsenModule, OnsNavigator } from 'ngx-onsenui';
import { Page1Component } from './page1.component';

@NgModule({
  imports: [
    CommonModule,
    OnsenModule
  ],
  providers: [OnsNavigator],
  entryComponents: [Page1Component],
  declarations: [Page1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Page1Module { }
