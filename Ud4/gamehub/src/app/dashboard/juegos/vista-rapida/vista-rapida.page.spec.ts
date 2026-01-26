import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaRapidaPage } from './vista-rapida.page';

describe('VistaRapidaPage', () => {
  let component: VistaRapidaPage;
  let fixture: ComponentFixture<VistaRapidaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaRapidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
