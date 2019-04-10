import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: BarDialogComponent;
  let fixture: ComponentFixture<BarDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
