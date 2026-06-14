import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaNew } from './incidencia-new';

describe('IncidenciaNew', () => {
  let component: IncidenciaNew;
  let fixture: ComponentFixture<IncidenciaNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
