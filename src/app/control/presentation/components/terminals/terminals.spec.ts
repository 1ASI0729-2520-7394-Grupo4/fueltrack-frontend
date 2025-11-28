import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Terminals } from './terminals';

describe('Terminals', () => {
  let component: Terminals;
  let fixture: ComponentFixture<Terminals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Terminals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Terminals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
