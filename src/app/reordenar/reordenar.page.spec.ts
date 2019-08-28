import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReordenarPage } from './reordenar.page';

describe('ReordenarPage', () => {
  let component: ReordenarPage;
  let fixture: ComponentFixture<ReordenarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReordenarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReordenarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
