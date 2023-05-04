import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ChoicesService {
  constructor(private http: HttpClient) {}

  getChoices() {
    return this.http.get('../../assets/choice.json');
  }
}
