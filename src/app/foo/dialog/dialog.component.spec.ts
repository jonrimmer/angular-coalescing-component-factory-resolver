import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooDialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: FooDialogComponent;
  let fixture: ComponentFixture<FooDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooDialogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
