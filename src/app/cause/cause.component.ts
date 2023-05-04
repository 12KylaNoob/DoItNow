import { Component } from '@angular/core';
import { CauseService } from './cause.service';

@Component({
  selector: 'app-cause',
  templateUrl: './cause.component.html',
  styleUrls: ['./cause.component.css'],
})
export class CauseComponent {
  constructor(private causeService: CauseService) {}
  causes: any;
  ngOnInit() {
    this.causes = this.causeService.causes;
  }
}
