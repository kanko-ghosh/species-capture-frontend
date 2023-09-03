import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { SpeciesSectionComponent } from './species-section/species-section.component';
import { UserSectionComponent } from './user-section/user-section.component';
import { AcceptedContributionSectionComponent } from './accepted-contribution-section/accepted-contribution-section.component';
import { PendingContributionSectionComponent } from './pending-contribution-section/pending-contribution-section.component';
import { RejectedContributionSectionComponent } from './rejected-contribution-section/rejected-contribution-section.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpeciesSectionComponent,
    UserSectionComponent,
    AcceptedContributionSectionComponent,
    PendingContributionSectionComponent,
    RejectedContributionSectionComponent,
    HomeSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
