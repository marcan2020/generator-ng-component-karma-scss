import { TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { <%= component_name %>Component } from './<%= file_name %>.component';
import { click } from '../../testing';

let fixture: ComponentFixture<<%= component_name %>Component>;
let comp: <%= component_name %>Component;

describe('<%= component_name %>Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        <%= component_name %>Component
      ]
    });

    fixture = TestBed.createComponent(<%= component_name %>Component);
    comp = fixture.componentInstance;
  });

  it('should create <%= component_name %>Component', () => {
    expect(comp).toBeTruthy();
  });

});
