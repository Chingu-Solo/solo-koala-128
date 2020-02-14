import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getFonts() {
    return this.http.get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDJRS7-VCxcmPZrvk2U1o2ONQKrFLow4FA');
  }
}
