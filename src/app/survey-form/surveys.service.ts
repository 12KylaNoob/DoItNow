import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SurveysService {
  constructor(private http: HttpClient) {}
  getPrompt() {
    return this.http.get('../../assets/data.json');
  }
  
}
