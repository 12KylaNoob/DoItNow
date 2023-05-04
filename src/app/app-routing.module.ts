import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './description/description.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
const routes: Routes = [
  { path: '', component: DescriptionComponent },
  { path: 'survey-form', component: SurveyFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
