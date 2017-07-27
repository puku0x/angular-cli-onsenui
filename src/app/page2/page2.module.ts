import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';

@NgModule({
  imports: [
    CommonModule,
    OnsenModule
  ],
  entryComponents: [Page2Component],
  declarations: [Page2Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Page2Module { }
