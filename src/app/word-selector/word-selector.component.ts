import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ConfigService} from '../config.service';

@Component({
  selector: 'app-word-selector',
  templateUrl: './word-selector.component.html',
  styleUrls: ['./word-selector.component.css']
})
export class WordSelectorComponent implements OnInit {
  MadLibList = [];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.getMadLibList();
  }
  getMadLibList(): any[] {
    this.configService.getMadLibs()
      .subscribe( response => {})
  }

}
