import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesSectionComponent } from './species-section.component';

describe('SpeciesSectionComponent', () => {
  let component: SpeciesSectionComponent;
  let fixture: ComponentFixture<SpeciesSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeciesSectionComponent]
    });
    fixture = TestBed.createComponent(SpeciesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
