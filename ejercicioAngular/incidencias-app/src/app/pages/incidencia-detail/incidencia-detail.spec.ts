import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaDetail } from './incidencia-detail';

describe('IncidenciaDetail', () => {
  let component: IncidenciaDetail;
  let fixture: ComponentFixture<IncidenciaDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidenciaDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncidenciaDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
