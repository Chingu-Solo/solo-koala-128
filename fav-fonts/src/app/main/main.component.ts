import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  main = {}

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.main = this.getMain();
  }
  
  getMain() {
    return this.config.getConfig().main;
  }

}
