import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasDetalle } from './incidencias-detalle';

describe('IncidenciasDetalle', () => {
  let component: IncidenciasDetalle;
  let fixture: ComponentFixture<IncidenciasDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciasDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciasDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
