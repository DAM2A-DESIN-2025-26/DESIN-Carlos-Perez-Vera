import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidenciaEditarPage } from './incidencia-editar.page';

describe('IncidenciaEditarPage', () => {
  let component: IncidenciaEditarPage;
  let fixture: ComponentFixture<IncidenciaEditarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
