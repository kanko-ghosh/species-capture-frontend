import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedContributionSectionComponent } from './rejected-contribution-section.component';

describe('RejectedContributionSectionComponent', () => {
  let component: RejectedContributionSectionComponent;
  let fixture: ComponentFixture<RejectedContributionSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedContributionSectionComponent]
    });
    fixture = TestBed.createComponent(RejectedContributionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
