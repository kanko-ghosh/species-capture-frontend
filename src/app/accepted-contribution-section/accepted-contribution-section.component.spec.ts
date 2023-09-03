import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedContributionSectionComponent } from './accepted-contribution-section.component';

describe('AcceptedContributionSectionComponent', () => {
  let component: AcceptedContributionSectionComponent;
  let fixture: ComponentFixture<AcceptedContributionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceptedContributionSectionComponent]
    });
    fixture = TestBed.createComponent(AcceptedContributionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
