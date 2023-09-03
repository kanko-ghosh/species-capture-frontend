import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { SpeciesSectionComponent } from './species-section/species-section.component';
import { AcceptedContributionSectionComponent } from './accepted-contribution-section/accepted-contribution-section.component';
import { PendingContributionSectionComponent } from './pending-contribution-section/pending-contribution-section.component';
import { RejectedContributionSectionComponent } from './rejected-contribution-section/rejected-contribution-section.component';
import { UserSectionComponent } from './user-section/user-section.component';

const routes: Routes = [
    {path: '', component: HomeSectionComponent}, 
    {path: 'species', component: SpeciesSectionComponent}, 
    {path: 'accepted_contribution', component: AcceptedContributionSectionComponent}, 
    {path: 'pending_contribution', component: PendingContributionSectionComponent}, 
    {path: 'rejected_contribution', component: RejectedContributionSectionComponent}, 
    {path: 'user', component: UserSectionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
