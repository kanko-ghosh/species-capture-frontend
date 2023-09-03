import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingContributionSectionComponent } from './pending-contribution-section.component';

describe('PendingContributionSectionComponent', () => {
  let component: PendingContributionSectionComponent;
  let fixture: ComponentFixture<PendingContributionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingContributionSectionComponent]
    });
    fixture = TestBed.createComponent(PendingContributionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
