import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeAddPage } from './recipe-add.page';

describe('RecipeAddPage', () => {
  let component: RecipeAddPage;
  let fixture: ComponentFixture<RecipeAddPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
