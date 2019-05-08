import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoFormComponent } from './juego-form.component';

describe('JuegoFormComponent', () => {
  let component: JuegoFormComponent;
  let fixture: ComponentFixture<JuegoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
