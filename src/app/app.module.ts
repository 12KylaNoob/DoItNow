import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CauseComponent } from './cause/cause.component';
import { DefineComponent } from './define/define.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { WaysComponent } from './ways/ways.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveysService } from './survey-form/surveys.service';
import { ChoicesService } from './survey-form/choices.service';

@NgModule({
  declarations: [
    AppComponent,
    CauseComponent,
    DefineComponent,
    DescriptionComponent,
    FooterComponent,
    SurveyComponent,
    SurveyFormComponent,
    WaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [SurveysService,ChoicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
