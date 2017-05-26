import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OnsNavigator, Params } from 'angular2-onsenui';
import { Page2Component } from './page2.component';

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [OnsNavigator, Params]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
