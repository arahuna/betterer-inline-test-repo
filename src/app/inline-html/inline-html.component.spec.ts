import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineHtmlComponent } from './inline-html.component';

describe('InlineHtmlComponent', () => {
  let component: InlineHtmlComponent;
  let fixture: ComponentFixture<InlineHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
