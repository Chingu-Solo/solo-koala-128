import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  main = {}

  fonts: Object;

  constructor(private config: ConfigService, private _http: HttpService) { }

  ngOnInit() {
    this.main = this.getMain();
    this._http.getFonts().subscribe(data => {
      this.fonts = data;
      console.log(this.fonts);
    });
  }
  
  getMain() {
    return this.config.getConfig().main;
  }

}
