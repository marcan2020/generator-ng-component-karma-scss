import { TestBed, ComponentFixture, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { <%= ComponentName %>Component } from './<%= FileName %>.component';
import { click } from '../../testing';

let fixture: ComponentFixture<<%= ComponentName %>Component>;
let comp: <%= ComponentName %>Component;

describe('<%= ComponentName %>Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        <%= ComponentName %>Component
      ]
    });

    fixture = TestBed.createComponent(<%= ComponentName %>Component);
    comp = fixture.componentInstance;
  });

  it('should create <%= ComponentName %>Component', () => {
    expect(comp).toBeTruthy();
  });

});
