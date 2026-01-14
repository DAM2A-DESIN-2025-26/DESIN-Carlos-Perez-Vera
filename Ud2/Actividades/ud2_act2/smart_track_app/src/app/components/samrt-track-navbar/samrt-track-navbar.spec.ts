import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamrtTrackNavbar } from './samrt-track-navbar';

describe('SamrtTrackNavbar', () => {
  let component: SamrtTrackNavbar;
  let fixture: ComponentFixture<SamrtTrackNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SamrtTrackNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamrtTrackNavbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
