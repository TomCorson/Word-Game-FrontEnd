import {Component, Input, OnInit} from '@angular/core';
import { MadLib } from './mad-lib';


@Component({
  selector: 'app-word-input',
  templateUrl: './word-input.component.html',
  styleUrls: ['./word-input.component.css']
})
export class WordInputComponent implements OnInit {
  @Input() madlib: MadLib | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
