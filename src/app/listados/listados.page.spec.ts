import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadosPage } from './listados.page';

describe('ListadosPage', () => {
  let component: ListadosPage;
  let fixture: ComponentFixture<ListadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
