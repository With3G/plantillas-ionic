import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasPage } from './fechas.page';

describe('FechasPage', () => {
  let component: FechasPage;
  let fixture: ComponentFixture<FechasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
