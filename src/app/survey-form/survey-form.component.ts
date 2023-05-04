import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SurveysService } from './surveys.service';
import { ChoicesService } from './choices.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent {
  prompts: any;
  choices: any;
  total = 0;
  constructor(
    private router: Router,
    private surveysService: SurveysService,
    private choicesService: ChoicesService
  ) {}

  ngOnInit() {
    this.surveysService.getPrompt().subscribe((data: any) => {
      this.prompts = data;
    });
    this.choicesService.getChoices().subscribe((data: any) => {
      this.choices = data;
    });
  }
  goBack() {
    this.router.navigate(['']);
  }

  userChoice($event:any) {
    
  }
}
