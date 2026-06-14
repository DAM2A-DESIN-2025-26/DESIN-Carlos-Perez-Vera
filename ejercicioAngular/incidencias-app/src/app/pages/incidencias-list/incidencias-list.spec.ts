import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciasList } from './incidencias-list';

describe('IncidenciasList', () => {
  let component: IncidenciasList;
  let fixture: ComponentFixture<IncidenciasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciasList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciasList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
