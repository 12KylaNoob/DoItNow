import { Component } from '@angular/core';
import { WaysService } from './ways.service';

@Component({
  selector: 'app-ways',
  templateUrl: './ways.component.html',
  styleUrls: ['./ways.component.css'],
})
export class WaysComponent {
  constructor(private waysService: WaysService) {}
  way:any;

  ngOnInit() {
    this.way = this.waysService.way;
  }
}
