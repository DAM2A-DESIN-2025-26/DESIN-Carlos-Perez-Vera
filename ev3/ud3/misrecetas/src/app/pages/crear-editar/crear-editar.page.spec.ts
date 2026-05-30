import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearEditarPage } from './crear-editar.page';

describe('CrearEditarPage', () => {
  let component: CrearEditarPage;
  let fixture: ComponentFixture<CrearEditarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
