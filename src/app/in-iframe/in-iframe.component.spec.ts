import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InIframeComponent } from './in-iframe.component';

describe('InIframeComponent', () => {
  let component: InIframeComponent;
  let fixture: ComponentFixture<InIframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InIframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InIframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
