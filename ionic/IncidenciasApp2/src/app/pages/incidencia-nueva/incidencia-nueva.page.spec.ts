import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidenciaNuevaPage } from './incidencia-nueva.page';

describe('IncidenciaNuevaPage', () => {
  let component: IncidenciaNuevaPage;
  let fixture: ComponentFixture<IncidenciaNuevaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaNuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
