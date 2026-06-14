import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaIncidenciaComponent } from './nueva-incidencia';

describe('NuevaIncidencia', () => {
  let component: NuevaIncidenciaComponent;
  let fixture: ComponentFixture<NuevaIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaIncidenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
