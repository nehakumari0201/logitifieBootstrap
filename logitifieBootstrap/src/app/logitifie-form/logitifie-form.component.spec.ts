import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogitifieFormComponent } from './logitifie-form.component';

describe('LogitifieFormComponent', () => {
  let component: LogitifieFormComponent;
  let fixture: ComponentFixture<LogitifieFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogitifieFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogitifieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
